'use client'

import { motion } from 'framer-motion'
import { Database, Brain, Cpu, BarChart3 } from 'lucide-react'

const stages = [
  {
    icon: Database,
    label: 'Data Input',
    description: 'Gather & Analyze',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Cpu,
    label: 'Processing',
    description: 'Transform & Clean',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Brain,
    label: 'AI Analysis',
    description: 'Insights & Patterns',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: BarChart3,
    label: 'Results',
    description: 'Actionable Output',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
]

// Scattered dots animation - very chaotic disorganized data
function ScatteredDotsConnector({ delay }: { delay: number }) {
  const dots = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    startY: Math.random() * 50 - 25,
    mid1Y: Math.random() * 44 - 22,
    mid2Y: Math.random() * 44 - 22,
    mid3Y: Math.random() * 44 - 22,
    endY: Math.random() * 30 - 15,
    duration: 1.2 + Math.random() * 1.2,
    delay: delay + Math.random() * 0.8,
    size: 2 + Math.random() * 5,
  }))

  return (
    <motion.svg
      width="100"
      height="96"
      viewBox="0 0 100 96"
      className="mx-2 self-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {dots.map((dot) => (
        <motion.circle
          key={dot.id}
          r={dot.size / 2}
          fill="url(#dotsGradient)"
          variants={{
            hidden: { opacity: 0, cx: -5, cy: 48 + dot.startY },
            visible: {
              opacity: [0, 0.9, 1, 1, 0.9, 0.7],
              cx: [-5, 15, 35, 60, 85, 105],
              cy: [
                48 + dot.startY,
                48 + dot.mid1Y,
                48 + dot.mid2Y,
                48 + dot.mid3Y,
                48 + dot.endY,
                48
              ],
              transition: {
                duration: dot.duration,
                delay: dot.delay,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "linear",
              }
            }
          }}
        />
      ))}
      <defs>
        <linearGradient id="dotsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Organized parallel lines with flowing dots - structured data
