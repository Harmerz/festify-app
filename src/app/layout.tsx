import './globals.css'

import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Festify APP',
  description: 'Festify APP PKM Kewirausahaan',
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1',
  icons: ['/favicon.ico'],
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
