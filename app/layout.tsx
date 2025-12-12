import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Test Your Knowledge',
  description: 'Interactive quiz application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
