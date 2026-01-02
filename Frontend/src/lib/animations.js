// Animation presets for reuse across the site
// Import and use: const vars = slideIn(0.3)

export const slideIn = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay },
  },
})

export const fadeIn = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration, delay },
  },
})

export const slideInLeft = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay },
  },
})

export const slideInRight = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration, delay },
  },
})

export const scaleIn = (duration = 0.6, delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay },
  },
})

export const staggerContainer = (delay = 0, stagger = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
})

export const pulseGlow = {
  animate: {
    opacity: [1, 0.7, 1],
    textShadow: [
      '0 0 10px rgba(0, 217, 255, 0.5)',
      '0 0 20px rgba(0, 217, 255, 0.8)',
      '0 0 10px rgba(0, 217, 255, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const glitchHover = {
  whileHover: {
    x: [0, -2, 2, -2, 0],
    transition: { duration: 0.3 },
  },
}

export const neonGlow = (color = 'cyan') => {
  const colors = {
    cyan: 'rgba(0, 217, 255, 0.5)',
    magenta: 'rgba(255, 0, 110, 0.5)',
    green: 'rgba(0, 255, 65, 0.5)',
    purple: 'rgba(180, 0, 255, 0.5)',
  }
  
  return {
    whileHover: {
      boxShadow: `0 0 20px ${colors[color]}`,
      transition: { duration: 0.3 },
    },
  }
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.5 },
}
