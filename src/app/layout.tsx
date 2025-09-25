import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manovridhi - Mental Health Support',
  description: 'A supportive community for mental health discussions and resources',
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
      </body>
    </html>
  )
}
