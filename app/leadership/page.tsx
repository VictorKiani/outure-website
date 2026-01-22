'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { VictorGraphic, JaneGraphic } from '@/components/LeadershipGraphics'

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

            {/* 3D Funnel Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <VictorGraphic />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTO Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Neural Network Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <JaneGraphic />
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold mb-2">Jane Doe</h2>
              <p className="text-primary font-medium mb-6">Chief Technology Officer</p>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Jane brings over three years of experience at Amazon Web Services as a Solutions Architect,
                  where she designed and implemented cloud infrastructure for enterprise clients across
                  diverse industries. Her deep expertise in cloud architecture and AI integration drives
                  OUTURE&apos;s technical strategy.
                </p>
                <p>
                  A recognized voice in the AI community, Jane has presented enterprise AI solutions at
                  AWS re:Invent, showcasing innovative approaches to machine learning deployment and
                  scalable infrastructure design. Her work bridges the gap between cutting-edge technology
                  and practical business applications.
                </p>
                <p>
                  Originally from South Korea, Jane brings a global perspective to technology leadership,
                  combining Eastern and Western approaches to innovation. Her expertise spans artificial
                  intelligence, cloud computing, and enterprise architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
