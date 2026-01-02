import { motion } from 'framer-motion'
import { Youtube, Music2, Facebook, Twitter } from 'lucide-react'

const socialLinks = [
  {
    name: 'YouTube',
    url: 'https://youtube.com/@DEV_Music_404',
    icon: Youtube,
    color: 'hover:text-red-500',
    handle: '@DEV_Music_404'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/7lvmTahHl3ViENKZrWjsG4?si=uoxP-bxMQ_yQm_OsxkBBaQ',
    icon: Music2,
    color: 'hover:text-green-500',
    handle: 'DEV 404'
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/profile.php?id=61578195951086',
    icon: Facebook,
    color: 'hover:text-blue-500',
    handle: 'DEV 404'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/dev_40435715',
    icon: Twitter,
    color: 'hover:text-sky-400',
    handle: '@dev_40435715'
  }
]

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-cyan/20 bg-deep-black/90 backdrop-blur-md mt-20">
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-scanlines"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Links Section */}
        <div className="mb-8">
          <h3 className="font-display text-xl text-neon-cyan mb-6 text-center">
            [CONNECT_TO_NETWORK]
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col items-center p-4 rounded-lg border border-neon-cyan/20 bg-navy/20 transition-all ${social.color} hover:border-current hover:shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-8 h-8 mb-2 transition-transform group-hover:scale-110" />
                <span className="font-mono text-sm font-bold">{social.name}</span>
                <span className="font-mono text-xs text-text-muted mt-1">{social.handle}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 border-t border-neon-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted font-mono">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <span className="text-neon-cyan font-bold">DEV 404</span>
              <span className="hidden md:inline">•</span>
              <span>dev-404.com | devmusic404.com</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-neon-magenta">©</span>
              <span>{new Date().getFullYear()} DEV 404 Collective</span>
            </div>
          </div>
          
          {/* Terminal-style tagline */}
          <div className="mt-4 text-center">
            <p className="font-mono text-xs text-neon-green/60">
              $ echo "Code meets creativity. Reality meets fiction."
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
