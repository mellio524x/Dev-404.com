import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../../components/sections/PageHeader'

const videos = [
  { title: 'Heirloom Of Fire', youtubeId: 'szuMdzyHrWk', featured: true },
  { title: 'Lucid Lies', youtubeId: '4mbQvgkJ53s' },
  { title: 'Don\'t Let Me Close My Eyes', youtubeId: 'PTG5f5pc_tY' },
  { title: 'Breadcrumbs I The Static', youtubeId: 'VX8orrpoGVc' },
  { title: '28;06:42:12', youtubeId: 'nGgCw4msDG8' },
  { title: 'Hello, World!', youtubeId: '00-_LcpNSWM' },
  { title: 'Race Against Time', youtubeId: 'VqVkf0COL1w' },
  { title: 'Part Through Time', youtubeId: 'c7kxOS2wh9Q' },
  { title: 'Don\'t Blink', youtubeId: '9R3sYBrbsRY' },
  { title: 'Pull The Plug', youtubeId: '6uOrPmM0gBg' },
  { title: 'Us vs. Them', youtubeId: '4w_WfXl_pbE' },
  { title: 'Crimson Tide', youtubeId: 'r-0mfF3UUoQ' },
  { title: 'Cracks In The Pavement', youtubeId: 'tYfNWMa8MU0' },
  { title: 'The Marionette\'s Waltz', youtubeId: 'Yq0oQYQhIf4' },
  { title: 'J.Orlando', youtubeId: 'HaDqMIJ372o' },
  { title: 'One Man Army', youtubeId: 'SRaCKCnWpGM' },
  { title: 'Dial Up Diva', youtubeId: 'qmKcBN-lAqw' },
]

export default function Videos() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-deep-black py-20"
    >
      <PageHeader 
        title="Videos" 
        description="Footage recovered from the noise."
        icon="/images/dev-404-videos.png"
        iconType="image"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Player Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy/50 to-darker-blue/50 border-2 border-neon-cyan/40 rounded-lg p-6 mb-12 shadow-2xl"
          style={{
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05)',
          }}
        >
          {/* Terminal Header */}
          <div className="mb-4 pb-4 border-b border-neon-cyan/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-neon-cyan">$ SECURE_STREAM.exe</span>
              </div>
              <span className="font-mono text-xs text-text-muted">ACCESS_LEVEL: [████████░░] 80%</span>
            </div>
            <h3 className="font-display text-xl text-neon-cyan mt-2">
              {selectedVideo.title}
            </h3>
          </div>

          {/* Main Player */}
          <div className="relative w-full bg-deep-black rounded-lg overflow-hidden border border-neon-cyan/30">
            <div className="aspect-video relative">
              <iframe
                key={selectedVideo.youtubeId}
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-cyan/[0.03] to-transparent animate-scanline"></div>
          </div>

          {/* Footer Terminal */}
          <div className="mt-4 pt-4 border-t border-neon-cyan/30 font-mono text-xs text-neon-green space-y-1">
            <div>$ DECODING: {selectedVideo.title}</div>
            <div>$ STATUS: [██████████] STREAMING</div>
          </div>
        </motion.div>

        {/* Video Selector - Hacker Console Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-navy/30 border border-neon-magenta/40 rounded-lg p-6"
          style={{
            boxShadow: '0 0 30px rgba(255, 0, 110, 0.15), inset 0 0 15px rgba(255, 0, 110, 0.05)',
          }}
        >
          {/* Selector Header */}
          <div className="mb-6 pb-4 border-b border-neon-magenta/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-sm text-neon-magenta">➤</span>
              <span className="font-mono text-sm text-neon-magenta">SELECT_FOOTAGE</span>
            </div>
            <p className="text-text-muted text-sm">
              Found {videos.length} encrypted files • Click to decrypt
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {videos.map((video, idx) => (
              <motion.div key={video.youtubeId} className="flex flex-col">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedVideo(video)}
                  className={`group relative overflow-hidden rounded-lg transition-all flex-1 ${
                    selectedVideo.youtubeId === video.youtubeId
                      ? 'border-2 border-neon-magenta'
                      : 'border border-neon-cyan/30 hover:border-neon-magenta/60'
                  }`}
                >
                  {/* Video Thumbnail Image */}
                  <div className="aspect-video relative overflow-hidden bg-deep-black">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />

                    {/* Overlay on hover/selected */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm ${
                        selectedVideo.youtubeId === video.youtubeId
                          ? 'opacity-100 bg-neon-magenta/40'
                          : 'opacity-0 bg-black/40 group-hover:opacity-100'
                      }`}
                    >
                      <div className="text-4xl text-white drop-shadow-lg">
                        {selectedVideo.youtubeId === video.youtubeId ? '▶' : '▮▮'}
                      </div>
                    </motion.div>

                    {/* Video number */}
                    <div className="absolute top-1 right-1 text-xs font-mono text-neon-cyan bg-deep-black/70 px-2 py-1 rounded z-10">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          rgba(0, 217, 255, 0.5) 2px,
                          rgba(0, 217, 255, 0.5) 4px
                        )`,
                      }}
                    />
                  </div>

                  {/* Selection indicator */}
                  {selectedVideo.youtubeId === video.youtubeId && (
                    <motion.div
                      layoutId="selected"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan"
                      transition={{ type: 'spring', bounce: 0.2 }}
                    />
                  )}
                </motion.button>

                {/* Title Below Thumbnail */}
                <div className="mt-2 px-2">
                  <p className={`text-xs font-bold line-clamp-2 transition-colors ${
                    selectedVideo.youtubeId === video.youtubeId
                      ? 'text-neon-magenta'
                      : 'text-text-light'
                  }`}>
                    {video.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-6 pt-4 border-t border-neon-magenta/30 font-mono text-xs text-neon-magenta/70 space-y-1">
            <div>$ SELECTED: {selectedVideo.title}</div>
            <div>$ INDEX: [{videos.indexOf(selectedVideo)}/{videos.length}]</div>
            <div className="text-neon-cyan/50">$ HINT: Hover for full titles | Click to select</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
