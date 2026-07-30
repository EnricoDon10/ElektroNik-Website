import type { Metadata, Viewport } from "next";
import { faqs } from "./data/site-content";
import "./globals.css";

const deployedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://elektronik-meisterbetrieb.de"
    : undefined);
const siteUrl = deployedSiteUrl ?? "http://localhost:3000";

const localBusinessStructuredData = {
  "@type": "Electrician",
  name: "ElektroNik",
  description:
    "Elektro-Meisterbetrieb für Elektroinstallation, Netzwerkverkabelung, E-Mobilität, Photovoltaik, Prüfung und Service.",
  telephone: "+49 151 68488353",
  email: "kontakt@elektronik-meisterbetrieb.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Krieler Str. 115",
    postalCode: "50935",
    addressLocality: "Köln",
    addressCountry: "DE",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "18:00",
  },
  ...(deployedSiteUrl ? { url: deployedSiteUrl } : {}),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    localBusinessStructuredData,
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  applicationName: "ElektroNik",
  metadataBase: new URL(siteUrl),
  title: "ElektroNik | Elektro-Meisterbetrieb in Köln",
  description:
    "ElektroNik in Köln-Lindenthal: moderne Elektrotechnik, Netzwerkverkabelung, E-Mobilität und Energielösungen – meisterhaft und persönlich umgesetzt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  alternates: deployedSiteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie – moderne Elektrotechnik, persönlich umgesetzt.",
    images: [
      {
        url: "/og-v3.png",
        width: 1734,
        height: 907,
        alt: "ElektroNik – Verkabeln. Vernetzen. Vertrauen.",
      },
    ],
    locale: "de_DE",
    type: "website",
    url: deployedSiteUrl ? "/" : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie – moderne Elektrotechnik, persönlich umgesetzt.",
    images: ["/og-v3.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
        {children}
      </body>
    </html>
  );
}
