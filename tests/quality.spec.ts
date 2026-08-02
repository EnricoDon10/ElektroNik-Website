import { expect, test } from "@playwright/test";
import { gotoHome } from "./helpers";

test("Semantik, IDs und Formularbeschriftungen besitzen eine belastbare Basis", async ({ page }) => {
  await gotoHome(page);

  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('nav[aria-label="Hauptnavigation"]')).toHaveCount(1);
  await expect(page.getByRole("navigation", { name: "Navigation im Footer" })).toHaveCount(1);

  const duplicateIds = await page.evaluate(() => {
    const counts = new Map<string, number>();
    document.querySelectorAll<HTMLElement>("[id]").forEach((element) => {
      counts.set(element.id, (counts.get(element.id) ?? 0) + 1);
    });
    return Array.from(counts.entries()).filter(([, count]) => count > 1);
  });
  expect(duplicateIds).toEqual([]);

  const unlabeledFields = await page.evaluate(() => Array.from(
    document.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input, select, textarea",
    ),
  ).filter((field) => field.labels?.length === 0).map((field) => field.name));
  expect(unlabeledFields).toEqual([]);

  await expect(page.locator("[data-process-step][tabindex]")).toHaveCount(0);
});

test("Startseite zeigt die Google-Maps-Karte ohne Freigabeschritt", async ({ page }) => {
  await page.route(/https:\/\/www\.google\.com\/maps.*/, async (route) => {
    await route.fulfill({ body: "<!doctype html><title>Map test stub</title>", contentType: "text/html" });
  });
  await gotoHome(page);
  await page.locator("#kontakt").scrollIntoViewIfNeeded();
  await expect(page.locator(".contact-map iframe")).toHaveAttribute(
    "src",
    /google\.com\/maps\?.*Lindengraben%206.*44803%20Bochum.*output=embed/,
  );
});

test("Hydration und viewportabhängige Interaktionen bleiben ohne Laufzeitfehler", async ({ page }) => {
  const runtimeErrors: string[] = [];
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") {
      runtimeErrors.push(message.text());
    }
  });

  await gotoHome(page);
  await page.locator("#kontakt").scrollIntoViewIfNeeded();
  await page.locator("#start").scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);

  expect(runtimeErrors).toEqual([]);
});

test("Layout Shift bleibt während Hydration und initialer Motion im Zielbudget", async ({ page }) => {
  await page.addInitScript(() => {
    Reflect.set(window, "cumulativeLayoutShift", 0);
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const layoutShift = entry as PerformanceEntry & {
          hadRecentInput: boolean;
          value: number;
        };
        if (!layoutShift.hadRecentInput) {
          const current = Number(Reflect.get(window, "cumulativeLayoutShift"));
          Reflect.set(window, "cumulativeLayoutShift", current + layoutShift.value);
        }
      }
    }).observe({ buffered: true, type: "layout-shift" });
  });

  await gotoHome(page);
  await page.waitForTimeout(250);
  const cumulativeLayoutShift = await page.evaluate(
    () => Number(Reflect.get(window, "cumulativeLayoutShift")),
  );

  expect(cumulativeLayoutShift).toBeLessThanOrEqual(0.1);
});
