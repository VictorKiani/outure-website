import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// JSON-LD Structured Data for SEO
function getJsonLd(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'OUTURE LLC',
        url: siteUrl,
        description: 'Veteran-owned NYC-based consulting firm specializing in business analysis, strategic thinking, innovation, automation, and AI solutions.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York City',
          addressRegion: 'NY',
          addressCountry: 'US',
        },
        email: 'victor.kiani@outure.co',
        founder: {
          '@type': 'Person',
          name: 'Victor Kiani',
        },
        foundingDate: '2025-03',
        duns: '137354060',
        keywords: 'veteran-owned business, consulting',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'OUTURE',
        description: 'Business Analysis, Strategy & AI Solutions',
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#victor-kiani`,
        name: 'Victor Kiani',
        jobTitle: 'Founder',
        worksFor: {
          '@id': `${siteUrl}/#organization`,
        },
        email: 'victor.kiani@outure.co',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York City',
          addressRegion: 'NY',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#service`,
        name: 'OUTURE Consulting Services',
        provider: {
          '@id': `${siteUrl}/#organization`,
        },
        areaServed: {
          '@type': 'Country',
          name: 'United States',
        },
        serviceType: [
          'Business Analysis',
          'Strategic Consulting',
          'AI Integration',
          'Automation Solutions',
        ],
      },
    ],
  }
}

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://outure.co'
  const jsonLd = getJsonLd(siteUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Approach />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
