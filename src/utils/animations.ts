import { type Variants } from 'framer-motion';

/**
 * Reusable Framer Motion animation presets
 * Strictly adhering to restrained, confident, and professional micro-interactions.
 * Avoids bouncy, chaotic, or distracting effects.
 */

// Subtle fade-up transition for section headers and cards
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Subtle opacity fade for overlays and background elements
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Parent container for staggered sequential reveals
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Child item inside a staggered container
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Card hover micro-interaction
export const cardHover = {
  rest: {
    y: 0,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    y: -2,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

// Mobile drawer slide and fade
export const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
