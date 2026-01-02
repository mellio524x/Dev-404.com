import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const navigate = useNavigate()
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  useEffect(() => {
    if (clickCount === 4) {
      setShowEasterEgg(true)
      setTimeout(() => {
        setShowEasterEgg(false)
        setClickCount(0)
      }, 3000)
    }
  }, [clickCount])

  return (
    <div className="min-h-screen bg-deep-black flex items-center justify-center px-4 relative overflow-hidden">
      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 
            className="text-8xl sm:text-9xl font-bold font-display text-neon-magenta mb-4 cursor-pointer hover:text-neon-cyan transition-colors"
            onClick={() => setClickCount(c => c + 1)}
          >
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-neon-cyan text-2xl font-mono mb-2">
            $ ERROR: Signal Lost
          </p>
          <p className="text-text-light text-lg mb-8">
            The page you're looking for doesn't exist in this dimension.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-neon-cyan text-deep-black font-bold rounded hover:shadow-neon-cyan transition-all"
          >
            Return to Hub
          </motion.button>
        </motion.div>
      </div>

      {/* Easter egg sparkles */}
      {showEasterEgg && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-2 h-2 bg-neon-cyan rounded-full"
              initial={{
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
              }}
              animate={{
                x: window.innerWidth / 2 + (Math.random() - 0.5) * 500,
                y: window.innerHeight / 2 + (Math.random() - 0.5) * 500,
                opacity: 0,
              }}
              transition={{
                duration: 1,
                ease: 'easeOut',
              }}
            />
          ))}
        </>
      )}

      {/* Background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg stroke=\'%2300d9ff\'%3E%3Cline x1=\'0\' y1=\'0\' x2=\'50\' y2=\'0\' stroke-width=\'0.5\'/%3E%3Cline x1=\'0\' y1=\'0\' x2=\'0\' y2=\'50\' stroke-width=\'0.5\'/%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '50px 50px',
          }}
        />
      </div>
    </div>
  )
}
