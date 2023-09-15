import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Navbar from './(component)/navbar'
import Footer from './(component)/footer'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title : 'ONIX Fragrance - Boost your day',
  description : 'Discover Onix Fragrance Indonesian - Your source for affordable and long-lasting fragrances based in Bandung. Trusted by celebrities. Boost your day with our elegant scents.',
  keywords:'Onix Fragrance Indonesia, Onix Fragrance, Indonesian fragrances, affordable scents, long-lasting perfumes, Bandung store, celebrity-endorsed fragrances, trusted fragrance',
  viewport:'width=device-width, initial-scale=1',
  creator:'Gathan Mahesa',
  colorScheme:'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icon/logo.png" type="image/png" sizes='<generated>' />
      </head>
      <body className={`${inter.className} bg-neutral-900 overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
