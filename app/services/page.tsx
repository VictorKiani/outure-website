'use client'

import { motion } from 'framer-motion'
import { BarChart3, Lightbulb, Bot, Zap, ArrowUpRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    icon: BarChart3,
    title: 'Business Analysis',
    description:
      'Deep dive into your operations to identify opportunities, optimize processes, and drive data-informed decisions.',
    features: ['Process Mapping', 'Requirements Analysis', 'Performance Metrics'],
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description:
      'Develop winning strategies that align your vision with market realities and position you for sustainable growth.',
    features: ['Market Analysis', 'Competitive Strategy', 'Growth Planning'],
  },
  {
    icon: Bot,
    title: 'AI Integration',
    description:
      'Implement cutting-edge AI solutions that automate workflows, enhance decision-making, and unlock new possibilities.',
    features: ['Custom AI Solutions', 'ML Implementation', 'Predictive Analytics'],
  },
  {
    icon: Zap,
    title: 'Automation Solutions',
    description:
      'Transform manual processes into efficient automated systems that scale with your business needs.',
    features: ['Workflow Automation', 'System Integration', 'Process Optimization'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to transform your business through
              strategic thinking, innovation, and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-background rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium bg-secondary rounded-full text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
