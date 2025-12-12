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
      <body className="antialiased">
        {children}
        <a
          href="https://github.com/Agaditya1000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
        >
          <span>GitHub: Agaditya1000</span>
        </a>
      </body>
    </html>
  )
}
