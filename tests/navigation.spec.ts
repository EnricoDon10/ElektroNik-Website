import { expect, test } from "@playwright/test";
import {
  MOBILE_NAVIGATION_MAX_WIDTH,
  expectMinimumTargetSize,
  gotoHome,
} from "./helpers";

const navigationTargets = ["#leistungen", "#warum-wir", "#ablauf", "#kontakt"] as const;

test("Skip-Link führt fokussierbar zum Hauptinhalt", async ({ page }) => {
  await gotoHome(page);

  const skipLink = page.getByRole("link", { name: "Zum Inhalt springen" });
  await page.keyboard.press("Tab");
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");

  await expect(page).toHaveURL(/#main-content$/);
  await expect(page.locator("main#main-content")).toBeFocused();
});

test("Hauptnavigation verweist auf vorhandene Kapitel", async ({ page }) => {
  await gotoHome(page);
  const viewport = page.viewportSize();
  const navigation = page.getByRole("navigation", { name: "Hauptnavigation" });

  if (viewport && viewport.width <= MOBILE_NAVIGATION_MAX_WIDTH) {
    await page.getByRole("button", { name: "Menü öffnen" }).click();
  }

  await expect(navigation).toBeVisible();

  for (const target of navigationTargets) {
    const link = navigation.locator(`a[href="${target}"]`);
    await expect(link).toHaveCount(1);
    await expect(page.locator(target)).toHaveCount(1);
  }

  const servicesLink = navigation.locator('a[href="#leistungen"]');
  await servicesLink.click();
  await expect(page).toHaveURL(/#leistungen$/);
  await expect(page.locator("#leistungen")).toBeInViewport();
  await expect.poll(() => page
    .locator('#primary-navigation a[href="#leistungen"]')
    .getAttribute("aria-current")).toBe("location");
});

test("mobiles Menü setzt und begrenzt Fokus und schließt mit Escape", async ({ page }) => {
  const viewport = page.viewportSize();
  test.skip(!viewport || viewport.width > MOBILE_NAVIGATION_MAX_WIDTH, "Nur im Menü-Breakpoint relevant.");

  await gotoHome(page);

  const menuButton = page.getByRole("button", { name: "Menü öffnen" });
  const navigation = page.getByRole("navigation", { name: "Hauptnavigation" });
  await expectMinimumTargetSize(menuButton);
  await menuButton.click();

  const closeButton = page.getByRole("button", { name: "Menü schließen" });
  const firstMenuLink = navigation.locator("[data-menu-item]").first();
  await expect(closeButton).toHaveAttribute("aria-expanded", "true");
  await expect(navigation).toBeVisible();
  await expect(firstMenuLink).toBeFocused();
  await expect.poll(() => page.locator("main").evaluate(
    (element) => (element as HTMLElement).inert,
  )).toBe(true);
  await expect.poll(() => page.locator("footer").evaluate(
    (element) => (element as HTMLElement).inert,
  )).toBe(true);

  await page.locator("header .brand").focus();
  await page.keyboard.press("Shift+Tab");
  await expect(closeButton).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator("header .brand")).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(navigation).toBeHidden();
  await expect(menuButton).toBeFocused();
  await expect.poll(() => page.locator("main").evaluate(
    (element) => (element as HTMLElement).inert,
  )).toBe(false);
});

test("Desktopnavigation ist sichtbar und der Menübutton verborgen", async ({ page }) => {
  const viewport = page.viewportSize();
  test.skip(!viewport || viewport.width <= MOBILE_NAVIGATION_MAX_WIDTH, "Nur oberhalb des Menü-Breakpoints relevant.");

  await gotoHome(page);
  await expect(page.getByRole("navigation", { name: "Hauptnavigation" })).toBeVisible();
  await expect(page.locator(".menu-button")).toBeHidden();
});
