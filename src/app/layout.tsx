import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Calsnich Gentlemen's Home",
  description: "At Calsnich gentlemen's home, we cause men to believe in themselves and dreams by speaking to confidence, composure, and courage in every item we sell(clothings)",
  keywords: ["men's fashion", "clothing", "style", "confidence"], // Add keywords
  openGraph: { // For social media sharing
    title: "Calsnich Gentlemen Home",
    description: "At Calsnich gentlemen's home, we cause men to believe in themselves and dreams by speaking to confidence, composure, and courage in every item we sell(clothings)",
    url: "https://www.yourwebsite.com", // Add URL
    type: "website", // Add type
    // ... other Open Graph properties
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon2.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
