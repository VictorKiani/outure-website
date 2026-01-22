import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://getouture.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OUTURE | Business Analysis, Strategy & AI Solutions | Victor Kiani',
    template: '%s | OUTURE',
  },
  description: 'OUTURE is a veteran-owned NYC-based consulting firm founded by Victor Kiani, specializing in business analysis, strategic thinking, innovation, automation, and AI solutions. D-U-N-S: 137354060.',
  keywords: [
    'Victor Kiani',
    'OUTURE',
    'veteran-owned business',
    'business consulting',
    'business analysis',
    'AI solutions',
    'automation',
    'strategic consulting',
    'NYC consultant',
    'New York City',
    'innovation',
    'data analysis',
    'AI integration',
    'business strategy',
    'digital transformation',
    'process automation',
  ],
  authors: [{ name: 'Victor Kiani' }],
  creator: 'Victor Kiani',
  publisher: 'OUTURE LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'OUTURE',
    title: 'OUTURE | Business Analysis, Strategy & AI Solutions',
    description: 'Veteran-owned NYC-based consulting firm founded by Victor Kiani. Specializing in business analysis, strategic thinking, innovation, automation, and AI solutions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OUTURE | Business Analysis, Strategy & AI Solutions',
    description: 'NYC-based consulting firm founded by Victor Kiani. Specializing in business analysis, strategic thinking, innovation, automation, and AI solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: '/',
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
