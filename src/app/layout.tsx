import type { Metadata } from 'next'
import '@/styles/globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata: Metadata = {
  title: 'Samcote - Black & White Design',
  description: 'A modern Next.js website with black and white theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
