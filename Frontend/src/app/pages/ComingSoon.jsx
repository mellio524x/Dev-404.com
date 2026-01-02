import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageHeader from '../../components/sections/PageHeader'

const loreText = {
  Comics: 'The stories exist. They\'re just encrypted right now. Pending decryption...',
  Movies: 'Reality is being rewritten. Check back when the signal is clear.',
  Series: 'The narrative continues beyond the code. Patience, agent.',
}

export default function ComingSoon({ section, iconImage }) {
  const [loadingText, setLoadingText] = useState('Loading content...')
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText('Content being decrypted...')
    }, 30000) // 30 seconds (half of 60)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-deep-black py-20"
    >
      <PageHeader 
        title={section} 
        description={loreText[section] || 'Coming soon...'}
        icon={iconImage || "◊"}
        iconType={iconImage ? "image" : "emoji"}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-neon-purple/10 to-neon-magenta/10 border border-neon-purple/30 rounded-lg p-12 text-center backdrop-blur-sm"
        >
          <div className="text-6xl mb-6">⚡</div>
          <h2 className="text-3xl font-bold text-neon-cyan mb-4">
            [STATUS: ENCRYPTED]
          </h2>
          <p className="text-text-light mb-8 text-lg">
            {loreText[section]}
          </p>
          
          <div className="mt-12 pt-8 border-t border-neon-purple/20">
            <p className="text-text-muted mb-6 font-mono text-sm">PLEASE WAIT • COMING SOON</p>
            
            {/* Loading Bar */}
            <div className="w-full max-w-md mx-auto">
              <div className="h-3 bg-navy/50 border border-neon-cyan/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta"
                  initial={{ width: '0%' }}
                  animate={{ width: '50%' }}
                  transition={{
                    duration: 30,
                    ease: 'linear',
                  }}
                  style={{
                    boxShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
                  }}
                />
              </div>
              <p className="text-neon-cyan text-xs font-mono mt-3">
                {loadingText}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
