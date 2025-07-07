import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crypto Learning Hub',
  description: '📚 A beginner-friendly site with interactive modules, quizzes, and animated explainers about Bitcoin, NFTs, DeFi, etc.',
   icons: {
    icon: '/bitcoin.jpg'
}

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
