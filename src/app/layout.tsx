import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const description =
  'Jiwon Choi is a software engineer concentrating on web, cloud, and developer experience. Active contributor of Next.js, Vercel, and other open-source projects.'

const keywords = [
  'Jiwon Choi',
  'Vercel',
  'Next.js',
  'Software Engineer',
  'Open Source',
  'Web',
  'Frontend',
  'Cloud',
  'Developer Experience',
  'DevOps',
]

export const metadata: Metadata = {
  title: 'Jiwon Choi',
  description,
  keywords,
  metadataBase: new URL('https://www.jiwonchoi.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.jiwonchoi.dev',
    images: [
      {
        url: '/me-logo800x600.png',
        width: 800,
        height: 600,
        alt: 'Jiwon Choi Logo',
      },
    ],
    siteName: 'Jiwon Choi',
  },
  twitter: {
    creator: '@devjiwonchoi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  )
}
