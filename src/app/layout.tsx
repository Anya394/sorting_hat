import type { Metadata } from 'next';
import { Geist, Geist_Mono, Underdog } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const underdog = Underdog({
  weight: '400', // обязательный параметр
  subsets: ['latin', 'cyrillic'],
  variable: '--font-underdog',
  display: 'swap', // плавная загрузка
});

export const metadata: Metadata = {
  title: 'Sorting Hat',
  description: 'The sorting hat from Harry Potter',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={underdog.variable}>
      <body className={`${underdog.variable}`}>{children}</body>
    </html>
  );
}
