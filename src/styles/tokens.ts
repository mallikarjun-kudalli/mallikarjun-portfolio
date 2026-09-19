/**
 * Design Tokens
 * Single source of truth for design tokens used across the portfolio.
 * Aligned with the "Premium Technical Editorial" aesthetic.
 */

export const tokens = {
  colors: {
    canvas: {
      default: '#090a0f',
      subtle: '#0d1017',
    },
    surface: {
      default: '#11141e',
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
      emeraldLight: '#34d399',
      emeraldDark: '#059669',
      emeraldSubtle: 'rgba(16, 185, 129, 0.10)',
      cyan: '#06b6d4',
      cyanSubtle: 'rgba(6, 182, 212, 0.10)',
    },
  },
  typography: {
    fonts: {
      sans: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
    },
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  layout: {
    maxWidth: {
      content: '1120px', // max-w-6xl
      wide: '1280px',    // max-w-7xl
      prose: '680px',
    },
    headerHeight: '64px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    base: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '400ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type DesignTokens = typeof tokens;
