import { expect, test, type Page } from "@playwright/test";
import { consentConfig } from "../app/consent/consent-config";
import { expectLocatorInsideViewport, gotoHome } from "./helpers";

async function readConsent(page: Page) {
  return page.evaluate((storageKey) => {
    const value = window.localStorage.getItem(storageKey);
    return value ? JSON.parse(value) : null;
  }, consentConfig.storageKey);
}

test("erster Besuch zeigt drei gleichwertig erreichbare Hauptaktionen und blockiert Maps", async ({ page }) => {
  const googleRequests: string[] = [];
  page.on("request", (request) => {
    if (request.url().startsWith("https://www.google.com/maps")) {
      googleRequests.push(request.url());
    }
  });

  await page.goto("/");

  const banner = page.getByTestId("consent-banner");
  const acceptAll = banner.getByRole("button", { name: "Alle akzeptieren" });
  const rejectAll = banner.getByRole("button", { name: "Alle ablehnen" });
  const settings = banner.getByRole("button", { name: "Einstellungen" });
  await expect(banner).toBeVisible();
  await expect(acceptAll).toBeVisible();
  await expect(rejectAll).toBeVisible();
  await expect(settings).toBeVisible();
  await expectLocatorInsideViewport(acceptAll);
  await expectLocatorInsideViewport(rejectAll);
  await expectLocatorInsideViewport(settings);
  const acceptBox = await acceptAll.boundingBox();
  const rejectBox = await rejectAll.boundingBox();
  expect(Math.abs((acceptBox?.width ?? 0) - (rejectBox?.width ?? 0))).toBeLessThanOrEqual(1);
  expect(Math.abs((acceptBox?.height ?? 0) - (rejectBox?.height ?? 0))).toBeLessThanOrEqual(1);
  await expect(acceptAll).toHaveClass(/consent-button-decision/);
  await expect(rejectAll).toHaveClass(/consent-button-decision/);
  await expect(banner.getByRole("link", { name: "Datenschutzerklärung" })).toHaveAttribute("href", "/datenschutz/");
  await expect(banner.getByRole("link", { name: "Impressum" })).toHaveAttribute("href", "/impressum/");
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);
  expect(googleRequests).toEqual([]);
});

test("Alle ablehnen speichert nur notwendige Funktionen und bleibt nach Reload erhalten", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("consent-banner").getByRole("button", { name: "Alle ablehnen" }).click();

  await expect(page.getByTestId("consent-banner")).toHaveCount(0);
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);
  await expect.poll(() => readConsent(page)).toMatchObject({
    consentVersion: consentConfig.consentVersion,
    necessary: true,
    externalMedia: false,
  });

  await page.reload();
  await expect(page.getByTestId("consent-banner")).toHaveCount(0);
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);
});

test("Alle akzeptieren speichert die Auswahl und erlaubt Google Maps", async ({ page }) => {
  await page.route(/https:\/\/www\.google\.com\/maps.*/, async (route) => {
    await route.fulfill({ body: "<!doctype html><title>Map test stub</title>", contentType: "text/html" });
  });
  await page.goto("/");
  await page.getByTestId("consent-banner").getByRole("button", { name: "Alle akzeptieren" }).click();

  await expect(page.locator(".contact-map iframe")).toHaveCount(1);
  await expect.poll(() => readConsent(page)).toMatchObject({
    necessary: true,
    externalMedia: true,
  });
});

