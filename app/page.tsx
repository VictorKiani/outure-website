import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OUTURE | Coming Soon',
  description: 'OUTURE is currently under maintenance. We\'ll be back soon with something great.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 px-6">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          OUTURE
        </h1>

        {/* Status */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          Under Maintenance
        </div>

        {/* Message */}
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          We&apos;re refining our experience to serve you better.
          <br className="hidden sm:block" />
          We&apos;ll be back online shortly.
        </p>

        {/* Contact */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
            Need to reach us?
          </p>
          <a
            href="mailto:victor.kiani@outure.co"
            className="text-gray-900 dark:text-white font-medium hover:underline"
          >
            victor.kiani@outure.co
          </a>
        </div>
      </div>
    </main>
  )
}
