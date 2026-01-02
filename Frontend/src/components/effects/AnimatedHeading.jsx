import { motion } from 'framer-motion'

export default function AnimatedHeading({ children, delay = 0 }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple"
    >
      {children}
    </motion.h1>
  )
}
