import { motion } from 'framer-motion'
import PageHeader from '../../components/sections/PageHeader'
import ComicReader from '../../components/comics/ComicReader'

export default function Comics() {
  const comics = [
    {
      id: 1,
      title: 'DEV 404 #1',
      folder: 'dev-404-01',
      totalPages: 18,
      description: 'The origin story begins...',
    },
    // Future comics
    // {
    //   id: 2,
    //   title: 'DEV 404 #2',
    //   folder: 'dev-404-02',
    //   totalPages: 20,
    //   description: 'Coming soon...',
    // },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  return (
    <div className="min-h-screen bg-deep-black pt-20 pb-12">
      {/* Scanline effect background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-scanlines opacity-5"></div>
      </div>

      <PageHeader
        title="COMIC_DATABASE.exe"
        description="Interactive sequential art archives"
        backgroundVideo="/videos/comics-bg.mp4"
      />

      <main className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Terminal Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-4 bg-navy/40 border border-neon-magenta/30 rounded-lg font-mono text-sm text-text-secondary"
        >
          <p className="text-neon-magenta">$ accessing comic_archive...</p>
          <p className="text-neon-green">&gt; loaded {comics.length} comic series</p>
          <p className="text-neon-cyan">&gt; total pages: {comics.reduce((sum, c) => sum + c.totalPages, 0) + comics.length}</p>
        </motion.div>

        {/* Comics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {comics.map((comic) => (
            <motion.div key={comic.id} variants={itemVariants} className="space-y-4">
              {/* Comic Header */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-neon-cyan"></div>
                <h2 className="font-display text-2xl text-neon-cyan">{comic.title}</h2>
                <span className="text-neon-magenta text-sm">
                  [{comic.totalPages} pages]
                </span>
              </div>

              {/* Comic Description */}
              <p className="text-text-secondary ml-4">{comic.description}</p>

              {/* Comic Reader */}
              <div className="ml-4">
                <ComicReader comic={comic} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 p-6 bg-navy/30 border-2 border-neon-yellow/30 rounded-lg text-center"
        >
          <p className="font-display text-neon-yellow text-lg mb-2">More Comics Coming</p>
          <p className="text-text-secondary">
            New installments of the DEV 404 saga are in production...
          </p>
        </motion.div>
      </main>
    </div>
  )
}