function OrganizedLinesConnector({ delay }: { delay: number }) {
  const lines = [
    { y: 33, opacity: 0.5 },
    { y: 48, opacity: 1 },
    { y: 63, opacity: 0.5 },
  ]

  return (
    <motion.svg
      width="100"
      height="96"
      viewBox="0 0 100 96"
      className="mx-2 self-start"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Static parallel lines */}
      {lines.map((line, i) => (
        <line
          key={`line-${i}`}
          x1="0"
          y1={line.y}
          x2="100"
          y2={line.y}
          stroke="url(#organizedGradient)"
          strokeWidth={i === 1 ? 1.5 : 1}
          opacity={line.opacity * 0.3}
        />
      ))}

      {/* Flowing dots on each line */}
      {lines.map((line, lineIndex) => (
        Array.from({ length: 4 }, (_, dotIndex) => (
          <motion.circle
            key={`dot-${lineIndex}-${dotIndex}`}
            r={lineIndex === 1 ? 4 : 2.5}
            fill="url(#organizedGradient)"
            opacity={line.opacity}
            animate={{
              cx: [-10, 110],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: dotIndex * 0.45 + lineIndex * 0.1,
              ease: "linear",
            }}
            cy={line.y}
          />
        ))
      ))}

      <defs>
        <linearGradient id="organizedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Clustering/Convergence - dots organize and converge into clean output
function ClusteringConnector({ delay }: { delay: number }) {
  const dots = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    startY: (i % 4) * 22 + 10,
    startX: -5 - (i % 3) * 8,
    clusterY: 33 + Math.floor(i / 4) * 22,
    clusterX: 40 + (i % 4) * 5,
  }))

  return (
    <motion.svg width="100" height="96" viewBox="0 0 100 96" className="mx-2 self-start">
      {dots.map((dot) => (
        <motion.circle
          key={dot.id}
          r={3}
          fill="url(#clusterGradient)"
          animate={{
            cx: [dot.startX, dot.clusterX, dot.clusterX + 5, 110],
            cy: [dot.startY, dot.clusterY, 48, 48],
            opacity: [0, 1, 1, 0.8, 0],
            scale: [1, 1, 1.2, 0.8],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: delay + (dot.id % 4) * 0.1,
            times: [0, 0.35, 0.6, 0.9, 1],
            ease: "easeInOut",
          }}
        />
      ))}
      <defs>
        <linearGradient id="clusterGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Option 2: Neural Connections - dots form connection lines like synapses
function NeuralConnector({ delay }: { delay: number }) {
  const nodes = [
    { x: 15, y: 15 }, { x: 15, y: 35 }, { x: 15, y: 55 },
    { x: 45, y: 25 }, { x: 45, y: 45 },
    { x: 75, y: 35 },
  ]
  const connections = [
    [0, 3], [1, 3], [1, 4], [2, 4], [3, 5], [4, 5],
  ]

  return (
    <motion.svg width="100" height="70" viewBox="0 0 100 70" className="mx-2">
      {/* Connection lines */}
      {connections.map(([from, to], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="#22c55e"
          strokeWidth={1.5}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + i * 0.15,
          }}
        />
      ))}
      {/* Traveling pulses along connections */}
      {connections.map(([from, to], i) => (
        <motion.circle
          key={`pulse-${i}`}
          r={2.5}
          fill="#22c55e"
          animate={{
            cx: [nodes[from].x, nodes[to].x],
            cy: [nodes[from].y, nodes[to].y],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: delay + i * 0.2 + 0.3,
            repeatDelay: 1.4,
          }}
        />
      ))}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={node.x}
          cy={node.y}
          r={i === 5 ? 6 : 4}
          fill={i < 3 ? "#ec4899" : i === 5 ? "#22c55e" : "#a855f7"}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: delay + i * 0.1,
          }}
        />
      ))}
      {/* Output signal */}
      <motion.circle
        r={3}
        fill="#22c55e"
        animate={{
          cx: [75, 110],
          cy: [35, 35],
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          delay: delay + 1.2,
          repeatDelay: 1.2,
        }}
      />
    </motion.svg>
  )
}

