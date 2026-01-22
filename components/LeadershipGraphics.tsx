'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

// Victor's graphic - Flowing streams that untangle
function FlowingStreams() {
  const groupRef = useRef<THREE.Group>(null)
  const { resolvedTheme } = useTheme()

  const streamCount = 8
  const pointsPerStream = 50

  const streamsRef = useRef<THREE.Line[]>([])

  const streams = useMemo(() => {
    const result: { geometry: THREE.BufferGeometry; initialPositions: Float32Array; color: string }[] = []
    const colors = resolvedTheme === 'dark'
      ? ['#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed']
      : ['#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9']

    for (let s = 0; s < streamCount; s++) {
      const positions = new Float32Array(pointsPerStream * 3)
      const yOffset = (s - streamCount / 2) * 0.4

      for (let i = 0; i < pointsPerStream; i++) {
        const t = i / (pointsPerStream - 1)
        const x = (t - 0.5) * 6
        // Start tangled on left, straighten on right
        const chaos = Math.max(0, 1 - t * 1.5)
        const y = yOffset + Math.sin(t * 8 + s * 0.7) * chaos * 0.8
        const z = Math.cos(t * 6 + s * 1.2) * chaos * 0.5

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3))

      result.push({ geometry, initialPositions: positions, color: colors[s % colors.length] })
    }
    return result
  }, [resolvedTheme])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    streams.forEach((stream, s) => {
      const positions = stream.geometry.attributes.position.array as Float32Array
      const yOffset = (s - streamCount / 2) * 0.4

      for (let i = 0; i < pointsPerStream; i++) {
        const t = i / (pointsPerStream - 1)
        const x = (t - 0.5) * 6

        // Animate the chaos factor
        const chaos = Math.max(0, 1 - t * 1.5) * (0.8 + Math.sin(time * 0.5) * 0.2)
        const y = yOffset + Math.sin(t * 8 + s * 0.7 + time * 0.8) * chaos * 0.8
        const z = Math.cos(t * 6 + s * 1.2 + time * 0.6) * chaos * 0.5

        positions[i * 3] = x
        positions[i * 3 + 1] = y
        positions[i * 3 + 2] = z
      }

      stream.geometry.attributes.position.needsUpdate = true
    })

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
    }
  })

  const lineObjects = useMemo(() => {
    return streams.map((stream) => {
      const material = new THREE.LineBasicMaterial({
        color: stream.color,
        transparent: true,
        opacity: 0.7,
      })
      return new THREE.Line(stream.geometry, material)
    })
  }, [streams])

  return (
    <group ref={groupRef}>
      {lineObjects.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </group>
  )
}

// Glowing endpoint particles
function StreamEndpoints() {
  const ref = useRef<THREE.Points>(null)
  const { resolvedTheme } = useTheme()

  const count = 20
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = 3 + Math.random() * 0.3
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 2 + i) * 0.002
      }
      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const color = resolvedTheme === 'dark' ? '#a78bfa' : '#8b5cf6'

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.1}
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  )
}

export function VictorGraphic() {
  return (
    <div className="w-full h-72 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <FlowingStreams />
        <StreamEndpoints />
      </Canvas>
    </div>
  )
}

// Jane's graphic - Cloud layers with connections
function CloudLayers() {
  const groupRef = useRef<THREE.Group>(null)
  const { resolvedTheme } = useTheme()

  const layerCount = 4
  const nodesPerLayer = 6

  const layers = useMemo(() => {
    const result: { y: number; nodes: [number, number, number][] }[] = []

    for (let l = 0; l < layerCount; l++) {
      const y = (l - (layerCount - 1) / 2) * 1.2
      const nodes: [number, number, number][] = []

      for (let n = 0; n < nodesPerLayer; n++) {
        const angle = (n / nodesPerLayer) * Math.PI * 2 + l * 0.3
        const radius = 1.5 + (l % 2) * 0.3
        nodes.push([
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ])
      }

      result.push({ y, nodes })
    }
    return result
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  const planeColor = resolvedTheme === 'dark' ? '#8b5cf6' : '#7c3aed'
  const nodeColor = resolvedTheme === 'dark' ? '#a78bfa' : '#8b5cf6'

  return (
    <group ref={groupRef}>
      {/* Layer planes */}
      {layers.map((layer, i) => (
        <mesh key={`plane-${i}`} position={[0, layer.y, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1, 2.2, 32]} />
          <meshBasicMaterial
            color={planeColor}
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Nodes on each layer */}
      {layers.map((layer, li) =>
        layer.nodes.map((pos, ni) => (
          <mesh key={`node-${li}-${ni}`} position={pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={nodeColor}
              emissive={nodeColor}
              emissiveIntensity={0.3}
            />
          </mesh>
        ))
      )}

      {/* Vertical connections between layers */}
      {layers.slice(0, -1).map((layer, li) =>
        layer.nodes.map((startPos, ni) => {
          const endPos = layers[li + 1].nodes[(ni + 1) % nodesPerLayer]
          return (
            <ConnectionBeam
              key={`conn-${li}-${ni}`}
              start={startPos}
              end={endPos}
              color={nodeColor}
            />
          )
        })
      )}
    </group>
  )
}

function ConnectionBeam({
  start,
  end,
  color
}: {
  start: [number, number, number]
  end: [number, number, number]
  color: string
}) {
  const lineObj = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([...start, ...end])
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3,
    })
    return new THREE.Line(geometry, material)
  }, [start, end, color])

  return <primitive object={lineObj} />
}

// Data packets moving between layers
function DataPackets() {
  const ref = useRef<THREE.Points>(null)
  const { resolvedTheme } = useTheme()

  const count = 30
  const { positions, velocities, layers } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count)
    const layers = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 1.5 + Math.random() * 0.5
      const layer = Math.floor(Math.random() * 4)

      positions[i * 3] = Math.cos(angle) * radius
      positions[i * 3 + 1] = (layer - 1.5) * 1.2
      positions[i * 3 + 2] = Math.sin(angle) * radius

      velocities[i] = 0.01 + Math.random() * 0.02
      layers[i] = layer
    }
    return { positions, velocities, layers }
  }, [])

  useFrame(() => {
    if (ref.current) {
      const pos = ref.current.geometry.attributes.position.array as Float32Array

      for (let i = 0; i < count; i++) {
        // Move up between layers
        pos[i * 3 + 1] += velocities[i]

        // Reset when reaching top
        if (pos[i * 3 + 1] > 2) {
          const angle = Math.random() * Math.PI * 2
          const radius = 1.5 + Math.random() * 0.5
          pos[i * 3] = Math.cos(angle) * radius
          pos[i * 3 + 1] = -2
          pos[i * 3 + 2] = Math.sin(angle) * radius
        }
      }

      ref.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const color = resolvedTheme === 'dark' ? '#c4b5fd' : '#a78bfa'

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.06}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Central core for Jane's graphic
function CloudCore() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05)
    }
  })

  const color = resolvedTheme === 'dark' ? '#8b5cf6' : '#7c3aed'

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}

export function JaneGraphic() {
  return (
    <div className="w-full h-72 relative">
      <Canvas
        camera={{ position: [3, 2, 4], fov: 50 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={0.8} />
        <CloudLayers />
        <DataPackets />
        <CloudCore />
      </Canvas>
    </div>
  )
}
