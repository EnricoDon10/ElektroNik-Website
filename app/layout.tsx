import type { Metadata, Viewport } from "next";
import ConsentProvider from "./components/consent/consent-provider";
import "./globals.css";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
const productionSiteUrl = configuredSiteUrl ?? "https://elektronik-meisterbetrieb.de";
const metadataBaseUrl =
  configuredSiteUrl
  ?? (process.env.NODE_ENV === "production" ? productionSiteUrl : "http://localhost:3001");

export const metadata: Metadata = {
  applicationName: "Elektro - NIK",
  metadataBase: new URL(metadataBaseUrl),
  title: {
    default: "Elektro - NIK | Elektro-Meisterbetrieb in Bochum",
    template: "%s | Elektro - NIK",
  },
  description:
    "Elektro - NIK in Bochum: moderne Elektrotechnik, Netzwerkverkabelung, E-Mobilität und Energielösungen – meisterhaft und persönlich umgesetzt.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
        <ConsentProvider>{children}</ConsentProvider>
      </body>
    </html>
  );
}
