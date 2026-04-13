import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqib Mustafa | Software Engineer & Web App Developer",
  description: "Aqib Mustafa is a Software Engineer specializing in Web Applications, AppSheet, Firebase, SaaS solutions, and admin dashboards. Explore portfolio, projects, and services.",
  keywords: "Aqib Mustafa, Software Engineer Pakistan, Web App Developer, AppSheet Developer, Firebase Developer, SaaS Developer, Portfolio",
  authors: [{ name: "Aqib Mustafa" }],
  alternates: {
    canonical: "https://www.aqibmustafa.com/",
  },
  openGraph: {
    title: "Aqib Mustafa | Software Engineer",
    description: "Portfolio of Aqib Mustafa – Web App Developer, AppSheet Expert, SaaS Builder.",
    url: "https://www.aqibmustafa.com/",
    siteName: "Aqib Mustafa Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Aqib Mustafa | Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqib Mustafa | Software Engineer",
    description: "Web App Developer specializing in AppSheet, Firebase & SaaS.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="google-adsense-account" content="ca-pub-3263209406470911" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aqib Mustafa",
              "jobTitle": "Software Engineer & Web App Developer",
              "url": "https://www.aqibmustafa.com/",
              "sameAs": [
                "https://github.com/AqibMustafa786",
                "https://www.linkedin.com/in/aqib-surahio-355363294/",
                "https://www.fiverr.com/aqibmustafa"
              ],
              "description": "Aqib Mustafa is a Software Engineer specializing in Web Applications, AppSheet, Firebase, and SaaS development."
            })
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3263209406470911"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
