import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from './page'
import { Providers } from '@/components/Provider'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

// Original source: https://github.com/sadmann7/skateshop/blob/main/src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://linknode.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - LinkNode`,
  },
  description: siteConfig.description,
  verification: {
    google: "5z2lDnQ6mdG9S2qZm74DNfOk3xdwLR-orzDHc5XiJxs"
  },
  // added new keywords for seo
  keywords: [
    "bitly url shortener",
    "bitly link shortener",
    "link shortener",
    "url shortener",
    "bitly link",
    "tinyurls",
    "all in one link",
    "free url shortener",
    "linknode",
    "onelink",
    "social links",
    "free linktree",
    "link in bio",
    "short my url",
    "my links"
  ],
  authors: [
    {
      name: "sujjeee",
      url: "https://github.com/sujjeee",
    },
  ],
  creator: "sujjeee",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@sujjeeee",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
