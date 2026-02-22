import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'
import './globals.css'

const barlow = Barlow_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SurfSort Portal',
  description: 'Photographer portal powered by SurfSort',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body>{children}</body>
    </html>
  )
}
