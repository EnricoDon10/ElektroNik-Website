import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://elektronik-meisterbetrieb.de"
).replace(/\/$/, "");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/impressum/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/datenschutz/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
