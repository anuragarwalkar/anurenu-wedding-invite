import { useState } from 'react'
import { motion } from 'framer-motion'
import img8171 from '../assets/134A8171.jpg'
import img8363 from '../assets/134A8363.jpg'
import img8371 from '../assets/134A8371.jpg'
import img8388 from '../assets/134A8388.jpg'
import img8410 from '../assets/134A8410.jpg'
import img8597 from '../assets/134A8597.jpg'
import img8598 from '../assets/134A8598.jpg'
import img8616 from '../assets/134A8616.jpg'
import img8621 from '../assets/134A8621.jpg'
import img8628 from '../assets/134A8628.jpg'
import img8636 from '../assets/134A8636.jpg'
import img8649 from '../assets/134A8649.jpg'
import img8668 from '../assets/134A8668.jpg'

function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const photos = [
    { id: 1, src: img8171 },
    { id: 2, src: img8363 },
    { id: 3, src: img8371 },
    { id: 4, src: img8388 },
    { id: 5, src: img8410 },
    { id: 6, src: img8597 },
    { id: 7, src: img8598 },
    { id: 8, src: img8616 },
    { id: 9, src: img8621 },
    { id: 10, src: img8628 },
    { id: 11, src: img8636 },
    { id: 12, src: img8649 },
    { id: 13, src: img8668 },
  ]

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-charcoal-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-400 font-medium mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Memories
          </motion.p>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-3"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Journey
          </motion.h2>
          <motion.div
            className="ornament-divider text-gold-400 mb-4"
            initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
            </svg>
          </motion.div>
          <motion.p
            className="font-serif text-base sm:text-lg text-charcoal-200 italic"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Moments we cherish together
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="gallery-item break-inside-avoid rounded-sm overflow-hidden cursor-pointer relative group"
              onClick={() => setSelectedPhoto(photo)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <img
                src={photo.src}
                alt={`Memory ${photo.id}`}
                className="w-full h-auto object-cover"
                loading={index < 6 ? 'eager' : 'lazy'}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
          <motion.img
            src={selectedPhoto.src}
            alt="Selected memory"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </section>
  )
}

export default PhotoGallery
