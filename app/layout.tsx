import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import { Toaster } from "../components/ui/toaster"
import "../styles/global.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'ZimPolyStay - Student Accommodation Portal',
    template: '%s | ZimPolyStay'
  },
  description: 'Find and book quality student accommodation for polytechnic students.',
  keywords: ['student accommodation', 'polytechnic housing', 'student hostel', 'Zimbabwe polytechnic'],
  authors: [{ name: 'ZimPolyStay' }],
  creator: 'ZimPolyStay',
  metadataBase: new URL('https://zimpolystay.edu'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zimpolystay.edu',
    title: 'ZimPolyStay - Student Accommodation Portal',
    description: 'Find and book quality student accommodation for polytechnic students.',
    siteName: 'ZimPolyStay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZimPolyStay - Student Accommodation Portal',
    description: 'Find and book quality student accommodation for polytechnic students.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
