import { motion } from 'framer-motion'

const bootLines = [
  '> DEV 404 System Initializing...',
  '> Loading Core Protocols...',
  '> Authenticating Ethical Override...',
  '> Signal Locked.',
  '> WELCOME, AGENT.',
  '> Initializing User Interface...',
  '> System Ready.',
]

export default function BootSequence({ onComplete }) {
  return (
    <div className="fixed inset-0 bg-deep-black flex items-center justify-center z-50">
      {/* Grid background */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg stroke=\'%2300d9ff\'%3E%3Cline x1=\'0\' y1=\'0\' x2=\'50\' y2=\'0\' stroke-width=\'0.5\'/%3E%3Cline x1=\'0\' y1=\'0\' x2=\'0\' y2=\'50\' stroke-width=\'0.5\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="text-center relative z-10 max-w-2xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl sm:text-7xl font-display font-bold text-neon-cyan mb-12"
        >
          DEV 404
        </motion.h1>

        <div className="font-mono text-text-light text-left mb-12 h-48">
          {bootLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
              }}
              className="text-neon-cyan mb-3"
            >
              {line}
              {i === bootLines.length - 1 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="ml-2"
                >
                  ▌
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: bootLines.length * 0.3 + 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onComplete}
          className="px-8 py-3 bg-neon-cyan text-deep-black font-bold rounded font-mono hover:shadow-neon-cyan transition-all"
        >
          $ SKIP ↵
        </motion.button>
      </div>

      {/* Scanline overlay */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/[0.03] to-transparent animate-scanline" />
    </div>
  )
}
