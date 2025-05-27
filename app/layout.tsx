import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata() {
  return {
    title: 'Marhaba Group',
    author: 'Marhaba ',
    icons: [
      {
        rel: 'icon',
        type: 'image/jpg',
        sizes: '32x32',
        url: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/jpg',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        type: 'image/jpg',
        sizes: '76x76',
        url: '/apple-touch-icon.png',
      },
    ],
    openGraph: {
      images: '/favicon.ico',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
