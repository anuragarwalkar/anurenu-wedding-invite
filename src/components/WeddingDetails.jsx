import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, CalendarPlus } from 'lucide-react'
import venueImage from '../assets/wedding-venue.png'
import venueMapThumbnail from '../assets/venu-map-thubnail.png'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' } }),
}

function WeddingDetails() {
  const handleAddToCalendar = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AnuRenu Wedding//EN',
      'BEGIN:VEVENT',
      'DTSTART;VALUE=DATE:20260508',
      'DTEND;VALUE=DATE:20260509',
      'SUMMARY:Anurag & Renuka Wedding',
      'DESCRIPTION:Wedding ceremony of Anurag & Renuka at Maharaja Banquet. Auspicious time: 11:18 AM',
      'LOCATION:Maharaja Banquet\\, Badlapur',
      'URL:https://maps.app.goo.gl/Mx7XnQwuZafKMmjFA',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'anurenu-wedding.ics'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          With Divine Blessings
        </motion.p>
        <motion.h2
          className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        >
          The Ceremony
        </motion.h2>
        <motion.div
          className="ornament-divider text-gold-400 mb-8"
          initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
          </svg>
        </motion.div>

        <motion.p
          className="font-serif text-lg sm:text-xl text-charcoal-400 italic mb-10 max-w-xl mx-auto leading-relaxed"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
        >
          We joyfully invite you to witness and bless the sacred union of
        </motion.p>

        {/* Names */}
        <motion.div
          className="space-y-2 mb-12"
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal-700 tracking-wide">
            Anurag Rajendra Arwalkar
          </h3>
          <p className="font-heading text-2xl sm:text-3xl text-gold-500">&</p>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-charcoal-700 tracking-wide">
            Renuka Ganesh Rajguru
          </h3>
        </motion.div>

        {/* Venue Cover Image */}
        <motion.div
          className="relative max-w-lg mx-auto mb-8 overflow-hidden rounded-sm"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src={venueImage}
            alt="Maharaja Banquet - Wedding Venue"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <p className="absolute bottom-4 left-0 right-0 text-center font-serif text-lg sm:text-xl text-white font-medium tracking-wide drop-shadow-lg">
            Maharaja Banquet
          </p>
        </motion.div>

        {/* Event Details Card */}
        <motion.div
          className="relative bg-ivory-100 border border-ivory-400/50 rounded-sm p-8 sm:p-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
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
              <button
                onClick={handleAddToCalendar}
                className="inline-flex items-center gap-2 mt-3 px-5 py-2 border border-gold-400 text-gold-600 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-500 hover:text-white transition-all duration-300 rounded-sm"
              >
                <CalendarPlus className="w-3.5 h-3.5" />
                Add to Calendar
              </button>
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
                href="https://maps.app.goo.gl/Mx7XnQwuZafKMmjFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-4 overflow-hidden rounded-sm border border-ivory-400/50 hover:border-gold-400 transition-all duration-300"
              >
                <img
                  src={venueMapThumbnail}
                  alt="Maharaja Banquet location on map"
                  className="w-48 h-32 sm:w-56 sm:h-36 object-cover"
                />
              </a>
              
              <br />
              <a
                href="https://maps.app.goo.gl/Mx7XnQwuZafKMmjFA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 border border-charcoal-700 text-charcoal-700 text-xs uppercase tracking-[0.2em] font-medium hover:bg-charcoal-700 hover:text-white transition-all duration-300"
              >
                <MapPin className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

        <motion.p
          className="font-serif text-base sm:text-lg text-charcoal-400 italic mt-10"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          Your presence will add to our joy and make our day even more special
        </motion.p>
      </div>
    </section>
  )
}

export default WeddingDetails
