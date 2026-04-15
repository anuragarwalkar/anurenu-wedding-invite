import { motion } from 'framer-motion'

function Timeline() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-ivory-100">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Mark Your Calendar
        </motion.p>
        <motion.h2
          className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Event Timeline
        </motion.h2>
        <motion.div
          className="ornament-divider text-gold-400 mb-12"
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
          </svg>
        </motion.div>

        {/* Event Card */}
        <motion.div
          className="relative max-w-md mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Decorative vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-px h-6 bg-gradient-to-b from-transparent to-gold-400"></div>
          
          {/* Gold dot */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3 h-3 rounded-full bg-gold-500 ring-4 ring-ivory-100"></div>

          <div className="relative bg-white border border-ivory-400/50 p-8 sm:p-10 rounded-sm">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gold-400/30"></div>
            <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold-400/30"></div>
            <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold-400/30"></div>
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gold-400/30"></div>

            {/* Diamond icon */}
            <div className="mb-4">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="mx-auto text-gold-500">
                <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" fill="currentColor" />
              </svg>
            </div>

            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-semibold mb-2">
              11:18 AM
            </p>
            <h3 className="font-heading text-3xl sm:text-4xl text-charcoal-700 mb-2">
              Wedding Ceremony
            </h3>
            <p className="font-serif text-lg text-charcoal-500 mb-1">
              May 8, 2026
            </p>
            <p className="text-sm text-charcoal-400 max-w-xs mx-auto">
              Join us as we exchange vows and begin our journey together
            </p>
          </div>

          {/* Decorative vertical line bottom */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-px h-6 bg-gradient-to-b from-gold-400 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
