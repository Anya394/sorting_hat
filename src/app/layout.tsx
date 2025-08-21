import type { Metadata } from 'next';
import { Underdog } from 'next/font/google';
import './globals.css';

const underdog = Underdog({
  weight: '400', // Обязательный параметр.
  subsets: ['latin', 'cyrillic'],
  variable: '--font-underdog',
  display: 'swap', // Плавная загрузка.
});

export const metadata: Metadata = {
  title: {
    default: 'Sorting Hat',
    template: '%s | Sorting Hat',
  },
  description: 'The sorting hat from Harry Potter',
  keywords: ['Harry Potter', 'Sorting Hat', 'Hogwarts'],
  authors: [{ name: 'Mokretsova Anna' }],
  viewport: 'width=device-width, initial-scale=1', // Для мобильной адаптации.
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
