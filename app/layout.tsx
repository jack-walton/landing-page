  import './global.css'
  import type { Metadata } from 'next'
  import { GeistSans } from 'geist/font/sans'
  import { GeistMono } from 'geist/font/mono'
  import { Navbar } from './components/nav'
  import { Analytics } from '@vercel/analytics/next';
  import { SpeedInsights } from '@vercel/speed-insights/next'
  import Footer from './components/footer'
  import Masthead from './components/masthead'
  import { baseUrl } from './sitemap'

  export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
      default: 'Jack Spencer Walton',
      template: '%s | Jack Walton',
    },
    description: 'This is my portfolio.',
    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
    },
    openGraph: {
      title: 'Jack Walton',
      description: 'Jack Walton\'s portfolio.',
    url: 'https://jackwalton.xyz', // Ensure baseUrl resolves to a full URL
    siteName: 'Jack Walton',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://jackwalton.xyz/thumbnail.png',
      width: 1200, // Updated to recommended size
      height: 630, // Updated to recommended size
      alt: 'Jack Walton',
      type: 'image/png',
    }],
  },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  const cx = (...classes) => classes.filter(Boolean).join(' ')

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html
        lang="en"
        className={cx(
          'text-black bg-white dark:text-white dark:bg-black',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="antialiased max-w-xl mx-4 lg:mx-auto">
          <main className="flex-auto min-w-0 mt-2 flex flex-col px-2 md:px-0">

            <Masthead />
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </body>
      </html>
    )
  }
