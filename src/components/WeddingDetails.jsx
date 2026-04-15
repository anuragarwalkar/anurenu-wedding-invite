import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock } from 'lucide-react'

function WeddingDetails() {
  return (
    <section className="relative py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3">
          With Divine Blessings
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3">
          The Ceremony
        </h2>
        <div className="ornament-divider text-gold-400 mb-8">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
          </svg>
        </div>

        <p className="font-serif text-lg sm:text-xl text-charcoal-400 italic mb-10 max-w-xl mx-auto leading-relaxed">
          We joyfully invite you to witness and bless the sacred union of
        </p>

        {/* Names */}
        <div className="space-y-2 mb-12">
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal-700 tracking-wide">
            Anurag Rajendra Arwalkar
          </h3>
          <p className="font-heading text-2xl sm:text-3xl text-gold-500">&</p>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal-700 tracking-wide">
            Renuka Ganesh Rajguru
          </h3>
        </div>

        {/* Event Details Card */}
        <div className="relative bg-ivory-100 border border-ivory-400/50 rounded-sm p-8 sm:p-12 max-w-lg mx-auto">
          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-400/40"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold-400/40"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold-400/40"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-400/40"></div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-gold-500" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 font-medium">Date</p>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-medium text-charcoal-700">
                Friday, May 8, 2026
              </p>
            </div>

            <div className="w-16 h-px bg-gold-300/50 mx-auto"></div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 font-medium">Auspicious Time</p>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-semibold text-gold-500">
                11:18 AM
              </p>
            </div>

            <div className="w-16 h-px bg-gold-300/50 mx-auto"></div>

            <div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gold-500" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal-400 font-medium">Venue</p>
              </div>
              <p className="font-serif text-xl sm:text-2xl font-medium text-charcoal-700 mb-5">
                Maharaja Banquet
              </p>
              
              <a
                href="https://share.google/GzJojPmFiD5TPnm9m"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-charcoal-700 text-charcoal-700 text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal-700 hover:text-white transition-all duration-300"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <p className="font-serif text-base sm:text-lg text-charcoal-400 italic mt-10">
          Your presence will add to our joy and make our day even more special
        </p>
      </div>
    </section>
  )
}

export default WeddingDetails
