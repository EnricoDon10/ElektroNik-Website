import { expect, test } from "@playwright/test";
import { gotoHome } from "./helpers";

test("FAQ synchronisiert Tastaturbedienung, Sichtbarkeit und ARIA-Zustand", async ({ page }) => {
  await gotoHome(page);

  const questions = page.locator(".faq-item button");
  const firstQuestion = questions.first();
  const secondQuestion = questions.nth(1);
  const firstAnswerId = await firstQuestion.getAttribute("aria-controls");

  expect(firstAnswerId).toBeTruthy();
  if (!firstAnswerId) {
    return;
  }

  const firstAnswer = page.locator(`#${firstAnswerId}`);
  await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  await expect(firstAnswer).toHaveAttribute("aria-hidden", "true");

  await firstQuestion.focus();
  await page.keyboard.press("Enter");
  await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
  await expect(firstAnswer).toHaveAttribute("aria-hidden", "false");
  await expect.poll(() => firstAnswer.evaluate((element) => element.getBoundingClientRect().height)).toBeGreaterThan(0);

  await secondQuestion.focus();
  await page.keyboard.press("Space");
  await expect(secondQuestion).toHaveAttribute("aria-expanded", "true");
  await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  await expect(secondQuestion).toBeFocused();
});
