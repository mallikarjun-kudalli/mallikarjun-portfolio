/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#090a0f',
          subtle: '#0d1017',
        },
        surface: {
          DEFAULT: '#11141e',
          elevated: '#171b26',
          hover: '#1e2433',
          border: '#202738',
        },
        border: {
          hairline: 'rgba(255, 255, 255, 0.08)',
          subtle: 'rgba(255, 255, 255, 0.14)',
          accent: 'rgba(16, 185, 129, 0.35)',
        },
        content: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
          muted: '#64748b',
          dim: '#475569',
        },
        accent: {
          emerald: '#10b981',
          'emerald-light': '#34d399',
          'emerald-dark': '#059669',
          'emerald-subtle': 'rgba(16, 185, 129, 0.10)',
          cyan: '#06b6d4',
          'cyan-subtle': 'rgba(6, 182, 212, 0.10)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        'subtle-elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'accent-glow': '0 0 25px -5px rgba(16, 185, 129, 0.25)',
      },
    },
  },
  plugins: [],
}
