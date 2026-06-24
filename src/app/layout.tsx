import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero One Consultancy — Always On | End-to-End Healthcare Business Solutions",
  description:
    "Zero One Consultancy delivers end-to-end business solutions for healthcare enterprises — from regulatory compliance and IT infrastructure to financial compliance, digital marketing and strategic optimization. One partner. Complete transformation.",
  keywords: [
    "Zero One Consultancy",
    "Healthcare Business Solutions",
    "Hospital Setup",
    "SaaS Implementation",
    "HR Compliance",
    "Digital Marketing",
    "Healthcare IT",
    "Regulatory Compliance",
    "Always On",
  ],
  authors: [{ name: "Zero One Consultancy" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Zero One Consultancy — Always On",
    description:
      "End-to-End Business Solutions for Healthcare Enterprises. One partner. Complete transformation.",
    url: "https://zerooneconsultancy.com",
    siteName: "Zero One Consultancy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zero One Consultancy — Always On",
    description:
      "End-to-End Business Solutions for Healthcare Enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
