import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function SectionCard({ id, title, link, description, icon }) {
  const navigate = useNavigate()

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(link)}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-gradient-to-br from-navy/50 to-darker-blue/50 border border-neon-cyan/30 rounded-lg p-6 overflow-hidden transition-all hover:border-neon-cyan/60 hover:shadow-neon-cyan/20 hover:shadow-lg">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Glitch effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: [0, 0.1, 0] }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.2), transparent)',
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="text-4xl mb-4 font-display group-hover:animate-pulse">
            {icon}
          </div>
          <h3 className="text-xl font-bold font-display text-neon-cyan mb-2 group-hover:text-neon-magenta transition-colors">
            {title}
          </h3>
          <p className="text-text-muted text-sm leading-relaxed">
            {description}
          </p>

          {/* Interactive element */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 text-neon-cyan text-sm font-mono"
          >
            $ enter ↵
          </motion.div>
        </div>

        {/* Border animation on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-neon-cyan/0 rounded-lg group-hover:border-neon-cyan/30"
          whileHover={{
            borderColor: 'rgba(0, 217, 255, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
