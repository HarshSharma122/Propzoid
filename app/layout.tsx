import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { Bricolage_Grotesque } from "next/font/google";
import { Lexend } from "next/font/google";
import { Header } from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import LayoutWrapper from "@/utils/wrapper/LayoutWrapper";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});




export const metadata: Metadata = {
  title: {
    default: "PropZoid - Sell Your Property Smarter",
    template: "%s | PropZoid",
  },
  description:
    "PropZoid helps individual real estate dealers sell properties faster with high-quality verified leads, Facebook & Instagram ads, and complete marketing support.",
  
  keywords: [
    "PropZoid",
    "real estate lead generation",
    "property selling platform India",
    "sell property online",
    "real estate marketing services",
    "Facebook ads for property",
    "Instagram ads real estate",
    "verified property leads",
    "real estate dealers India",
  ],

  metadataBase: new URL("https://propzoid.com/"),

  alternates: {
    canonical: "https://propzoid.com/",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "PropZoid - Sell Your Property Smarter",
    description:
      "Upload your property and let PropZoid handle everything. Get hot, verified leads with zero hassle and affordable pricing.",
    type: "website",
    url: "https://propzoid.com/",
    siteName: "PropZoid",
  },

  twitter: {
    title: "PropZoid - Sell Your Property Smarter",
    description:
      "Get high-quality verified property leads with PropZoid. We run ads, manage campaigns, and deliver leads directly to you.",
    card: "summary_large_image",
    creator: "@propzoid", // update if you have a real handle
    images: "/logo.png",
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn("h-full", "antialiased", "font-sans")}>
        <body
          className={`${lexend.variable} ${bricolage.className} min-h-screen flex flex-col  `}
        >
          <Toaster position="top-right" richColors />
          <LayoutWrapper>
          {children}
          </LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
