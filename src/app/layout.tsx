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
  title: "Legismaker | Government Software, Engineered for Impact",
  description: "We build custom software solutions for government agencies, legislative offices, and advocacy organizations. From policy analysis tools to administrative systems—we deliver technology that works for public service, not profit margins.",
  keywords: "government software, custom development, policy analysis, legislative technology, government contractors, advocacy tools, nonprofit technology, civic tech",
  authors: [{ name: "Legismaker" }],
  creator: "Legismaker",
  publisher: "Legismaker",
  openGraph: {
    title: "Legismaker | Government Software, Engineered for Impact",
    description: "Custom software solutions for government agencies, legislative offices, and advocacy organizations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legismaker | Government Software, Engineered for Impact",
    description: "Custom software solutions for government agencies, legislative offices, and advocacy organizations.",
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
