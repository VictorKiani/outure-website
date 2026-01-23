'use client'

import { motion } from 'framer-motion'
import {
  Brain,
  Cloud,
  Zap,
  Shield,
  TrendingUp,
  Link2,
  Activity,
  Cpu
} from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Advanced AI Solutions',
    description: 'Cutting-edge machine learning and artificial intelligence tailored to your business needs.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable AWS infrastructure and cloud solutions built for performance and reliability.',
  },
  {
    icon: Zap,
    title: 'Intelligent Automation',
    description: 'Streamlined workflows and process automation that scale with your operations.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is protected with robust security measures and best practices.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'ML-powered insights and forecasting to drive data-informed decisions.',
  },
  {
    icon: Link2,
    title: 'Seamless Integration',
    description: 'Connect your systems with robust APIs and middleware solutions.',
  },
  {
    icon: Activity,
    title: 'Real-time Processing',
    description: 'Fast, efficient data pipelines for immediate insights and actions.',
  },
  {
    icon: Cpu,
    title: 'Custom ML Models',
    description: 'Tailored machine learning models designed for your specific use cases.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Capabilities() {
  return (
    <section className="py-24 bg-secondary/50 dark:bg-secondary/30 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Powered By</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The technology behind the transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure and cutting-edge AI capabilities that power
            every solution we deliver.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative"
        >
          {capabilities.map((capability, index) => {
            const isFirstCol = index % 4 === 0
            const isLastCol = index % 4 === 3
            const isFirstColSm = index % 2 === 0

            return (
              <motion.div
                key={capability.title}
                variants={itemVariants}
                className="group relative bg-background/50 dark:bg-background/30 p-6 lg:p-8 rounded-xl transition-all duration-300 hover:bg-muted/50"
              >
                {/* Left accent bar - short, centered vertically */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] transition-all duration-300
                    ${isFirstCol ? 'left-0' : 'lg:-left-[10px]'}
                    ${isFirstColSm ? 'sm:left-0' : 'sm:-left-[10px]'}
                    left-0
                  `}
                />

                {/* Right accent bar - only on outer right edge */}
                {isLastCol && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-300 hidden lg:block" />
                )}

                {/* Right bar for 2-col sm layout */}
                {index % 2 === 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-accent via-primary to-accent rounded-full opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_12px_rgba(139,92,246,0.5)] transition-all duration-300 hidden sm:block lg:hidden" />
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl" />
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <capability.icon className="w-8 h-8 text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>

                  <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Transition to next section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-sm">
            See how we transform your data
          </p>
          <motion.div
            className="mt-4 flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles for continuity */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
