import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} dark`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-[#141521] text-white overflow-x-hidden selection:bg-[#E91E63] selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
