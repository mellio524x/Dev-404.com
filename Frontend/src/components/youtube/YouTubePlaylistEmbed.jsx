import { motion } from 'framer-motion'

export default function YouTubePlaylistEmbed({ playlistId, title, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${featured ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className="bg-navy border border-neon-cyan/30 rounded-lg overflow-hidden hover:border-neon-cyan/60 transition-all group">
        {/* Title */}
        {title && (
          <div className="px-6 py-4 border-b border-neon-cyan/20 bg-darker-blue/50">
            <h3 className="text-lg font-bold text-neon-cyan group-hover:text-neon-magenta transition-colors">
              {title}
            </h3>
          </div>
        )}

        {/* Embed Container */}
        <div className="relative w-full overflow-hidden bg-deep-black">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
              title={title || 'YouTube Playlist'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-lg"
          style={{
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
          }}
        />
      </div>
    </motion.div>
  )
}
