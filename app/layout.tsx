import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KAA Software and Technologies | Smart IT & Software Solutions — Doha, Qatar",
  description:
    "KAA Software and Technologies is a Qatar-based IT company delivering innovative technology services — software development, web & mobile apps, IT infrastructure, cloud solutions, and digital marketing. Helping businesses grow in the digital era.",
  keywords: [
    "KAA Technologies",
    "KAA Software",
    "IT Company Qatar",
    "Software Development Qatar",
    "Web Development Doha",
    "Mobile App Development Qatar",
    "IT Support Qatar",
    "Cloud Solutions Qatar",
    "Digital Marketing Qatar",
    "IT Infrastructure Qatar",
    "Custom Software Qatar",
    "Networking Solutions Qatar",
  ],
  authors: [{ name: "KAA Software and Technologies" }],
  creator: "KAA Software and Technologies",
  publisher: "KAA Software and Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaatechnologies.qa",
    title: "KAA Software and Technologies | Smart IT & Software Solutions",
    description:
      "Empowering businesses with Smart IT & Software Solutions. Qatar-based IT company offering software development, web & mobile apps, IT infrastructure, cloud security, and digital marketing.",
    siteName: "KAA Software and Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAA Software and Technologies | Smart IT & Software Solutions",
    description:
      "Empowering businesses with Smart IT & Software Solutions. Qatar-based IT company.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased bg-space-void text-slate-200 overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
