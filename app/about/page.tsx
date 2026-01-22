'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Target, Award, Users, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { VictorGraphic, JaneGraphic } from '@/components/LeadershipGraphics'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  {
    icon: Target,
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    icon: Users,
    value: 10,
    suffix: '+',
    label: 'Clients Served',
  },
  {
    icon: Award,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
]

export default function AboutPage() {
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
              About <span className="gradient-text">OUTURE</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A veteran-owned consulting firm dedicated to helping businesses navigate
              the complexities of modern markets through strategic innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>

              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg">
                  OUTURE is a veteran-owned consulting firm dedicated to helping businesses
                  navigate the complexities of modern markets through strategic innovation and
                  cutting-edge technology solutions.
                </p>
                <p>
                  Founded in March 2025 with a mission to bridge the gap between traditional business
                  practices and emerging technologies, we combine deep industry expertise with innovative
                  thinking to deliver transformative results.
                </p>
                <p>
                  Our team brings together diverse backgrounds in business analysis, strategic
                  consulting, artificial intelligence, and automation to provide comprehensive
                  solutions that address your most pressing challenges.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border"
                >
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="font-medium">Veteran-Owned Business</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-background border border-border"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="font-medium">NYC · Seoul · Malmö</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 gradient-text">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Header */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the people driving OUTURE&apos;s mission to deliver strategic innovation
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
              <h3 className="text-3xl font-bold mb-2">Victor A. Kiani</h3>
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

            {/* 3D Graphic */}
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
            {/* 3D Graphic */}
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
              <h3 className="text-3xl font-bold mb-2">Jane Doe</h3>
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