// Option 3: Scanning Spotlight - sweeping scan that highlights insights
function ScanningConnector({ delay }: { delay: number }) {
  const dataPoints = Array.from({ length: 8 }, (_, i) => ({
    x: 10 + (i % 4) * 22,
    y: 20 + Math.floor(i / 4) * 30,
    isInsight: i === 1 || i === 5 || i === 6,
  }))

  return (
    <motion.svg width="100" height="70" viewBox="0 0 100 70" className="mx-2">
      {/* Scanning line */}
      <motion.line
        x1={0}
        y1={0}
        x2={0}
        y2={70}
        stroke="url(#scanGradient)"
        strokeWidth={3}
        animate={{
          x1: [-10, 90, 90],
          x2: [-10, 90, 90],
          opacity: [0.8, 0.8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          times: [0, 0.6, 1],
          ease: "linear",
        }}
      />
      {/* Data points that light up when scanned */}
      {dataPoints.map((point, i) => (
        <motion.circle
          key={i}
          cx={point.x}
          cy={point.y}
          r={point.isInsight ? 5 : 3}
          fill={point.isInsight ? "#22c55e" : "#64748b"}
          animate={{
            opacity: point.isInsight ? [0.3, 0.3, 1, 1, 0.3] : [0.2, 0.2, 0.5, 0.5, 0.2],
            scale: point.isInsight ? [1, 1, 1.4, 1.4, 1] : [1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: delay + (point.x / 90) * 1.2,
            times: [0, 0.3, 0.4, 0.7, 1],
          }}
        />
      ))}
      {/* Highlighted insights flow out */}
      {dataPoints.filter(p => p.isInsight).map((point, i) => (
        <motion.circle
          key={`out-${i}`}
          r={3}
          fill="#22c55e"
          animate={{
            cx: [point.x, 110],
            cy: [point.y, 35],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: delay + 1.5 + i * 0.15,
            repeatDelay: 1.7,
          }}
        />
      ))}
      <defs>
        <linearGradient id="scanGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity={0} />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Option 4: Filter Funnel - dots get filtered, key insights emerge
function FunnelConnector({ delay }: { delay: number }) {
  const inputDots = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    startY: 10 + (i % 5) * 12,
    isKey: i === 1 || i === 3 || i === 7,
  }))

  return (
    <motion.svg width="100" height="70" viewBox="0 0 100 70" className="mx-2">
      {/* Funnel shape */}
      <motion.path
        d="M25 5 L25 65 M75 5 L75 65 M25 5 Q50 25 75 5 M25 65 Q50 45 75 65"
        stroke="#64748b"
        strokeWidth={1}
        fill="none"
        opacity={0.3}
      />
      {/* Input dots flowing through funnel */}
      {inputDots.map((dot) => (
        <motion.circle
          key={dot.id}
          r={dot.isKey ? 4 : 3}
          fill={dot.isKey ? "#22c55e" : "#94a3b8"}
          animate={{
            cx: [-5, 30, 50, 70, dot.isKey ? 110 : 70],
            cy: [dot.startY, dot.startY, 35, 35, 35],
            opacity: dot.isKey ? [0, 1, 1, 1, 0] : [0, 0.6, 0.6, 0, 0],
            scale: dot.isKey ? [1, 1, 1.2, 1, 1] : [1, 1, 0.5, 0, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: delay + dot.id * 0.12,
            times: [0, 0.25, 0.5, 0.75, 1],
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Filter effect in middle */}
      <motion.rect
        x={45}
        y={15}
        width={10}
        height={40}
        rx={2}
        fill="url(#filterGradient)"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay,
        }}
      />
      <defs>
        <linearGradient id="filterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Radar - random dots appear, get detected, then travel to results
function PulseConnector({ delay }: { delay: number }) {
  // Random detection points that appear and then travel to output
  const detections = [
    { angle: 30, dist: 32, timing: 0 },
    { angle: 120, dist: 26, timing: 0.7 },
    { angle: 200, dist: 35, timing: 1.4 },
    { angle: 290, dist: 22, timing: 2.1 },
    { angle: 75, dist: 28, timing: 2.8 },
  ]

  return (
    <motion.svg width="120" height="96" viewBox="0 0 120 96" className="mx-2 self-start">
      {/* Radar sweep */}
      <motion.path
        d="M60 48 L60 10"
        stroke="url(#radarGradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        style={{ transformOrigin: "60px 48px" }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay,
        }}
      />
      {/* Radar circles */}
      {[16, 32].map((r, i) => (
        <circle
          key={i}
          cx={60}
          cy={48}
          r={r}
          fill="none"
          stroke="#64748b"
          strokeWidth={0.5}
          opacity={0.3}
        />
      ))}
      {/* Center point */}
      <circle cx={60} cy={48} r={3} fill="#ec4899" />

      {/* Detection dots that appear randomly and travel to results */}
      {detections.map((det, i) => {
        const startX = 60 + Math.cos((det.angle * Math.PI) / 180) * det.dist
        const startY = 48 + Math.sin((det.angle * Math.PI) / 180) * det.dist
        return (
          <motion.circle
            key={i}
            r={5}
            fill="#22c55e"
            animate={{
              cx: [startX, startX, 125],
              cy: [startY, startY, 48],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.3, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: delay + det.timing,
              times: [0, 0.25, 0.5, 1],
              repeatDelay: 2,
              ease: "easeOut",
            }}
          />
        )
      })}
      <defs>
        <linearGradient id="radarGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Mobile vertical connectors
function MobileScatteredDots({ delay }: { delay: number }) {
  const dots = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    startX: Math.random() * 16 - 8,
    midX: Math.random() * 12 - 6,
    duration: 1.2 + Math.random() * 0.5,
    delay: delay + Math.random() * 0.3,
    size: 2 + Math.random() * 2,
  }))

  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      {dots.map((dot) => (
        <motion.circle
          key={dot.id}
          r={dot.size / 2}
          fill="#3b82f6"
          initial={{ opacity: 0, cx: 15 + dot.startX, cy: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: [15 + dot.startX, 15 + dot.midX, 15 - dot.midX, 15],
            cy: [0, 20, 35, 50],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: 0.8,
          }}
        />
      ))}
    </motion.svg>
  )
}

// Mobile: Organized parallel lines with flowing dots
function MobileOrganizedLines({ delay }: { delay: number }) {
  const lines = [8, 15, 22]

  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      {/* Static vertical lines */}
      {lines.map((x, i) => (
        <line
          key={`mline-${i}`}
          x1={x}
          y1="0"
          x2={x}
          y2="50"
          stroke="#8b5cf6"
          strokeWidth={i === 1 ? 1.5 : 1}
          opacity={i === 1 ? 0.4 : 0.2}
        />
      ))}
      {/* Flowing dots */}
      {lines.map((x, lineIndex) => (
        Array.from({ length: 3 }, (_, dotIndex) => (
          <motion.circle
            key={`mdot-${lineIndex}-${dotIndex}`}
            cx={x}
            r={lineIndex === 1 ? 2.5 : 1.5}
            fill="#8b5cf6"
            opacity={lineIndex === 1 ? 1 : 0.6}
            animate={{ cy: [-5, 55] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: delay + dotIndex * 0.4 + lineIndex * 0.1,
              ease: "linear",
            }}
          />
        ))
      ))}
    </motion.svg>
  )
}

// Mobile: Clustering
function MobileClustering({ delay }: { delay: number }) {
  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      {Array.from({ length: 6 }, (_, i) => (
        <motion.circle
          key={i}
          r={2}
          fill="url(#mClusterGrad)"
          animate={{
            cx: [5 + (i % 3) * 10, 15, 15, 15],
            cy: [-5, 20, 25, 55],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: delay + i * 0.1,
            times: [0, 0.3, 0.6, 1],
          }}
        />
      ))}
      <defs>
        <linearGradient id="mClusterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

// Mobile: Neural
function MobileNeural({ delay }: { delay: number }) {
  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      <motion.circle cx={8} cy={10} r={3} fill="#ec4899" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} />
      <motion.circle cx={22} cy={10} r={3} fill="#ec4899" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
      <motion.circle cx={15} cy={25} r={4} fill="#a855f7" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
      <motion.circle cx={15} cy={42} r={4} fill="#22c55e" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }} />
      {[[8, 10, 15, 25], [22, 10, 15, 25], [15, 25, 15, 42]].map(([x1, y1, x2, y2], i) => (
        <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#64748b" strokeWidth={1} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </motion.svg>
  )
}

// Mobile: Scanning
function MobileScanning({ delay }: { delay: number }) {
  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      <motion.line
        x1={0} y1={0} x2={30} y2={0}
        stroke="#a855f7"
        strokeWidth={2}
        animate={{ y1: [-5, 50], y2: [-5, 50], opacity: [0.8, 0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay, times: [0, 0.7, 1] }}
      />
      {[{ x: 8, y: 12, key: true }, { x: 22, y: 18, key: false }, { x: 15, y: 30, key: true }, { x: 10, y: 40, key: false }].map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={p.key ? 3 : 2}
          fill={p.key ? "#22c55e" : "#64748b"}
          animate={{ opacity: p.key ? [0.3, 1, 1, 0.3] : [0.2, 0.4, 0.4, 0.2], scale: p.key ? [1, 1.3, 1.3, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: delay + p.y / 50 }}
        />
      ))}
    </motion.svg>
  )
}

