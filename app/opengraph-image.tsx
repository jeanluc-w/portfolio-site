import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Jean-Luc Williams - Solutions Architect';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #020617, #0f172a)', // slate-950 to slate-900
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '4px solid rgba(16, 185, 129, 0.2)', // emerald-500 with opacity
            backgroundColor: 'rgba(2, 6, 23, 0.8)', // slate-950
            borderRadius: '24px',
            padding: '60px',
            width: '100%',
            height: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Top Badge */}
          <div
            style={{
              color: '#34d399', // emerald-400
              fontSize: 24,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 32,
              display: 'flex',
              fontFamily: 'monospace',
            }}
          >
            Solutions Architect | Cloud, Backend, & Data
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: 'white',
              marginBottom: 24,
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Jean-Luc Williams
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 36,
              color: '#94a3b8', // slate-400
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Secure Systems Engineering & Cognitive Design
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}