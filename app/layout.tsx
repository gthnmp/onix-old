import './globals.css'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Navbar from './(component)/navbar'
import Footer from './(component)/footer'

const inter = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Onix Fragrance',
  description: 'Generated by create next app',
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
      <body className={`${inter.className} bg-neutral-900`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
