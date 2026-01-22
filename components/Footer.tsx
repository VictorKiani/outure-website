'use client'

import { Mail, MapPin } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Business Analysis', href: '#services' },
    { name: 'Strategic Consulting', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'Automation Solutions', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-4">OUTURE</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Transforming businesses through strategic innovation, cutting-edge AI solutions, and data-driven insights.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:victor.kiani@outure.co"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  victor.kiani@outure.co
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                New York City
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {currentYear} OUTURE LLC. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Veteran-Owned Business • D-U-N-S: 137354060
              </p>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Business Analysis • Strategic Consulting • AI Integration • Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
