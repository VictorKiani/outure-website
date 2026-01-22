'use client'

import { motion } from 'framer-motion'
import { Shield, GraduationCap, Award } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const victorCredentials = [
  {
    icon: Shield,
    title: 'USMC Veteran',
    description: 'Non-Commissioned Officer',
  },
  {
    icon: Award,
    title: 'Lean Six Sigma',
    description: 'Process Improvement & DMAIC',
  },
  {
    icon: GraduationCap,
    title: 'NYU',
    description: 'Leadership & International Business',
  },
]

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
                  on organizational strategy and information management. His work emphasizes streamlining
                  processes and fostering efficiency, leveraging expertise in organizational consulting
                  and digital strategy to deliver impactful solutions.
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

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {victorCredentials.map((credential, index) => (
                <motion.div
                  key={credential.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{credential.title}</p>
                    <p className="text-sm text-muted-foreground">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
