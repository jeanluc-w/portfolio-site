import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Jean-Luc Williams | Software Engineer',
  description: 'Software engineer building secure cloud platforms, identity systems, and backend infrastructure, with a background in cognitive design.',
  metadataBase: new URL('https://jeanluc-williams.com'),
  openGraph: {
    title: 'Jean-Luc Williams | Software Engineer',
    description: 'Systems Engineering & Cognitive Design. Bridging robust backend architecture with human-centered design.',
    url: 'https://jeanluc-williams.com',
    siteName: 'Jean-Luc Williams Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean-Luc Williams | Software Engineer',
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
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-emerald-500 focus:text-slate-950 focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}