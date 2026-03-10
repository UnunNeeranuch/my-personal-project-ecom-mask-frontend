import type { Metadata } from 'next';
import './globals.css';
import { notoSans } from '@/styles/font';

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
      <body className={`antialiased ${notoSans.className}`}>{children}</body>
    </html>
  );
}
