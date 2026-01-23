'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { smoothScroll } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/', isPage: true },
  { name: 'Services', href: '/services', isPage: true },
  { name: 'Approach', href: 'approach', isPage: false },
  { name: 'About', href: '/about', isPage: true },
  { name: 'Contact', href: 'contact', isPage: false },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string, isPage: boolean) => {
    if (isPage) return // Let Link handle it

    if (isHomePage) {
      smoothScroll(href)
    } else {
      window.location.href = `/#${href}`
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
            : 'bg-background/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/">
              <motion.span
                className="text-2xl font-bold tracking-tight text-foreground cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                OUTURE
              </motion.span>
            </Link>

            {/* Desktop Navigation + Theme Toggle - Right Side */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isPage ? (
                  <Link key={link.name} href={link.href}>
                    <motion.span
                      className="text-foreground/80 hover:text-foreground transition-colors text-sm font-semibold cursor-pointer"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    className="text-foreground/80 hover:text-foreground transition-colors text-sm font-semibold"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {link.name}
                  </motion.button>
                )
              )}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) =>
                link.isPage ? (
                  <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block w-full text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.name}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
