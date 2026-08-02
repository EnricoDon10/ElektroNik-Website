import { expect, type Locator, type Page } from "@playwright/test";
import { consentConfig } from "../app/consent/consent-config";

export const MOBILE_NAVIGATION_MAX_WIDTH = 1279;

export const contactTargets = {
  email: "mailto:Elektro-nik@t-online.de",
  phone: "tel:+4915774299367",
  whatsapp: "https://wa.me/4915774299367",
} as const;

export async function setStoredConsent(page: Page, externalMedia = false) {
  await page.addInitScript(
    ({ storageKey, value }) => window.localStorage.setItem(storageKey, JSON.stringify(value)),
    {
      storageKey: consentConfig.storageKey,
      value: {
        consentVersion: consentConfig.consentVersion,
        necessary: true,
        externalMedia,
        updatedAt: "2026-08-02T00:00:00.000Z",
      },
    },
  );
}

export async function gotoHome(page: Page) {
  await setStoredConsent(page);
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("main#main-content")).toBeVisible();
  await page.waitForFunction(() => (
    document.querySelector("#start")?.getAttribute("data-hero-motion-state") === "complete"
  ));
}

export async function expectLocatorInsideViewport(locator: Locator) {
  const box = await locator.boundingBox();
  const viewport = locator.page().viewportSize();

  expect(box, "Das Element braucht eine messbare sichtbare Fläche.").not.toBeNull();
  expect(viewport, "Für den Test muss ein expliziter Viewport gesetzt sein.").not.toBeNull();

  if (!box || !viewport) {
    return;
  }

  expect(box.x).toBeGreaterThanOrEqual(-1);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(box.y).toBeGreaterThanOrEqual(-1);
  expect(box.y + box.height).toBeLessThanOrEqual(viewport.height + 1);
}

export async function expectMinimumTargetSize(locator: Locator, minimum = 44) {
  const box = await locator.boundingBox();

  expect(box, "Das Bedienelement braucht eine messbare sichtbare Fläche.").not.toBeNull();
  if (!box) {
    return;
  }

  expect(box.height).toBeGreaterThanOrEqual(minimum);
  expect(box.width).toBeGreaterThanOrEqual(minimum);
}
