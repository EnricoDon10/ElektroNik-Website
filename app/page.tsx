import type { Metadata } from "next";
import MotionOrchestrator from "./components/motion/motion-orchestrator";
import CompetenceBar from "./components/sections/competence-bar";
import ContactSection from "./components/sections/contact-section";
import FaqSection from "./components/sections/faq-section";
import HeroSection from "./components/sections/hero-section";
import ProcessSection from "./components/sections/process-section";
import QualitySection from "./components/sections/quality-section";
import ServicesSection from "./components/sections/services-section";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";
import { faqs, siteContact } from "./data/site-content";

const productionSiteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://elektronik-meisterbetrieb.de"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: {
    absolute: "ElektroNIK | Elektro-Meisterbetrieb in Bochum",
  },
  description:
    "ElektroNIK in Bochum: moderne Elektrotechnik, Netzwerkverkabelung, E-Mobilität und Energielösungen. Meisterhaft und persönlich umgesetzt.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ElektroNIK | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie. Moderne Elektrotechnik, persönlich umgesetzt.",
    images: [
      {
        url: "/og-v3.png",
        width: 1734,
        height: 907,
        alt: "ElektroNIK: Verkabeln. Vernetzen. Vertrauen.",
      },
    ],
    locale: "de_DE",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElektroNIK | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie. Moderne Elektrotechnik, persönlich umgesetzt.",
    images: ["/og-v3.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Electrician",
      name: siteContact.businessName,
      description:
        "Elektro-Meisterbetrieb für Elektroinstallation, Netzwerkverkabelung, E-Mobilität, Photovoltaik, Prüfung und Service.",
      telephone: "+49 157 74299367",
      email: siteContact.email,
      url: productionSiteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteContact.street,
        postalCode: siteContact.postalCode,
        addressLocality: siteContact.city,
        addressCountry: "DE",
      },
    },
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

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <a className="skip-link" href="#main-content">
        Zum Inhalt springen
      </a>
      <SiteHeader />

      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <CompetenceBar />
        <ServicesSection />
        <QualitySection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <MotionOrchestrator />
    </>
  );
}
