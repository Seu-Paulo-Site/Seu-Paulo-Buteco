import type { Metadata, Viewport } from 'next';
import { Anton, DM_Mono, Inter } from 'next/font/google';
import '@/app/globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://seupaulobuteco.com.br'),
  title: {
    default: 'Seu Paulo Buteco — Boteco em Betim/MG',
    template: '%s · Seu Paulo Buteco',
  },
  description:
    'Um mineiro e dois paulistas, comida boa, cerveja gelada e muita resenha. Duas casas em Betim/MG: o Seu Paulo, na Angola, e o Seu Paulo 2. Veja o cardápio, os horários e como chegar.',
  keywords: [
    'boteco',
    'bar em Betim',
    'Seu Paulo Buteco',
    'porções',
    'caipirinha',
    'chope gelado',
    'Angola Betim MG',
  ],
  openGraph: {
    title: 'Seu Paulo Buteco — Boteco em Betim/MG',
    description:
      'Comida boa, cerveja gelada e muita resenha. O melhor de Minas com o tempero de São Paulo.',
    url: '/',
    siteName: 'Seu Paulo Buteco',
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: '/hero.jpg', width: 2400, height: 1350, alt: 'Chope gelado no copo do Seu Paulo Buteco' }],
  },
  icons: {
    icon: '/mark.png',
    apple: '/mark.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#121010',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable} ${dmMono.variable}`}>
      <body className="min-h-screen bg-ink text-cream antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
