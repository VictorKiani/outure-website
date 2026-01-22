'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import dynamic from 'next/dynamic'
import { smoothScroll } from '@/lib/utils'

const HeroBackground = dynamic(() => import('./HeroBackground'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-accent/5" />
  ),
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            NYC-Based Consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="block">Transform Your Business</span>
          <span className="block gradient-text mt-2">With Strategic Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          OUTURE delivers cutting-edge business analysis, strategic consulting, and AI-powered
          solutions that drive measurable results and sustainable growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => smoothScroll('contact')}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => smoothScroll('services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
