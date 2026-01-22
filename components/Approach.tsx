'use client'

import { motion } from 'framer-motion'
import { Search, Compass, Rocket, RefreshCw } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We begin by deeply understanding your business, challenges, and goals through comprehensive analysis.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Compass,
    title: 'Strategy',
    description: 'Develop tailored strategies that leverage critical thinking and innovative approaches to solve your unique problems.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    description: 'Execute solutions with precision, ensuring seamless integration and minimal disruption to your operations.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: RefreshCw,
    title: 'Optimization',
    description: 'Continuously monitor, measure, and refine to ensure sustained success and adaptation to changing needs.',
    color: 'from-green-500 to-green-600',
  },
]

// Curved arrow component that draws from one step to the next
function CurvedArrow({ index, direction }: { index: number; direction: 'left' | 'right' }) {
  // Different path based on direction (alternating sides)
  const path = direction === 'right'
    ? "M10 0 C10 40, 90 40, 90 80 L90 100" // Curves right then down
    : "M90 0 C90 40, 10 40, 10 80 L10 100" // Curves left then down

  const arrowPath = direction === 'right'
    ? "M80 90 L90 105 L100 90" // Arrow pointing down-right
    : "M0 90 L10 105 L20 90" // Arrow pointing down-left

  const colors = [
    { start: '#3b82f6', end: '#8b5cf6' }, // blue to purple
    { start: '#8b5cf6', end: '#ec4899' }, // purple to pink
    { start: '#ec4899', end: '#22c55e' }, // pink to green
  ]

  const color = colors[index] || colors[0]

  return (
    <motion.svg
      width="100"
      height="110"
      viewBox="0 0 100 110"
      className="absolute"
      style={{
        left: direction === 'right' ? '60%' : '30%',
        top: '100%',
        transform: 'translateX(-50%)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <defs>
        <linearGradient id={`curveGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color.start} />
          <stop offset="100%" stopColor={color.end} />
        </linearGradient>
      </defs>

      {/* Main curved path */}
      <motion.path
        d={path}
        stroke={`url(#curveGradient-${index})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 1, delay: index * 0.3 + 0.5, ease: "easeInOut" },
              opacity: { duration: 0.3, delay: index * 0.3 + 0.5 }
            }
          }
        }}
      />

      {/* Arrow head */}
      <motion.path
        d={arrowPath}
        stroke={`url(#curveGradient-${index})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.3, delay: index * 0.3 + 1.4, ease: "easeOut" },
              opacity: { duration: 0.2, delay: index * 0.3 + 1.4 }
            }
          }
        }}
      />

      {/* Traveling dot */}
      <motion.circle
        r="4"
        fill={color.end}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: [0, 1, 1, 0],
            transition: {
              duration: 1.5,
              delay: index * 0.3 + 1.8,
              repeat: Infinity,
              repeatDelay: 2,
            }
          }
        }}
      >
        <motion.animate
          attributeName="cx"
          values={direction === 'right' ? "10;50;90;90" : "90;50;10;10"}
          dur="1.5s"
          begin={`${index * 0.3 + 1.8}s`}
          repeatCount="indefinite"
        />
        <motion.animate
          attributeName="cy"
          values="0;40;80;105"
          dur="1.5s"
          begin={`${index * 0.3 + 1.8}s`}
          repeatCount="indefinite"
        />
      </motion.circle>
    </motion.svg>
  )
}

// Mobile vertical arrow
function MobileArrow({ index }: { index: number }) {
  const colors = [
    { start: '#3b82f6', end: '#8b5cf6' },
    { start: '#8b5cf6', end: '#ec4899' },
    { start: '#ec4899', end: '#22c55e' },
  ]
  const color = colors[index] || colors[0]

  return (
    <motion.svg
      width="40"
      height="60"
      viewBox="0 0 40 60"
      className="my-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <defs>
        <linearGradient id={`mobileGradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color.start} />
          <stop offset="100%" stopColor={color.end} />
        </linearGradient>
      </defs>

      {/* Curved line */}
      <motion.path
        d="M20 0 C5 15, 35 30, 20 45 L20 55"
        stroke={`url(#mobileGradient-${index})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.8, delay: index * 0.2, ease: "easeInOut" },
              opacity: { duration: 0.2, delay: index * 0.2 }
            }
          }
        }}
      />

      {/* Arrow head */}
      <motion.path
        d="M12 48 L20 58 L28 48"
        stroke={`url(#mobileGradient-${index})`}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { duration: 0.3, delay: index * 0.2 + 0.7, ease: "easeOut" },
              opacity: { duration: 0.2, delay: index * 0.2 + 0.7 }
            }
          }
        }}
      />
    </motion.svg>
  )
}

export default function Approach() {
  return (
    <section id="approach" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Approach</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that combines analytical rigor with creative innovation
            to deliver transformative results.
          </p>
        </motion.div>

        {/* Desktop Timeline with Curved Arrows */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="relative mb-32 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-[45%] bg-muted/50 rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </motion.div>

              {/* Curved Arrow to next step */}
              {index < steps.length - 1 && (
                <CurvedArrow
                  index={index}
                  direction={index % 2 === 0 ? 'right' : 'left'}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout with Vertical Arrows */}
        <div className="md:hidden flex flex-col items-center">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="bg-muted/50 rounded-2xl p-5 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && <MobileArrow index={index} />}
            </div>
          ))}
        </div>

        {/* Cycle visualization with spinning icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <RefreshCw className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-xs md:text-sm font-medium">
              Continuous improvement through iterative cycles
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
