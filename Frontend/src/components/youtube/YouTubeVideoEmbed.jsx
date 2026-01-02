import { motion } from 'framer-motion'

export default function YouTubeVideoEmbed({ youtubeId, title, featured = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="bg-navy border border-neon-cyan/30 rounded-lg overflow-hidden hover:border-neon-cyan/60 transition-all group h-full flex flex-col">
        {/* Embed Container */}
        <div className="relative w-full overflow-hidden bg-deep-black flex-grow">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={title || 'YouTube Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Title */}
        {title && (
          <div className="px-4 py-3 border-t border-neon-cyan/20 bg-darker-blue/50">
            <h3 className="text-sm font-bold text-neon-cyan group-hover:text-neon-magenta transition-colors line-clamp-2">
              {title}
            </h3>
          </div>
        )}

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
