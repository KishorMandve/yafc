import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',  // Creates --font-sans CSS var
  fallback: ['sans-serif', 'Arial'],  // Optional explicit fallback
});

export const metadata: Metadata = {
  title: "YAFC",
  description: "YET ANOTHER FINANCIAL CALCULATOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        {children}
      </body>
    </html>
  );
}
