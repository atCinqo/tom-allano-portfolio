import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tom ALLANO | Content Creator & Digital Designer',
  description: 'Tom ALLANO - Spécialisé en Community Management, Vidéo et Graphisme. Créateur de contenu digital pour clubs sportifs, associations, entreprises et marques.',
  robots: 'index, follow',
  keywords:
    'Content Creator, Community Management, Vidéo, Graphisme, Digital Design, Portfolio, Tom ALLANO',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Creato+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
