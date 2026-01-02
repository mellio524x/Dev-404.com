import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function PageHeader({ title, description, icon, iconType = 'emoji', backgroundVideo }) {
  const hasBackground = backgroundVideo || iconType === 'image'
  const videoRef = useRef(null)
  
  useEffect(() => {
    if (videoRef.current) {
      console.log('Video element:', videoRef.current)
      console.log('Video src:', backgroundVideo)
      videoRef.current.play().catch(err => console.error('Video play error:', err))
    }
  }, [backgroundVideo])
  
  return (
    <div 
      className={`relative w-full border-b border-neon-cyan/20 overflow-hidden ${
        hasBackground ? 'h-[220px]' : 'pt-10 pb-4'
      }`}
    >
      {/* Video Background Layer */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-auto w-auto max-w-none"
            style={{ height: '500px' }}
            onLoadedData={() => console.log('Video loaded successfully')}
            onError={(e) => console.error('Video error:', e)}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      )}

      {/* Image Background Layer */}
      {!backgroundVideo && iconType === 'image' && icon && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src={icon}
            alt={title}
            className="h-auto w-auto max-w-none"
            style={{ height: '700px', transform: 'translateY(15%)' }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}
      
      {/* Content Layer */}
      <div className={`relative z-10 px-4 sm:px-6 lg:px-8 text-center ${
        hasBackground ? 'py-8 flex items-center justify-center h-[220px]' : ''
      }`}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {iconType === 'emoji' && icon && (
            <div className="text-6xl mb-6 font-display">
              <span>{icon}</span>
            </div>
          )}
          <h1 className="text-5xl sm:text-6xl font-bold font-display mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple">
            {title}
          </h1>
          {description && (
            <p className="text-text-light text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  )
}
