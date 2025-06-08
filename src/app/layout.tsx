import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import "./globals.css";

const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Legismaker | Less Dealbreakers, More Compromise",
  description: "Legismaker helps congressional staffers turn any bill into a legislative game plan. Built for the realities of the Hill—not the hype of Silicon Valley—Legismaker delivers fast, credible insights where it matters most: strategy.",
  keywords: "legislative analysis, bill analysis, vote prediction, congressional staffers, policymaking, legislative strategy",
  authors: [{ name: "Legismaker" }],
  creator: "Legismaker",
  publisher: "Legismaker",
  openGraph: {
    title: "Legismaker | Less Dealbreakers, More Compromise",
    description: "Fast, credible, non-partisan legislative analysis for congressional staffers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legismaker | Less Dealbreakers, More Compromise",
    description: "Fast, credible, non-partisan legislative analysis for congressional staffers.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/lzd4nhi.css" />
      </head>
      <body className={`${urbanist.variable} font-sans antialiased bg-background`}>
        {children}
      </body>
    </html>
  );
}
