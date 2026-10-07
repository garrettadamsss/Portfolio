import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://garrettadams.vercel.app";
const siteName = "Garrett Adams";
const description =  "Portfolio of Garrett Adams including projects, experience, and contact information.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  // General site preview metadata
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    locale: "en_US",
  },
  // Twitter preview metadata
  twitter: {
    card: "summary",
    title: siteName,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Google search result metadata
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="tsMq8hr6bQd-yiaCVoDQE2HY-SAqJS-ZfdLigEoMOzU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(websiteJsonLd)}
        </script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
