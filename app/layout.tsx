import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from './context/CardContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhatBytes - Your Premium E-Commerce Store',
  description: 'Shop the latest in electronics, clothing, books, and home & garden products',
  openGraph: {
    title: 'WhatBytes - Your Premium E-Commerce Store',
    description: 'Shop the latest in electronics, clothing, books, and home & garden products',
    type: 'website',
    locale: 'en_US',
    siteName: 'WhatBytes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatBytes - Your Premium E-Commerce Store',
    description: 'Shop the latest in electronics, clothing, books, and home & garden products',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
