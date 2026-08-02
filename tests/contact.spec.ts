import { expect, test } from "@playwright/test";
import { contactTargets, gotoHome } from "./helpers";

test("Telefon-, E-Mail- und direkte WhatsApp-Ziele bleiben unverändert", async ({ page }) => {
  await gotoHome(page);

  const phoneLinks = page.locator(`a[href="${contactTargets.phone}"]`);
  const emailLinks = page.locator(`a[href="${contactTargets.email}"]`);
  const whatsappLinks = page.locator(`a[href="${contactTargets.whatsapp}"]`);

  expect(await phoneLinks.count()).toBeGreaterThanOrEqual(2);
  expect(await emailLinks.count()).toBeGreaterThanOrEqual(2);
  expect(await whatsappLinks.count()).toBeGreaterThanOrEqual(2);

  await expect(page.locator(`#kontakt a[href="${contactTargets.phone}"]`)).toHaveCount(1);
  await expect(page.locator(`#kontakt a[href="${contactTargets.email}"]`)).toHaveCount(1);
});

test("WhatsApp-Formular erzeugt die korrekt kodierte Popup-URL", async ({ page }) => {
  await page.addInitScript(() => {
    let openedUrl = "";
    Reflect.set(window, "readLastOpenedUrl", () => openedUrl);
    window.open = ((url?: string | URL) => {
      openedUrl = String(url ?? "");
      return { opener: null } as Window;
    }) as typeof window.open;
  });
  await gotoHome(page);

  await page.getByLabel("Gewünschte Leistung").selectOption({ label: "E-Mobilität" });
  await page.getByLabel(/Ihr Name/).fill("Jörg Müller");
  await page.getByLabel(/Ihre E-Mail-Adresse/).fill("joerg@example.de");
  await page.getByLabel("Worum geht es?").fill("Wallbox & Prüfung – Bochum");
  await page.getByRole("button", { name: /Anfrage in WhatsApp öffnen/ }).click();

  const openedUrl = await page.evaluate(() => {
    const readLastOpenedUrl = Reflect.get(window, "readLastOpenedUrl") as () => string;
    return readLastOpenedUrl();
  });
  const url = new URL(openedUrl);

  expect(`${url.origin}${url.pathname}`).toBe(contactTargets.whatsapp);
  expect(url.searchParams.get("text")).toBe(
    [
      "Hallo Elektro - NIK,",
      "",
      "Thema: E-Mobilität",
      "Name: Jörg Müller",
      "E-Mail: joerg@example.de",
      "",
      "Wallbox & Prüfung – Bochum",
    ].join("\n"),
  );
  await expect(page.getByRole("status")).toContainText("WhatsApp wurde");
});

test("WhatsApp-Formular meldet einen blockierten Popup-Versuch", async ({ page }) => {
  await page.addInitScript(() => {
    window.open = (() => null) as typeof window.open;
  });
  await gotoHome(page);

  await page.getByLabel("Worum geht es?").fill("Bitte um Rückruf zur Elektroplanung");
  await page.getByRole("button", { name: /Anfrage in WhatsApp öffnen/ }).click();

  await expect(page.getByRole("status")).toContainText("konnte nicht geöffnet werden");
});

test("Pflichtfeld verhindert leere oder zu kurze WhatsApp-Anfragen", async ({ page }) => {
  await page.addInitScript(() => {
    Reflect.set(window, "popupAttempted", false);
    window.open = (() => {
      Reflect.set(window, "popupAttempted", true);
      return { opener: null } as Window;
    }) as typeof window.open;
  });
  await gotoHome(page);

  const message = page.getByLabel("Worum geht es?");
  await message.fill("Kurz");
  await page.getByRole("button", { name: /Anfrage in WhatsApp öffnen/ }).click();

  await expect(message).toBeFocused();
  await expect.poll(() => message.evaluate(
    (element) => (element as HTMLTextAreaElement).validity.valid,
  )).toBe(false);
  expect(await page.evaluate(() => Reflect.get(window, "popupAttempted"))).toBe(false);
});

test("Ungültiges optionales E-Mail-Format verhindert den WhatsApp-Aufruf", async ({ page }) => {
  await page.addInitScript(() => {
    Reflect.set(window, "popupAttempted", false);
    window.open = (() => {
      Reflect.set(window, "popupAttempted", true);
      return { opener: null } as Window;
    }) as typeof window.open;
  });
  await gotoHome(page);

  const email = page.getByLabel(/Ihre E-Mail-Adresse/);
  await email.fill("keine-gueltige-adresse");
  await page.getByLabel("Worum geht es?").fill("Bitte um Rückruf zur Elektroplanung");
  await page.getByRole("button", { name: /Anfrage in WhatsApp öffnen/ }).click();

  await expect(email).toBeFocused();
  await expect.poll(() => email.evaluate(
    (element) => (element as HTMLInputElement).validity.typeMismatch,
  )).toBe(true);
  expect(await page.evaluate(() => Reflect.get(window, "popupAttempted"))).toBe(false);
});

test("Google Maps wird erst nach Einwilligung eingebettet", async ({ page }) => {
  await page.route(/https:\/\/www\.google\.com\/maps.*/, async (route) => {
    await route.fulfill({ body: "<!doctype html><title>Map test stub</title>", contentType: "text/html" });
  });
  await gotoHome(page);

  const map = page.locator(".contact-map");
  await expect(map.locator("iframe")).toHaveCount(0);
  await page.getByRole("button", { name: "Karte laden" }).click();

  const iframe = map.locator("iframe");
  await expect(iframe).toHaveCount(1);
  await expect(iframe).toHaveAttribute("src", /google\.com\/maps\?.*output=embed/);
  await expect(iframe).toHaveAttribute("title", /Google Maps.*Elektro - NIK.*Lindengraben 6.*44803 Bochum/);
  await expect(page.getByRole("button", { name: "Karte laden" })).toHaveCount(0);

  const directions = map.getByRole("link", { name: /In Maps öffnen/ });
  await expect(directions).toHaveAttribute("target", "_blank");
  await expect(directions).toHaveAttribute("rel", /noopener/);
  await expect(directions).toHaveAttribute("href", /google\.com\/maps\/search/);
});
