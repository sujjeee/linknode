import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { siteConfig } from '@/app/page';
import { Providers } from '@/components/providers';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Original source: https://github.com/sadmann7/skateshop/blob/main/src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://linknode.vercel.app'),
  title: {
    default: siteConfig.name,
    template: `%s - LinkNode`,
  },
  description: siteConfig.description,
  verification: {
    google: '5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs',
  },
  // added new keywords for seo
  keywords: [
    'bitly url shortener',
    'bitly link shortener',
    'link shortener',
    'url shortener',
    'link management',
    'tinyurls',
    'bio for instagram',
    'linknode',
    'link node',
    'sujjeee',
    'onelink',
    'social links',
    'free linktree',
    'link in bio',
    'link in bio instagram',
    'linktree',
    'dub.co',
    'dub',
  ],
  authors: [
    {
      name: 'sujjeee',
      url: 'https://github.com/sujjeee',
    },
  ],
  creator: 'sujjeee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: '@sujjeeee',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