test("individuelle Auswahl und Footer-Widerruf steuern das Karten-Iframe sofort", async ({ page }) => {
  await page.route(/https:\/\/www\.google\.com\/maps.*/, async (route) => {
    await route.fulfill({ body: "<!doctype html><title>Map test stub</title>", contentType: "text/html" });
  });
  await page.goto("/");
  await page.getByTestId("consent-banner").getByRole("button", { name: "Einstellungen" }).click();

  const dialog = page.getByTestId("consent-settings-dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Notwendig", { exact: true })).toBeVisible();
  await expect(dialog.getByText("Externe Medien", { exact: true })).toBeVisible();
  await expect(dialog.locator(".consent-services").filter({ hasText: "Google Maps" })).toBeVisible();
  await expect(dialog.getByText("Statistik", { exact: true })).toHaveCount(0);
  await expect(dialog.getByText("Marketing", { exact: true })).toHaveCount(0);
  await expect(dialog.getByRole("button", { name: "Alle akzeptieren" })).toBeVisible();
  await expect(dialog.getByRole("button", { name: "Alle ablehnen" })).toBeVisible();

  const externalMedia = dialog.getByRole("checkbox", { name: "Externe Medien erlauben" });
  await expect(externalMedia).not.toBeChecked();
  await externalMedia.check();
  await dialog.getByRole("button", { name: "Auswahl speichern" }).click();
  await expect(page.locator(".contact-map iframe")).toHaveCount(1);

  await page.getByRole("button", { name: "Datenschutzeinstellungen" }).click();
  await expect(dialog).toBeVisible();
  await externalMedia.uncheck();
  await dialog.getByRole("button", { name: "Auswahl speichern" }).click();
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "Karte laden" })).toBeVisible();
});

test("Einstellungsdialog schließt mit Escape und stellt den Fokus wieder her", async ({ page }) => {
  await page.goto("/");
  const settingsButton = page.getByTestId("consent-banner").getByRole("button", { name: "Einstellungen" });
  await settingsButton.click();

  const dialog = page.getByTestId("consent-settings-dialog");
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(settingsButton).toBeFocused();
});

test("Karte laden erteilt gezielt die Einwilligung für externe Medien", async ({ page }) => {
  await page.route(/https:\/\/www\.google\.com\/maps.*/, async (route) => {
    await route.fulfill({ body: "<!doctype html><title>Map test stub</title>", contentType: "text/html" });
  });
  await gotoHome(page);
  await page.getByRole("button", { name: "Karte laden" }).click();

  await expect(page.locator(".contact-map iframe")).toHaveCount(1);
  await expect.poll(() => readConsent(page)).toMatchObject({ externalMedia: true });
});

test("Cookie-Einstellungen bleiben unten links auf allen Seiten erreichbar", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("consent-banner").getByRole("button", { name: "Alle ablehnen" }).click();

  const floatingButton = page.getByTestId("floating-consent-settings");
  await expect(floatingButton).toBeVisible();
  await expect(floatingButton).toHaveCSS("position", "fixed");
  await expect(floatingButton).toHaveAttribute("aria-label", "Cookie-Einstellungen öffnen");
  await expectLocatorInsideViewport(floatingButton);

  await floatingButton.click();
  await expect(page.getByTestId("consent-settings-dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(floatingButton).toBeFocused();

  await page.goto("/datenschutz/");
  await expect(page.getByTestId("floating-consent-settings")).toBeVisible();
  await expectLocatorInsideViewport(page.getByTestId("floating-consent-settings"));
});

test("abgelaufene, veraltete und beschädigte Consent-Daten werden sicher verworfen", async ({ page }) => {
  await page.addInitScript(({ storageKey }) => {
    window.localStorage.setItem(storageKey, JSON.stringify({
      consentVersion: 1,
      necessary: true,
      externalMedia: true,
      updatedAt: "2020-01-01T00:00:00.000Z",
    }));
  }, { storageKey: consentConfig.storageKey });

  await page.goto("/");
  await expect(page.getByTestId("consent-banner")).toBeVisible();
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);

  await page.evaluate((storageKey) => {
    window.localStorage.setItem(storageKey, "{nicht-valide");
  }, consentConfig.storageKey);
  await page.reload();
  await expect(page.getByTestId("consent-banner")).toBeVisible();
  await expect(page.locator(".contact-map iframe")).toHaveCount(0);
});
