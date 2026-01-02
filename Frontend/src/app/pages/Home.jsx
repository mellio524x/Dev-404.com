import { motion } from 'framer-motion'
import SectionCard from '../../components/cards/SectionCard'
import AnimatedHeading from '../../components/effects/AnimatedHeading'

const pythonCodeSnippets = [
  'def breach_system():\n  access_granted = True\n  return decrypt(signal)',
  'class Agent:\n  def __init__(self):\n    self.mission = "404"',
  'while True:\n  signal = capture()\n  if signal.valid():\n    execute()',
  'import ethics\nfrom justice import Truth\ndecode(reality)',
  'data = encrypt(message)\nif authorized:\n  transmit(data)',
  'for path in universe:\n  if path == DEV404:\n    enter()',
]

const sections = [
  {
    id: 'music',
    title: 'Music',
    link: '/music',
    description: 'Soundtrack for the system breach.',
    icon: '♪',
  },
  {
    id: 'videos',
    title: 'Videos',
    link: '/videos',
    description: 'Footage recovered from the noise.',
    icon: '▶',
  },
  {
    id: 'comics',
    title: 'Comics',
    link: '/comics',
    description: 'Encrypted. Pending decryption.',
    icon: '◊',
  },
  {
    id: 'movies',
    title: 'Movies',
    link: '/movies',
    description: 'Encrypted. Pending decryption.',
    icon: '▬',
  },
  {
    id: 'series',
    title: 'Series',
    link: '/series',
    description: 'Encrypted. Pending decryption.',
    icon: '∞',
  },
]

const taglines = [
  'Compiling Justice…',
  'Tracing the Signal…',
  'Truth Detected. Rendering…',
  'Decoding Reality…',
  'System Override Initiated…',
]

export default function Home() {
  const currentTagline = taglines[Math.floor(Math.random() * taglines.length)]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-deep-black overflow-hidden relative">
      {/* Cyberpunk Backdrop */}
      <div 
        className="fixed inset-0 bg-contain bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: 'url(/images/cyberpunk-backdrop.jpg)',
          backgroundAttachment: 'fixed',
          zIndex: 0,
        }}
      />

      {/* Dark Overlay for Readability */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none" style={{ zIndex: 1 }} />

      {/* Grid background */}
      <div 
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg stroke=\'%2300d9ff\'%3E%3Cline x1=\'0\' y1=\'0\' x2=\'50\' y2=\'0\' stroke-width=\'0.5\'/%3E%3Cline x1=\'0\' y1=\'0\' x2=\'0\' y2=\'50\' stroke-width=\'0.5\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '50px 50px',
          zIndex: 2,
        }}
      />

      {/* Flashing Python Code Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10" style={{ zIndex: 3 }}>
        {pythonCodeSnippets.map((code, idx) => (
          <motion.div
            key={idx}
            className="absolute font-mono text-xs text-neon-cyan/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{
              duration: 4,
              delay: idx * 0.6,
              repeat: Infinity,
            }}
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              whiteSpace: 'pre',
              textShadow: '0 0 10px rgba(0, 217, 255, 0.5)',
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple">
              DEV 404
            </h1>
            <p className="font-mono text-neon-cyan text-lg sm:text-xl animate-pulse">
              $ {currentTagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-3xl mx-auto text-left space-y-6"
          >
            {/* Welcome Header */}
            <div className="text-center pb-6 border-b border-neon-cyan/20">
              <h2 className="font-display text-3xl sm:text-4xl text-neon-cyan mb-2">
                Welcome to DEV-404.com
              </h2>
              <p className="font-mono text-neon-magenta text-lg italic">
                Where code builds worlds… and exposes monsters.
              </p>
            </div>

            {/* About DEV 404 */}
            <div className="space-y-4">
              <p className="text-text-light leading-relaxed">
                <span className="font-display text-neon-cyan">DEV 404</span> is a digital engineer turned techno-detective. He crafts realities with Java, Python, C++, and the full arsenal of modern programming.
              </p>
              <p className="text-text-light leading-relaxed">
                He designs engines, systems, and tools powered by LLMs and agents—not to "do everything", but to find what others can't see: <span className="text-neon-green">patterns, contradictions, hidden signals.</span>
              </p>
            </div>

            {/* The Enemy */}
            <div className="bg-neon-magenta/5 border-l-4 border-neon-magenta pl-4 py-4 space-y-3">
              <p className="text-text-light font-display text-lg text-neon-magenta">
                In this universe, the enemy isn't a person.
              </p>
              <p className="text-text-light leading-relaxed">
                It's <span className="font-display text-neon-cyan text-lg">the Signal.</span>
              </p>
              <p className="text-text-light leading-relaxed">
                A creeping force that rewrites truth, corrupts memory, and turns noise into control.
              </p>
            </div>

            {/* The Fight */}
            <div className="bg-neon-green/5 border-l-4 border-neon-green pl-4 py-4">
              <p className="text-text-light leading-relaxed mb-2">
                <span className="font-display text-neon-cyan">DEV</span> doesn't fight with fists.
              </p>
              <p className="font-display text-xl text-neon-green">
                He fights with logic.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Portal Cards Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-20 pt-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          >
            {sections.map((section) => (
              <motion.div key={section.id} variants={itemVariants}>
                <SectionCard {...section} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom scanline effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.03] to-transparent animate-scanline" />
        </div>
      </div>
    </div>
  )
}
