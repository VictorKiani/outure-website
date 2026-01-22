'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

function ParticleField() {
  const ref = useRef<THREE.Points>(null)
  const { resolvedTheme } = useTheme()
  const { mouse } = useThree()

  const count = 2000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.03

      // Mouse interaction
      ref.current.rotation.x += mouse.y * 0.01
      ref.current.rotation.y += mouse.x * 0.01
    }
  })

  const color = resolvedTheme === 'dark' ? '#3b82f6' : '#2563eb'

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  const color = resolvedTheme === 'dark' ? '#a78bfa' : '#8b5cf6'

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <icosahedronGeometry args={[0.5, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  )
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { resolvedTheme } = useTheme()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.8) * 0.4
    }
  })

  const color = resolvedTheme === 'dark' ? '#3b82f6' : '#2563eb'

  return (
    <mesh ref={meshRef} position={[-2.5, 0.5, -1]}>
      <torusGeometry args={[0.4, 0.15, 16, 32]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingGeometry />
        <FloatingTorus />
      </Canvas>
    </div>
  )
}
