import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thomaslenh.com"),
  title: "Thomas Lenh",
  description: "thomas lenh website",
  keywords: [
    "Thomas Lenh",
    "thomaslenh",
    "thomas lenh website",
    "software engineer",
    "University of Waterloo",
    "Waterloo",
    "Toronto",
  ],
  authors: [{ name: "Thomas Lenh", url: "https://thomaslenh.com" }],
  creator: "Thomas Lenh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thomas Lenh",
    description: "thomas lenh website",
    url: "https://thomaslenh.com",
    siteName: "Thomas Lenh",
    type: "website",
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Thomas Lenh",
    description: "thomas lenh website",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thomas Lenh",
  url: "https://thomaslenh.com",
  image: "https://thomaslenh.com/logo.png",
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Waterloo",
  },
  sameAs: [
    "https://github.com/forkiron",
    "https://www.linkedin.com/in/thomas-lenh",
    "https://x.com/forkyron",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
