import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Urmi Kothari - Full Stack Developer',
  description: 'Portfolio of Urmi Kothari, a passionate Full Stack Developer and Software Engineer specializing in modern web technologies.',
  keywords: 'Full Stack Developer, Software Engineer, React, Node.js, JavaScript, TypeScript, Portfolio',
  authors: [{ name: 'Urmi Kothari' }],
  creator: 'Urmi Kothari',
  openGraph: {
    title: 'Urmi Kothari - Full Stack Developer',
    description: 'Portfolio of Urmi Kothari, a passionate Full Stack Developer and Software Engineer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urmi Kothari - Full Stack Developer',
    description: 'Portfolio of Urmi Kothari, a passionate Full Stack Developer and Software Engineer.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}