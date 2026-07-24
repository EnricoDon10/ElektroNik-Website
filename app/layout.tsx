import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const siteUrl = new URL(`${protocol}://${host}`);

  return {
    metadataBase: siteUrl,
    title: "ElektroNik | Elektro-Meisterbetrieb",
    description:
      "Moderne Elektrotechnik, Smart Home, E-Mobilität und Energielösungen – meisterhaft geplant und persönlich umgesetzt.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
      description: "Moderne Elektrotechnik – meisterhaft geplant und persönlich umgesetzt.",
      images: [{ url: new URL("/og-v2.png", siteUrl), width: 1734, height: 907, alt: "ElektroNik – Verkabeln. Vernetzen. Vertrauen." }],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ElektroNik | Verkabeln. Vernetzen. Vertrauen.",
      description: "Moderne Elektrotechnik – meisterhaft geplant und persönlich umgesetzt.",
      images: [new URL("/og-v2.png", siteUrl)],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
