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

        {/* Follow Us */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-xs text-charcoal-300">Follow us</span>
          <a
            href="https://www.instagram.com/anurenusworld?igsh=MTlvNTJyOTBmaDByMA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-300 hover:text-gold-400 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-charcoal-500 to-transparent mx-auto mb-6"></div>

        {/* Made with love */}
        <p className="text-xs text-charcoal-400 flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for a beautiful beginning
        </p>
        <p className="text-xs text-charcoal-400 flex items-center justify-center gap-1.5 mt-1">
          Designed & Developed by Anurag
          <a
            href="https://www.instagram.com/anuragarwalkar?igsh=c2J6dGM5NHcybWtv&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a
            href="https://github.com/anuragarwalkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/anuragarwalkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-gold-400 transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
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
