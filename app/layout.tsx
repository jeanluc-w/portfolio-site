import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Jean-Luc Williams | Solutions Architect',
  description: 'Solutions Architect designing scalable cloud platforms, backend systems, and data-driven solutions with a focus on cognitive design.',
  metadataBase: new URL('https://jeanluc-williams.com'), 
  openGraph: {
    title: 'Jean-Luc Williams | Solutions Architect',
    description: 'Systems Engineering & Cognitive Design. Bridging robust backend architecture with human-centered design.',
    url: 'https://jeanluc-williams.com',
    siteName: 'Jean-Luc Williams Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Luc Williams | Solutions Architect',
    description: 'Systems Engineering & Cognitive Design.',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}