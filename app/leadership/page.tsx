'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function FunnelGraphic() {
  // Generate random starting positions for input particles
  const inputParticles = [
    { id: 1, startX: -20, startY: 30, size: 8, delay: 0, duration: 3 },
    { id: 2, startX: -40, startY: 70, size: 12, delay: 0.5, duration: 3.2 },
    { id: 3, startX: -10, startY: 110, size: 6, delay: 1, duration: 2.8 },
    { id: 4, startX: -50, startY: 150, size: 10, delay: 1.5, duration: 3.1 },
    { id: 5, startX: -30, startY: 50, size: 7, delay: 2, duration: 2.9 },
    { id: 6, startX: -25, startY: 130, size: 9, delay: 2.5, duration: 3.3 },
    { id: 7, startX: -45, startY: 90, size: 11, delay: 0.3, duration: 3 },
    { id: 8, startX: -15, startY: 170, size: 5, delay: 1.8, duration: 2.7 },
  ]

  const outputParticles = [
    { id: 1, delay: 0, duration: 2 },
    { id: 2, delay: 0.4, duration: 2 },
    { id: 3, delay: 0.8, duration: 2 },
    { id: 4, delay: 1.2, duration: 2 },
    { id: 5, delay: 1.6, duration: 2 },
    { id: 6, delay: 2, duration: 2 },
  ]

  return (
    <div className="relative w-full h-72 flex items-center justify-center overflow-hidden">
      <svg className="w-full max-w-xl h-full" viewBox="0 0 500 200" fill="none">

        <defs>
          <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Funnel body - horizontal cone */}
        <path
          d="M 120 25
             C 140 25, 160 40, 200 60
             L 280 85
             L 340 95
             L 340 105
             L 280 115
             L 200 140
             C 160 160, 140 175, 120 175
             C 110 175, 105 165, 105 160
             L 105 40
             C 105 35, 110 25, 120 25
             Z"
          fill="url(#funnelGradient)"
          stroke="#8b5cf6"
          strokeWidth="2"
        />

        {/* Funnel opening highlight */}
        <ellipse cx="112" cy="100" rx="8" ry="70" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.5" />

        {/* Input particles - chaotic, flowing into funnel */}
        {inputParticles.map((p) => (
          <motion.circle
            key={`in-${p.id}`}
            r={p.size}
            fill={p.id % 2 === 0 ? "#a78bfa" : "#8b5cf6"}
            fillOpacity={0.8}
            initial={{ cx: p.startX, cy: p.startY, scale: 1 }}
            animate={{
              cx: [p.startX, 50, 105],
              cy: [p.startY, p.startY * 0.7 + 30, 100],
              scale: [1, 0.9, 0.6],
              opacity: [0.8, 0.9, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        ))}

        {/* Particles traveling through funnel */}
        <motion.circle r="5" fill="#8b5cf6"
          animate={{ cx: [120, 220, 340], cy: [60, 80, 100], opacity: [0.7, 0.8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
        />
        <motion.circle r="6" fill="#a78bfa"
          animate={{ cx: [120, 230, 340], cy: [100, 100, 100], opacity: [0.8, 0.7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />
        <motion.circle r="4" fill="#c4b5fd"
          animate={{ cx: [120, 225, 340], cy: [140, 120, 100], opacity: [0.7, 0.8, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 1.4 }}
        />

        {/* Output section - organized line of dots emerging */}
        {outputParticles.map((p, i) => (
          <motion.circle
            key={`out-${p.id}`}
            r="5"
            fill="#8b5cf6"
            cy={100}
            initial={{ cx: 340, opacity: 0, scale: 0.5 }}
            animate={{
              cx: [340, 360 + i * 22],
              opacity: [0, 1],
              scale: [0.5, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Output line connector - pulses */}
        <motion.line
          x1="360" y1="100" x2="480" y2="100"
          stroke="#8b5cf6"
          strokeWidth="2"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Arrow indicating flow direction */}
        <motion.path
          d="M 485 95 L 495 100 L 485 105"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />

      </svg>
    </div>
  )
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Leadership</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the team driving OUTURE&apos;s mission to deliver strategic innovation
              and cutting-edge solutions to businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">Victor A. Kiani</h2>
              <p className="text-primary font-medium mb-6">Founder & CEO</p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over seven years of cross-sector experience, Victor leads OUTURE with a focus
                  on organizational strategy and information management. His expertise lies in turning
                  complexity into clarity—whether it&apos;s tangled processes, abstract ideas, or
                  multi-domain challenges, he transforms them into actionable, streamlined solutions.
                </p>
                <p>
                  As a former Non-Commissioned Officer in the United States Marine Corps, Victor developed
                  and implemented process improvements using Lean Six Sigma and DMAIC methodologies. He holds
                  an Information Management Officer qualification and brings military precision to business operations.
                </p>
                <p>
                  Currently pursuing a B.S. in Leadership & Management Studies with a concentration in
                  International Business and Global Management at NYU, his focus areas include global strategy,
                  organizational behavior, and cross-cultural leadership.
                </p>
              </div>
            </motion.div>

            {/* Funnel Graphic */}
            <div>
              <FunnelGraphic />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
