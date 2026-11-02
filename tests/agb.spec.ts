import { expect, test } from "@playwright/test";

test("AGB sind vollständig erreichbar und stimmen mit den vereinbarten Vor-Ort-Kosten überein", async ({ page }) => {
  await page.goto("/agb/");

  await expect(page).toHaveTitle("Allgemeine Geschäftsbedingungen | ElektroNIK");
  await expect(page.getByRole("heading", { name: "Allgemeine Geschäftsbedingungen" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "§ 25 Schlussbestimmungen" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "§ 22 Verbraucherschlichtung" })).toBeVisible();
  await expect(page.getByText(/Beratungen oder Besichtigungen vor Ort sind kostenpflichtig/)).toBeVisible();
  await expect(page.getByText(/Ein Angebot oder Kostenanschlag wird auf Wunsch des Auftraggebers erstellt/)).toBeVisible();
  await expect(page.getByText(/grundsätzlich kostenlos/)).toHaveCount(0);
  await expect(page.getByText(/Netzanalysen mit modernem Messsystem/)).toBeVisible();
  await expect(page.getByText(/Messungen und Prüfungen elektrischer Anlagen/)).toHaveCount(0);
  await expect(page.getByText(/DGUV V3|Prüfprotokolle oder Gutachten/)).toHaveCount(0);
});

test("Impressum enthält die bestätigten Berufsangaben ohne interne Prüfhilfen", async ({ page }) => {
  await page.goto("/impressum/");

  await expect(page.getByText("Staat der Verleihung: Deutschland")).toBeVisible();
  await expect(page.getByRole("link", { name: "Gesetze im Internet" })).toHaveAttribute(
    "href",
    "https://www.gesetze-im-internet.de/hwo/",
  );
  await expect(page.locator(".legal-notice")).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Registerangaben" })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: /journalistisch-redaktionelle Inhalte/ })).toHaveCount(0);
  await expect(page.getByRole("heading", { name: "Hinweis zu externen Links" })).toHaveCount(0);
  await expect(page.getByText(/nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren/)).toBeVisible();

  await page.goto("/datenschutz/");
  await expect(page.locator(".legal-notice")).toHaveCount(0);
});
