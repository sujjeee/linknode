import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { siteConfig } from './page'
import { Providers } from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

// Original source: https://github.com/sadmann7/skateshop/blob/main/src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://linknode.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "next.js",
    "react",
    "tailwind css",
    "shadcn ui",
    "linknode",
    "onelink",
    "social links",
    "linktree",
    "link in bio"
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
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
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
      </body>
    </html>
  )
}
