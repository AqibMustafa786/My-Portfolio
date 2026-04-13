import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aqib Mustafa | Software Engineer Portfolio",
  description: "Aqib Mustafa - Software Engineer specializing in Web Apps, AppSheet, and SaaS solutions.",
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  manifest: '/manifest.json',
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
              "url": "https://aqibmustafa.com",
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
