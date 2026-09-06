import type { Metadata, Viewport } from 'next';
import { Anton, Bebas_Neue, Outfit } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/content/site';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0C59F2',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.metadata.url),
  title: SITE_CONFIG.metadata.title,
  description: SITE_CONFIG.metadata.description,
  icons: {
    icon: SITE_CONFIG.metadata.ogImage,
    shortcut: SITE_CONFIG.metadata.ogImage,
    apple: SITE_CONFIG.metadata.ogImage,
  },
  openGraph: {
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    images: [SITE_CONFIG.metadata.ogImage],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    images: [SITE_CONFIG.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${bebasNeue.variable} ${outfit.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body
        className="bg-[#FFFFFF] text-[#191b24] antialiased selection:bg-[#F2E40A] selection:text-[#0C59F2]"
        suppressHydrationWarning
      >
        {/* Accessible Skip Link for keyboard and screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-5 focus:py-2.5 focus:bg-[#F2E40A] focus:text-[#002273] focus:font-bebas focus:text-xl focus:tracking-wider focus:rounded-full focus:shadow-2xl focus:ring-4 focus:ring-white focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
