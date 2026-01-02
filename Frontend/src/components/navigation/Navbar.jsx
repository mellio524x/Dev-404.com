import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Music', path: '/music' },
  { label: 'Videos', path: '/videos' },
  { label: 'Comics', path: '/comics' },
  { label: 'Movies', path: '/movies' },
  { label: 'Series', path: '/series' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/80 backdrop-blur-md border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-magenta">
              DEV 404
            </span>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-1"
          >
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded font-mono text-sm font-medium transition-all relative group ${
                    isActive(item.path)
                      ? 'text-neon-cyan'
                      : 'text-text-light hover:text-neon-cyan'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute inset-0 bg-neon-cyan/10 rounded -z-10"
                      layoutId="navbar-indicator"
                      transition={{ type: 'spring', bounce: 0.2 }}
                    />
                  )}
                  <span
                    className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                    }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon-cyan hover:text-neon-magenta transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded font-mono text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-neon-cyan bg-neon-cyan/10'
                      : 'text-text-light hover:text-neon-cyan'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
