import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import backgroundMusic from '../assets/background.mp3'

function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(backgroundMusic)
    audio.loop = true
    audioRef.current = audio

    const tryAutoplay = () => {
      if (!audioRef.current || !audioRef.current.paused) return
      audioRef.current.play().then(() => {
        setIsPlaying(true)
        removeListeners()
      }).catch(() => {})
    }

    const events = ['click', 'touchstart', 'keydown']
    events.forEach(e => document.addEventListener(e, tryAutoplay, { once: false }))

    const removeListeners = () => {
      events.forEach(e => document.removeEventListener(e, tryAutoplay))
    }

    return () => {
      removeListeners()
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-charcoal-700 text-gold-400 border border-gold-400/30 shadow-lg hover:shadow-xl hover:bg-charcoal-800 hover:border-gold-400/60 transition-all duration-300 flex items-center justify-center group"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Pause className="w-4 h-4" />
      ) : (
        <Play className="w-4 h-4 ml-0.5" />
      )}

      <span className="absolute bottom-full mb-2 right-0 bg-charcoal-900 text-ivory-200 text-[10px] py-1 px-2.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none tracking-wide">
        {isPlaying ? 'Pause music' : 'Play music'}
      </span>
    </button>
  )
}

export default MusicToggle
