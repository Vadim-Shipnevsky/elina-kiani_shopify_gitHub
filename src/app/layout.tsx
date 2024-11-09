import localFont from "next/font/local";
import GlobalStyles from "@/styles"
import { SmartCSSGrid } from "@/styles"
import { Lvh } from '@/hooks/useLvh'
import type { Metadata } from "next";
import {createAdminApiClient} from '@shopify/admin-api-client';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const client = createAdminApiClient({
  storeDomain: 'c8fxxr-kz.myshopify.com',
  apiVersion: '2024-10',
  accessToken: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN || '49fecb2a55931e35fa6bffc6b5f61eea',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalStyles />
        <SmartCSSGrid/>
        <Lvh />
        {children}
      </body>
    </html>
  );
}
