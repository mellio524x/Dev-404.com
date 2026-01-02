import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react'

export default function ComicReader({ comic }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSpread, setCurrentSpread] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: typeof window !== 'undefined' ? window.innerWidth : 0, height: typeof window !== 'undefined' ? window.innerHeight : 0 })
  const fullscreenRef = useRef(null)
  const totalPages = comic.totalPages
  const totalSpreads = Math.ceil((totalPages + 1) / 2) // +1 for cover

  // Detect window size changes
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive values based on screen size
  const isMobile = windowSize.width < 768
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024
  const headerSize = isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
  const buttonSize = isMobile ? 'text-xs px-2 py-1' : 'text-sm px-3 py-1'
  const iconSize = isMobile ? 'w-4 h-4' : 'w-5 h-5'
  const padding = isMobile ? 'p-2' : isTablet ? 'p-3' : 'p-4'

  const getPages = (spreadIndex) => {
    if (spreadIndex === 0) {
      return { leftPage: 'Slide1', rightPage: null }
    }
    const leftPageNum = spreadIndex * 2
    const rightPageNum = leftPageNum + 1
    return {
      leftPage: `Slide${leftPageNum}`,
      rightPage: rightPageNum <= totalPages + 1 ? `Slide${rightPageNum}` : null,
    }
  }

  const handleFullscreen = async () => {
    try {
      if (!isFullscreen) {
        await fullscreenRef.current?.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const handleNext = () => {
    if (currentSpread < totalSpreads - 1) {
      setCurrentSpread(currentSpread + 1)
    }
  }

  const handlePrev = () => {
    if (currentSpread > 0) {
      setCurrentSpread(currentSpread - 1)
    }
  }

  const pages = getPages(currentSpread)

  return (
    <div ref={fullscreenRef} className={`w-full ${isFullscreen ? `fixed inset-0 bg-deep-black z-50 flex flex-col` : ''}`}>
      {/* Cover / Closed State */}
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group"
          >
            <div className="relative max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <img
                src={`/images/comics/${comic.folder}/Slide1.jpg`}
                alt={comic.title}
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-center"
                >
                  <p className="text-white font-display text-xl drop-shadow-lg">Click to Read</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Open Book View */
          <motion.div
            key="open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* Header */}
            <div className={`flex items-center justify-between px-2 md:px-4 ${isFullscreen ? 'py-2 mb-1' : 'mb-2 md:mb-3'}`}>
              <h2 className={`font-display text-lg md:text-2xl text-neon-cyan ${headerSize}`}>{comic.title}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFullscreen}
                  className="p-2 hover:bg-neon-cyan/20 rounded-lg transition-colors"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-6 h-6 text-neon-cyan" />
                  ) : (
                    <Maximize2 className="w-6 h-6 text-neon-cyan" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setCurrentSpread(0)
                    if (isFullscreen) {
                      document.exitFullscreen()
                    }
                  }}
                  className="p-2 hover:bg-neon-cyan/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-neon-cyan" />
                </button>
              </div>
            </div>

            {/* Book Spread */}
            <div className={`bg-deep-black border-2 border-neon-cyan/40 rounded-lg flex items-center justify-center ${isFullscreen ? 'h-[calc(100vh-130px)] mx-2 md:mx-4 p-4 mb-2' : 'p-4 mb-4 flex-1'}`}>
              <div className={`grid gap-2 md:gap-4 ${pages.rightPage ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 max-w-xs mx-auto'} w-full h-full`}>
                {/* Left Page */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`left-${currentSpread}`}
                    initial={{ opacity: 0, x: -30, rotateY: -25 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -30, rotateY: -25 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 60, damping: 15 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col min-h-0"
                  >
                    <img
                      src={`/images/comics/${comic.folder}/${pages.leftPage}.jpg`}
                      alt={`Page ${currentSpread === 0 ? 'Cover' : currentSpread * 2}`}
                      className="w-auto h-auto max-h-[calc(100vh-200px)] max-w-full object-contain"
                    />
                    <div className={`bg-navy/80 text-center font-mono text-xs text-text-muted ${isFullscreen ? 'p-1' : 'p-2'}`}>
                      {currentSpread === 0 ? 'Cover' : `Page ${currentSpread * 2}`}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Page */}
                {pages.rightPage && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`right-${currentSpread}`}
                      initial={{ opacity: 0, x: 30, rotateY: 25 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      exit={{ opacity: 0, x: 30, rotateY: 25 }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 60, damping: 15 }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col min-h-0"
                    >
                      <img
                        src={`/images/comics/${comic.folder}/${pages.rightPage}.jpg`}
                        alt={`Page ${currentSpread * 2 + 1}`}
                        className="w-auto h-auto max-h-[calc(100vh-200px)] max-w-full object-contain"
                      />
                      <div className={`bg-navy/80 text-center font-mono text-xs text-text-muted ${isFullscreen ? 'p-1' : 'p-2'}`}>
                        Page {currentSpread * 2}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* Navigation */}
            <div className={`flex items-center justify-between gap-2 px-2 md:px-4 ${isFullscreen ? 'py-2' : 'py-1'} flex-wrap`}>
              <button
                onClick={handlePrev}
                disabled={currentSpread === 0}
                className={`flex items-center gap-1 px-2 md:px-3 py-1 rounded-lg font-mono text-xs md:text-sm transition-all ${
                  currentSpread === 0
                    ? 'bg-navy/30 text-text-muted cursor-not-allowed'
                    : 'bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/40'
                }`}
              >
                <ChevronLeft className={`w-4 h-4 md:${iconSize}`} />
                <span className={isMobile ? 'hidden' : ''}>Previous</span>
              </button>

              <div className="text-center flex-shrink-0">
                <p className={`font-mono text-neon-cyan text-xs md:text-sm ${isFullscreen ? 'mb-0' : 'mb-1'}`}>
                  {currentSpread + 1}/{totalSpreads}
                </p>
              </div>

              <button
                onClick={handleNext}
                disabled={currentSpread === totalSpreads - 1}
                className={`flex items-center gap-1 px-2 md:px-3 py-1 rounded-lg font-mono text-xs md:text-sm transition-all ${
                  currentSpread === totalSpreads - 1
                    ? 'bg-navy/30 text-text-muted cursor-not-allowed'
                    : 'bg-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan/40'
                }`}
              >
                <span className={isMobile ? 'hidden' : ''}>Next</span>
                <ChevronRight className={`w-4 h-4 md:${iconSize}`} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
