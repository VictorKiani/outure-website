import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'OUTURE - Business Analysis, Strategy & AI Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, #000 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.05em',
            marginBottom: 20,
          }}
        >
          OUTURE
        </div>

        {/* Tagline */}
        <div
          style={{
            display: 'flex',
            fontSize: 36,
            color: '#a1a1aa',
            marginBottom: 40,
          }}
        >
          Business Analysis • Strategy • AI Solutions
        </div>

        {/* Founder */}
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#71717a',
          }}
        >
          Founded by Victor Kiani | New York City
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 100,
            height: 4,
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            borderRadius: 2,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 100,
            height: 4,
            background: 'linear-gradient(90deg, #ec4899, #22c55e)',
            borderRadius: 2,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
