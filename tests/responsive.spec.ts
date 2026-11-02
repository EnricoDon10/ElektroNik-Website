import { expect, test } from "@playwright/test";
import {
  MOBILE_NAVIGATION_MAX_WIDTH,
  expectLocatorInsideViewport,
  expectMinimumTargetSize,
  gotoHome,
} from "./helpers";

test("Seite besitzt keine horizontale Überbreite oder abgeschnittene Kerninhalte", async ({ page }) => {
  await gotoHome(page);

  const result = await page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(
        "a, button, input, select, textarea, h1, h2, h3, main p, main li",
      ),
    );
    const overflowingElements = candidates
      .filter((element) => {
        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        const rendered = style.display !== "none"
          && style.visibility !== "hidden"
          && Number(style.opacity) > 0
          && rect.width > 0
          && rect.height > 0;

        return rendered && (rect.left < -1 || rect.right > viewportWidth + 1);
      })
      .map((element) => ({
        className: element.className,
        rect: element.getBoundingClientRect().toJSON(),
        tag: element.tagName,
        text: element.textContent?.trim().slice(0, 80),
      }));

    return {
      bodyOverflow: document.body.scrollWidth - viewportWidth,
      documentOverflow: document.documentElement.scrollWidth - viewportWidth,
      overflowingElements,
    };
  });

  expect(result.bodyOverflow).toBeLessThanOrEqual(1);
  expect(result.documentOverflow).toBeLessThanOrEqual(1);
  expect(result.overflowingElements).toEqual([]);
});

test("Header-Projekt-CTA und linksbündiger Hero-Leistungslink sind korrekt", async ({ page }) => {
  await gotoHome(page);
  const viewport = page.viewportSize();

  if (viewport) {
    const heroBox = await page.locator("#start").boundingBox();
    const servicesBox = await page.locator("#leistungen").boundingBox();
    expect(heroBox?.height ?? 0).toBeGreaterThanOrEqual(viewport.height - 1);
    expect(servicesBox?.y ?? 0).toBeGreaterThanOrEqual(viewport.height - 1);
  }

  const headerCta = page.getByRole("link", { name: "Zum WhatsApp-Anfrageformular" });
  const heroActions = page.locator("#start .hero-actions");
  const servicesHeroCta = heroActions.getByRole("link", { name: /Leistungen ansehen/ });

  await expect(heroActions.locator('a[href="#whatsapp-anfrage"]')).toHaveCount(0);
  await expect(heroActions.getByRole("link")).toHaveCount(1);

  for (const cta of [headerCta, servicesHeroCta]) {
    await expect(cta).toBeVisible();
    await expectLocatorInsideViewport(cta);
    await expectMinimumTargetSize(cta);
  }

  const [contentBox, servicesCtaBox] = await Promise.all([
    page.locator("#start .hero-content").boundingBox(),
    servicesHeroCta.boundingBox(),
  ]);
  expect(contentBox).not.toBeNull();
  expect(servicesCtaBox).not.toBeNull();
  if (contentBox && servicesCtaBox) {
    expect(Math.abs(servicesCtaBox.x - contentBox.x)).toBeLessThanOrEqual(1);
  }

  for (const serviceName of ["Netzwerkverkabelung und IT-Beratung", "E-Mobilität"]) {
    const satellite = page.locator(`[data-hero-chip][aria-label^="${serviceName}:"]`);
    const icon = satellite.locator(".visual-chip-icon svg");
    await expect(satellite).toBeVisible();
    await expect(icon).toBeVisible();
    const iconBox = await icon.boundingBox();
    expect(iconBox).not.toBeNull();
    if (iconBox) {
      expect(iconBox.width).toBeGreaterThanOrEqual(18);
      expect(iconBox.height).toBeGreaterThanOrEqual(18);
    }
  }

  if (viewport && viewport.width <= MOBILE_NAVIGATION_MAX_WIDTH) {
    await expectMinimumTargetSize(page.getByRole("button", { name: "Menü öffnen" }));
  }

  const formButton = page.getByRole("button", { name: /Anfrage in WhatsApp öffnen/ });
  await formButton.scrollIntoViewIfNeeded();
  await expect(formButton).toBeInViewport();
  await expectMinimumTargetSize(formButton);
  await expect.poll(() => formButton.evaluate((element) => {
    const rect = element.getBoundingClientRect();
    const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    return hit === element || Boolean(hit && element.contains(hit));
  })).toBe(true);
});

test("Kontaktformular ist im zweispaltigen Layout leicht nach unten versetzt", async ({ page }) => {
  await gotoHome(page);

  const width = page.viewportSize()?.width ?? 0;
  const marginTop = await page.locator(".contact-form-shell").evaluate(
    (element) => Number.parseFloat(getComputedStyle(element).marginTop),
  );

  if (width > 900) {
    expect(marginTop).toBeGreaterThanOrEqual(28);
  } else {
    expect(marginTop).toBe(0);
  }
});

test("Cookie-Einstellungsbutton verdeckt den Footer-Credit nicht", async ({ page }) => {
  await gotoHome(page);
  await page.locator(".footer-bottom").scrollIntoViewIfNeeded();

  const [creditBox, consentButtonBox] = await Promise.all([
    page.locator(".footer-credit").boundingBox(),
    page.getByTestId("floating-consent-settings").boundingBox(),
  ]);

  expect(creditBox).not.toBeNull();
  expect(consentButtonBox).not.toBeNull();
  if (creditBox && consentButtonBox) {
    expect(creditBox.x).toBeGreaterThanOrEqual(consentButtonBox.x + consentButtonBox.width);
  }
});

test("Reduced Motion reagiert auch während der Sitzung und zeigt den statischen Endzustand", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await gotoHome(page);

  expect(await page.evaluate(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)).toBe(true);

  const hiddenCoreContent = await page.evaluate(() => Array.from(
    document.querySelectorAll<HTMLElement>(
      "[data-hero-copy], [data-hero-visual], [data-hero-chip], [data-reveal]",
    ),
  ).filter((element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none"
      && (Number(style.opacity) < 0.99 || rect.width === 0 || rect.height === 0);
  }).map((element) => element.className));

  expect(hiddenCoreContent).toEqual([]);

  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect.poll(() => page.evaluate(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )).toBe(false);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(() => page.evaluate(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )).toBe(true);

  await page.locator("#ablauf").scrollIntoViewIfNeeded();
  await expect(page.locator("[data-process-track]")).toHaveAttribute(
    "data-process-motion-state",
    "complete",
  );
  await expect(page.locator("[data-hero-visual]")).toHaveCSS("translate", "none");

  const hiddenAfterPreferenceChange = await page.evaluate(() => Array.from(
    document.querySelectorAll<HTMLElement>(
      "[data-hero-copy], [data-hero-visual], [data-hero-chip], [data-reveal]",
    ),
  ).filter((element) => {
    const style = getComputedStyle(element);
    const rect = element.getBoundingClientRect();
    return style.display !== "none"
      && (Number(style.opacity) < 0.99 || rect.width === 0 || rect.height === 0);
  }).map((element) => element.className));

  expect(hiddenAfterPreferenceChange).toEqual([]);
});
