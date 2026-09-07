import type { Metadata } from 'next';
import { Source_Serif_4, Golos_Text, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['cyrillic', 'latin'],
});

const golosText = Golos_Text({
  variable: '--font-golos',
  subsets: ['cyrillic', 'latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Далиль',
  description: 'Далиль — довод. Аргументированные ответы на мифы и вопросы об исламе.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="ru"
      className={`${sourceSerif.variable} ${golosText.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
