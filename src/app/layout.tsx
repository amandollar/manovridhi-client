import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbot'
import { AuthProvider } from '@/contexts/AuthContext'

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
        <AuthProvider>
          {children}
          <Chatbot />
        </AuthProvider>
      </body>
    </html>
  )
}
