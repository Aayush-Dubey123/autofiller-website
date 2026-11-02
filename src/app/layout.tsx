import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import { SITE_CONFIG } from '../config/site.config';
import { ViewportMetrics } from '../components/ViewportMetrics';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};
export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.taglinePrimary}`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(`https://${SITE_CONFIG.domain}`),
  alternates: {
    canonical: `https://${SITE_CONFIG.domain}`,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.taglinePrimary}`,
    description: SITE_CONFIG.description,
    url: `https://${SITE_CONFIG.domain}`,
    siteName: SITE_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.taglinePrimary}`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_CONFIG.name,
  operatingSystem: 'Windows 10, Windows 11',
  applicationCategory: 'DesktopApplication',
  description: SITE_CONFIG.description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  downloadUrl: SITE_CONFIG.releasesUrl,
  author: {
    '@type': 'Person',
    name: 'Ayush Dubey',
    url: SITE_CONFIG.portfolioUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&family=JetBrains+Mono:wght@400;600;700&family=Outfit:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ViewportMetrics />
        {children}
      </body>
    </html>
  );
}
