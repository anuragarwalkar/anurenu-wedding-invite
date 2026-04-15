import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import mainPhoto from '../assets/main.jpg'

function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-ivory-100">

      {/* ===== MOBILE LAYOUT (stacked: image top, content bottom) ===== */}
      <div className="lg:hidden relative min-h-screen flex flex-col">
        {/* Photo area - top 55% */}
        <div className="relative w-full h-[60vh] flex-shrink-0">
          <img
            src={mainPhoto}
            alt="Anurag & Renuka"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-ivory-100"></div>

          {/* "We Are Getting Married" on photo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-6 left-0 right-0 z-10 text-center"
          >
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/90 font-light">
              We Are Getting Married
            </p>
          </motion.div>
        </div>

        {/* Content area */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 -mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            <div className="space-y-0">
              <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-charcoal-700 uppercase">
                Anurag
              </h1>
              <p className="font-heading text-3xl sm:text-4xl text-gold-500">
                and
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-wide text-charcoal-700 uppercase">
                Renuka
              </h1>
            </div>

            <div className="ornament-divider text-gold-400">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
              </svg>
            </div>

            <div className="space-y-1">
              <p className="font-serif text-base tracking-widest text-charcoal-500 uppercase">
                Save the Date
              </p>
              <p className="font-serif text-5xl sm:text-6xl font-semibold text-charcoal-700">
                May <span className="text-gold-500">8</span>
              </p>
              <p className="text-xs text-charcoal-400 tracking-widest uppercase">
                Friday &bull; 2026 &bull; 11:18 AM
              </p>
            </div>
          </motion.div>

          {/* Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-6"
          >
            <div className="flex flex-col items-center gap-1 text-charcoal-400">
              <span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== DESKTOP LAYOUT (split: photo left, content right) ===== */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left - Photo */}
        <div className="relative w-1/2 min-h-screen">
          <img
            src={mainPhoto}
            alt="Anurag & Renuka"
            className="w-full h-full object-cover object-top"
          />
          {/* Soft fade on the right edge into ivory */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ivory-100 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Right - Content */}
        <div className="w-1/2 min-h-screen flex flex-col items-center justify-center px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-charcoal-400 font-light text-center">
              We Are Getting Married
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <div className="space-y-1">
              <h1 className="font-serif text-6xl xl:text-8xl font-light tracking-wide text-charcoal-700 uppercase">
                Anurag
              </h1>
              <p className="font-heading text-4xl xl:text-5xl text-gold-500 -my-1">
                and
              </p>
              <h1 className="font-serif text-6xl xl:text-8xl font-light tracking-wide text-charcoal-700 uppercase">
                Renuka
              </h1>
            </div>

            <div className="ornament-divider text-gold-400">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
              </svg>
            </div>

            <div className="space-y-1">
              <p className="font-serif text-xl xl:text-2xl font-light tracking-widest text-charcoal-500 uppercase">
                Save the Date
              </p>
              <p className="font-serif text-7xl xl:text-8xl font-semibold text-charcoal-700">
                May <span className="text-gold-500">8</span>
              </p>
              <p className="text-sm text-charcoal-400 tracking-widest uppercase">
                Friday &bull; 2026 &bull; 11:18 AM
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-12"
          >
            <div className="flex flex-col items-center gap-1 text-charcoal-400">
              <span className="text-[10px] tracking-[0.2em] uppercase font-light">Scroll</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
