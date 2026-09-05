import type { Metadata } from 'next';
import { Anton, Bebas_Neue, Outfit } from 'next/font/google';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Envíos DosRuedas - Mensajería y Logística MDQ',
  description: 'Soluciones de mensajería urbana, envíos en el día y delivery de última milla para e-commerce en Mar del Plata. Flota propia y seguimiento en tiempo real.',
  openGraph: {
    title: 'Envíos DosRuedas - Mensajería y Logística MDQ',
    description: 'Soluciones de mensajería urbana, envíos en el día y delivery de última milla para e-commerce en Mar del Plata. Flota propia y seguimiento en tiempo real.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envíos DosRuedas - Mensajería y Logística MDQ',
    description: 'Soluciones de mensajería urbana, envíos en el día y delivery de última milla para e-commerce en Mar del Plata. Flota propia y seguimiento en tiempo real.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${anton.variable} ${bebasNeue.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#fbf8ff] text-[#191b24] antialiased selection:bg-[#ffcc00] selection:text-[#002273]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
