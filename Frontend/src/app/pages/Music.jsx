import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../../components/sections/PageHeader'

const playlists = [
  { title: 'Hello, World!', playlistId: 'OLAK5uy_na3MhE_Q3ushYs7n20lXVeBEf09pY69qo', featured: true, gradient: 'from-cyan-500 via-blue-500 to-purple-600', image: '/images/dev-404-hello-world.png' },
  { title: 'BROKEN', playlistId: 'OLAK5uy_nXeKfg375hfgChn3aMNG9Kd49g1U8YL0g', gradient: 'from-red-500 via-pink-500 to-orange-500', image: '/images/dev-404-broken.png' },
  { title: 'Fractured Horizons', playlistId: 'OLAK5uy_mMAopvO3gpyJ5M143_JGK7WGzctI-vm2M', gradient: 'from-green-500 via-emerald-500 to-teal-600', image: '/images/dev-404-fractured-horizons.png' },
  { title: 'Movies Lies War', playlistId: 'OLAK5uy_lMK0hBiLJV0G1QpwIdeheOM78QL19TI4Y', gradient: 'from-purple-600 via-fuchsia-500 to-pink-500', image: '/images/dev-404-mlw.png' },
  { title: 'Eviction Notice', playlistId: 'OLAK5uy_lMLAx0P1MstSztk7LLSNmQCwphlUyN6R0', gradient: 'from-yellow-500 via-orange-500 to-red-600', image: '/images/dev-404-eviction-notice.png' },
]

export default function Music() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-deep-black py-20"
    >
      <PageHeader 
        title="Music" 
        description="Soundtracks from the void."
        icon="/images/dev-404-character.png"
        iconType="image"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Player Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-navy/50 to-darker-blue/50 border-2 border-neon-green/40 rounded-lg p-6 mb-12 shadow-2xl"
          style={{
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.2), inset 0 0 20px rgba(0, 255, 65, 0.05)',
          }}
        >
          {/* Terminal Header */}
          <div className="mb-4 pb-4 border-b border-neon-green/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-neon-green">$ AUDIO_VAULT.exe</span>
              </div>
              <span className="font-mono text-xs text-text-muted">SIGNAL_STRENGTH: [██████████] 100%</span>
            </div>
            <h3 className="font-display text-xl text-neon-green mt-2">
              ▶ {selectedPlaylist.title}
            </h3>
          </div>

          {/* Main Player */}
          <div className="relative w-full bg-deep-black rounded-lg overflow-hidden border border-neon-green/30">
            <div className="aspect-video relative">
              <iframe
                key={selectedPlaylist.playlistId}
                src={`https://www.youtube.com/embed/videoseries?list=${selectedPlaylist.playlistId}&autoplay=1`}
                title={selectedPlaylist.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-neon-green/[0.03] to-transparent animate-scanline"></div>
          </div>

          {/* Footer Terminal */}
          <div className="mt-4 pt-4 border-t border-neon-green/30 font-mono text-xs text-neon-green space-y-1">
            <div>$ BUFFERING: {selectedPlaylist.title}</div>
            <div>$ QUALITY: [██████████] 320kbps</div>
          </div>
        </motion.div>

        {/* Playlist Selector - Audio Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-navy/30 border border-neon-purple/40 rounded-lg p-6"
          style={{
            boxShadow: '0 0 30px rgba(180, 0, 255, 0.15), inset 0 0 15px rgba(180, 0, 255, 0.05)',
          }}
        >
          {/* Selector Header */}
          <div className="mb-6 pb-4 border-b border-neon-purple/30">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-sm text-neon-purple">♪♪</span>
              <span className="font-mono text-sm text-neon-purple">PLAYLIST_DATABASE</span>
            </div>
            <p className="text-text-muted text-sm">
              {playlists.length} albums found • Click to activate stream
            </p>
          </div>

          {/* Playlist Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {playlists.map((playlist, idx) => (
              <motion.div key={playlist.playlistId} className="flex flex-col">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedPlaylist(playlist)}
                  className={`group relative overflow-hidden rounded-lg transition-all flex-1 ${
                    selectedPlaylist.playlistId === playlist.playlistId
                      ? 'border-2 border-neon-purple'
                      : 'border border-neon-green/30 hover:border-neon-purple/60'
                  }`}
                >
                  {/* Playlist Thumbnail Image */}
                  <div className="aspect-square relative overflow-hidden bg-deep-black">
                    <img 
                      src={playlist.image} 
                      alt={playlist.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Glow effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-transparent to-transparent"></div>

                    {/* Overlay on hover/selected */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute inset-0 flex items-center justify-center backdrop-blur-sm ${
                        selectedPlaylist.playlistId === playlist.playlistId
                          ? 'opacity-100 bg-neon-purple/40'
                          : 'opacity-0 bg-black/40 group-hover:opacity-100'
                      }`}
                    >
                      <div className="text-3xl text-white drop-shadow-lg">
                        {selectedPlaylist.playlistId === playlist.playlistId ? '▶▶' : '♪'}
                      </div>
                    </motion.div>

                    {/* Album number */}
                    <div className="absolute top-1 right-1 text-xs font-mono text-neon-purple bg-deep-black/70 px-2 py-1 rounded z-10">
                      #{String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Neon glow lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          rgba(180, 0, 255, 0.5) 2px,
                          rgba(180, 0, 255, 0.5) 4px
                        )`,
                      }}
                    />
                  </div>

                  {/* Selection indicator */}
                  {selectedPlaylist.playlistId === playlist.playlistId && (
                    <motion.div
                      layoutId="selected-playlist"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-green via-neon-purple to-neon-green"
                      transition={{ type: 'spring', bounce: 0.2 }}
                    />
                  )}
                </motion.button>

                {/* Title Below Thumbnail */}
                <div className="mt-2 px-2">
                  <p className={`text-xs font-bold line-clamp-2 transition-colors ${
                    selectedPlaylist.playlistId === playlist.playlistId
                      ? 'text-neon-purple'
                      : 'text-text-light'
                  }`}>
                    {playlist.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <div className="mt-6 pt-4 border-t border-neon-purple/30 font-mono text-xs text-neon-purple/70 space-y-1">
            <div>$ ACTIVE_PLAYLIST: {selectedPlaylist.title}</div>
            <div>$ INDEX: [{playlists.indexOf(selectedPlaylist)}/{playlists.length - 1}]</div>
            <div className="text-neon-green/50">$ TIP: Click album art to queue • Hover for details</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
