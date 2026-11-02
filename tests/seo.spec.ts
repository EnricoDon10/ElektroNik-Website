import { expect, test } from "@playwright/test";

const productionOrigin = "https://elektronik-meisterbetrieb.de";

test("SEO-Metadaten, strukturierte Daten und statische Indexdateien sind konsistent", async ({
  page,
  request,
}) => {
  await page.goto("/");

  await expect(page).toHaveTitle("ElektroNIK | Elektro-Meisterbetrieb in Wattenscheid");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${productionOrigin}/`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    `${productionOrigin}/`,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    `${productionOrigin}/og-v3.png`,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );

  const structuredData = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((scripts) => scripts.map((script) => JSON.parse(script.textContent ?? "{}")));
  expect(structuredData).toHaveLength(1);
  const graph = structuredData[0]?.["@graph"] as Array<Record<string, unknown>>;
  expect(graph.map((entry) => entry["@type"])).toEqual(["Electrician", "FAQPage"]);
  expect(graph[0]?.url).toBe(productionOrigin);
  expect(graph[0]?.name).toBe("ElektroNIK");
  expect(graph[0]?.telephone).toBe("+49 157 74299367");
  expect(graph[0]?.email).toBe("Elektro-nik@t-online.de");
  expect(graph[0]?.address).toMatchObject({
    streetAddress: "Kantstraße 10",
    postalCode: "44867",
    addressLocality: "Wattenscheid",
  });
  expect(graph[0]).not.toHaveProperty("openingHoursSpecification");
  const footer = page.getByRole("contentinfo");
  await expect(footer.getByRole("link", { name: "Impressum" })).toHaveAttribute(
    "href",
    "/impressum/",
  );
  await expect(footer.getByRole("link", { name: "Datenschutz" })).toHaveAttribute(
    "href",
    "/datenschutz/",
  );

  for (const legalRoute of ["/impressum/", "/datenschutz/"] as const) {
    await page.goto(legalRoute);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `${productionOrigin}${legalRoute}`,
    );
    await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
    await expect(page.getByRole("link", { name: "Zurück zur Startseite" })).toHaveAttribute(
      "href",
      "/",
    );
  }

  const robotsResponse = await request.get("/robots.txt");
  expect(robotsResponse.ok()).toBe(true);
  const robotsText = await robotsResponse.text();
  expect(robotsText).toContain("Allow: /");
  expect(robotsText).toContain(`Sitemap: ${productionOrigin}/sitemap.xml`);

  const sitemapResponse = await request.get("/sitemap.xml");
  expect(sitemapResponse.ok()).toBe(true);
  const sitemapText = await sitemapResponse.text();
  expect(sitemapText).toContain(`<loc>${productionOrigin}/</loc>`);
  expect(sitemapText).toContain(`<loc>${productionOrigin}/impressum/</loc>`);
  expect(sitemapText).toContain(`<loc>${productionOrigin}/datenschutz/</loc>`);
  expect(sitemapText).not.toContain("localhost");
});
