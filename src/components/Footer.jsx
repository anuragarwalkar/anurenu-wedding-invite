import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-charcoal-800">
      <div className="max-w-3xl mx-auto text-center">
        {/* Monogram */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 150 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold-400/40">
            <span className="font-heading text-2xl text-gold-400">A & R</span>
          </div>
        </motion.div>

        {/* Names */}
        <motion.p
          className="font-heading text-3xl text-white mb-2"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Anurag & Renuka
        </motion.p>

        {/* Full Names */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-xs text-charcoal-200 mb-4">
          <span>Anurag Rajendra Arwalkar</span>
          <span className="hidden sm:inline text-gold-400/50">&bull;</span>
          <span>Renuka Ganesh Rajguru</span>
        </div>

        {/* Date */}
        <motion.p
          className="font-serif text-sm text-gold-400 tracking-widest uppercase mb-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          May 8, 2026
        </motion.p>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-charcoal-500 to-transparent mx-auto mb-6"></div>

        {/* Made with love */}
        <p className="text-xs text-charcoal-400 flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for a beautiful beginning
        </p>

        {/* Copyright */}
        <p className="text-[10px] text-charcoal-500 mt-3">
          © 2026 &bull; All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
