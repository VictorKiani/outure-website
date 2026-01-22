import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://outure.co/#organization',
      name: 'OUTURE LLC',
      url: 'https://outure.co',
      logo: {
        '@type': 'ImageObject',
        url: 'https://outure.co/logo.png',
      },
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
      sameAs: [
        'https://getouture.com',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://outure.co/#website',
      url: 'https://outure.co',
      name: 'OUTURE',
      description: 'Business Analysis, Strategy & AI Solutions',
      publisher: {
        '@id': 'https://outure.co/#organization',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://outure.co/#victor-kiani',
      name: 'Victor Kiani',
      jobTitle: 'Founder',
      worksFor: {
        '@id': 'https://outure.co/#organization',
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
      '@id': 'https://outure.co/#service',
      name: 'OUTURE Consulting Services',
      provider: {
        '@id': 'https://outure.co/#organization',
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

export default function Home() {
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
