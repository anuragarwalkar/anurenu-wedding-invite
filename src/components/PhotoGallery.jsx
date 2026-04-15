import { useState } from 'react'
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
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-400 font-medium mb-3">
            Our Memories
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mb-3">
            Our Journey
          </h2>
          <div className="ornament-divider text-gold-400 mb-4">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
            </svg>
          </div>
          <p className="font-serif text-base sm:text-lg text-charcoal-200 italic">
            Moments we cherish together
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="gallery-item break-inside-avoid rounded-sm overflow-hidden cursor-pointer relative group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={`Memory ${photo.id}`}
                className="w-full h-auto object-cover"
                loading={index < 6 ? 'eager' : 'lazy'}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl z-50 w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
          <img
            src={selectedPhoto.src}
            alt="Selected memory"
            className="max-w-full max-h-[90vh] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default PhotoGallery
