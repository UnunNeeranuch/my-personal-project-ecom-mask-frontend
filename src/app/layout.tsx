import type { Metadata } from 'next';
import '../styles/globals.css';
import { notoSans } from '@/styles/font';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: {
    template: '%s - Skincare Mask',
    default: 'Skincare Mask',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${notoSans.className} bg-linear-to-bl from-pink-500 to-purple-500`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