// Mobile: Funnel
function MobileFunnel({ delay }: { delay: number }) {
  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      <path d="M5 10 L25 10 M10 25 L20 25 M13 40 L17 40" stroke="#64748b" strokeWidth={0.5} opacity={0.3} />
      {Array.from({ length: 5 }, (_, i) => {
        const isKey = i === 1 || i === 3
        return (
          <motion.circle
            key={i}
            r={isKey ? 3 : 2}
            fill={isKey ? "#22c55e" : "#94a3b8"}
            animate={{
              cx: [5 + i * 5, 15, 15, 15],
              cy: [-5, 15, 30, isKey ? 55 : 35],
              opacity: isKey ? [0, 1, 1, 0] : [0, 0.5, 0, 0],
            }}
            transition={{ duration: 1.8, repeat: Infinity, delay: delay + i * 0.15, times: [0, 0.3, 0.6, 1] }}
          />
        )
      })}
    </motion.svg>
  )
}

// Mobile: Pulse/Radar - random dots appear and travel to output
function MobilePulse({ delay }: { delay: number }) {
  const detections = [
    { a: 45, d: 8, timing: 0 },
    { a: 160, d: 7, timing: 0.6 },
    { a: 270, d: 9, timing: 1.2 },
  ]

  return (
    <motion.svg width="30" height="50" viewBox="0 0 30 50" className="my-2">
      <circle cx={15} cy={18} r={8} fill="none" stroke="#64748b" strokeWidth={0.5} opacity={0.3} />
      <circle cx={15} cy={18} r={1.5} fill="#ec4899" />
      <motion.line
        x1={15} y1={18} x2={15} y2={10}
        stroke="url(#mRadarGrad)"
        strokeWidth={1.5}
        style={{ transformOrigin: "15px 18px" }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
      />
      {detections.map((det, i) => {
        const startX = 15 + Math.cos(det.a * Math.PI / 180) * det.d
        const startY = 18 + Math.sin(det.a * Math.PI / 180) * det.d
        return (
          <motion.circle
            key={i}
            r={2.5}
            fill="#22c55e"
            animate={{
              cx: [startX, startX, 15],
              cy: [startY, startY, 55],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              delay: delay + det.timing,
              times: [0, 0.25, 0.5, 1],
              repeatDelay: 1.2,
            }}
          />
        )
      })}
      <defs>
        <linearGradient id="mRadarGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </motion.svg>
  )
}

export default function DataFlowAnimation() {
  // Final connector configuration:
  // 1. Data Input → Processing: Scattered dots (chaotic)
  // 2. Processing → AI Analysis: Clustering (organizing data)
  // 3. AI Analysis → Results: Pulse/Radar (pattern detection)
  const connectors = [
    { Component: ScatteredDotsConnector, MobileComponent: MobileScatteredDots },
    { Component: ClusteringConnector, MobileComponent: MobileClustering },
    { Component: PulseConnector, MobileComponent: MobilePulse },
  ]

  return (
    <div className="relative py-8 md:py-16 overflow-hidden">
      {/* Desktop Layout */}
      <div className="hidden md:flex justify-center items-start">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 rounded-2xl ${stage.bgColor} flex items-center justify-center mb-3 transition-transform`}
              >
                <stage.icon className={`w-12 h-12 ${stage.color}`} />
              </motion.div>
              <h4 className="font-semibold text-foreground text-base">{stage.label}</h4>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
            </motion.div>

            {index < stages.length - 1 && (() => {
              const Connector = connectors[index].Component
              return <Connector delay={index * 0.4 + 0.5} />
            })()}
          </div>
        ))}
      </div>

      {/* Mobile Layout - Vertical */}
      <div className="flex md:hidden flex-col items-center gap-2">
        {stages.map((stage, index) => (
          <div key={stage.label} className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-20 h-20 rounded-2xl ${stage.bgColor} flex items-center justify-center mb-2`}
              >
                <stage.icon className={`w-10 h-10 ${stage.color}`} />
              </motion.div>
              <h4 className="font-semibold text-foreground text-sm">{stage.label}</h4>
              <p className="text-xs text-muted-foreground">{stage.description}</p>
            </motion.div>

            {index < stages.length - 1 && (() => {
              const MobileConnector = connectors[index].MobileComponent
              return <MobileConnector delay={index * 0.2} />
            })()}
          </div>
        ))}
      </div>

      {/* Animated background dots */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
