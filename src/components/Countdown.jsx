import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FIREWORKS_DURATION = 1 * 60 * 1000 // 5 minutes

const FireworksCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let lastLaunch = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = ['#FFD700', '#FF6B6B', '#C084FC', '#60A5FA', '#34D399', '#F472B6', '#FBBF24', '#A78BFA', '#FCD34D']

    class Particle {
      constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
        const angle = Math.random() * Math.PI * 2
        const speed = Math.random() * 6 + 2
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.alpha = 1
        this.decay = Math.random() * 0.013 + 0.007
        this.size = Math.random() * 3 + 1
      }

      update() {
        this.vx *= 0.97
        this.vy *= 0.97
        this.vy += 0.08
        this.x += this.vx
        this.y += this.vy
        this.alpha -= this.decay
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = Math.max(0, this.alpha)
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const launchFirework = () => {
      const x = Math.random() * canvas.width
      const y = (Math.random() * 0.55 + 0.05) * canvas.height
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let i = 0; i < 110; i++) {
        particles.push(new Particle(x, y, color))
      }
    }

    const animate = (timestamp) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      if (timestamp - lastLaunch > 480) {
        launchFirework()
        if (Math.random() > 0.4) launchFirework()
        lastLaunch = timestamp
      }

      particles = particles.filter(p => p.alpha > 0)
      particles.forEach(p => { p.update(); p.draw() })

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    />
  )
}

const TimeCard = ({ value, label, index }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
      {/* Decorative ring */}
      <div className="absolute inset-0 rounded-full border border-gold-400/30"></div>
      <div className="absolute inset-1 rounded-full border border-gold-300/20"></div>
      <div className="text-2xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal-700">
        {String(value).padStart(2, '0')}
      </div>
    </div>
    <span className="mt-2 text-[10px] sm:text-xs font-medium text-charcoal-400 uppercase tracking-[0.2em]">
      {label}
    </span>
  </motion.div>
)

function Countdown() {
  const weddingDate = new Date('2026-05-08T11:18:00+05:30')

  const calculateState = () => {
    const now = new Date()
    const difference = weddingDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isOver: false,
        showFireworks: false,
      }
    }

    const elapsed = -difference
    return {
      days: 0, hours: 0, minutes: 0, seconds: 0,
      isOver: true,
      showFireworks: elapsed < FIREWORKS_DURATION,
    }
  }

  const [state, setState] = useState(calculateState())

  useEffect(() => {
    const timer = setInterval(() => {
      setState(calculateState())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {state.showFireworks && (
          <motion.div
            key="fireworks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <FireworksCanvas />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative py-16 sm:py-24 px-4 bg-ivory-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {state.isOver ? 'We Are Married!' : 'Counting Down'}
          </motion.p>
          <motion.h2
            className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {state.isOver ? 'Just Married!' : 'To Forever'}
          </motion.h2>
          <motion.div
            className="ornament-divider text-gold-400 mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
            </svg>
          </motion.div>

          <div className={`flex items-center justify-center gap-2 sm:gap-6 md:gap-10 ${state.isOver ? 'opacity-60' : ''}`}>
            <TimeCard value={state.days} label="Days" index={0} />
            <span className="text-2xl text-gold-400 font-light mt-[-20px]">:</span>
            <TimeCard value={state.hours} label="Hours" index={1} />
            <span className="text-2xl text-gold-400 font-light mt-[-20px]">:</span>
            <TimeCard value={state.minutes} label="Minutes" index={2} />
            <span className="text-2xl text-gold-400 font-light mt-[-20px]">:</span>
            <TimeCard value={state.seconds} label="Seconds" index={3} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Countdown
