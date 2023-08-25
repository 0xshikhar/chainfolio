import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChainFolio',
  description: 'Share Your Work OnChain',
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
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
