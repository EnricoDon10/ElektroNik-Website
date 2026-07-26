import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "ElektroNik | Elektro-Meisterbetrieb",
  description:
    "Moderne Elektrotechnik, Netzwerkverkabelung, E-Mobilität und Energielösungen – meisterhaft geplant und persönlich umgesetzt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie – moderne Elektrotechnik, persönlich umgesetzt.",
    images: [
      {
        url: "/og-v2.png",
        width: 1734,
        height: 907,
        alt: "ElektroNik – Verkabeln. Vernetzen. Vertrauen.",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
    description:
      "Meisterstrom für Haus und Industrie – moderne Elektrotechnik, persönlich umgesetzt.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
