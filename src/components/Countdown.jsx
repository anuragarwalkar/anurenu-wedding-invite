import { useState, useEffect } from 'react'

function Countdown() {
  const weddingDate = new Date('2026-05-08T11:18:00+05:30')
  
  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date()
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeCard = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
        {/* Decorative ring */}
        <div className="absolute inset-0 rounded-full border border-gold-400/30"></div>
        <div className="absolute inset-1 rounded-full border border-gold-300/20"></div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal-700">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs font-medium text-charcoal-400 uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
  )

  return (
    <section className="relative py-16 sm:py-24 px-4 bg-ivory-100">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gold-500 font-medium mb-3">
          Counting Down
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-charcoal-700 mb-3">
          To Forever
        </h2>
        <div className="ornament-divider text-gold-400 mb-10">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6Z" />
          </svg>
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <TimeCard value={timeLeft.days} label="Days" />
          <span className="text-2xl text-gold-400 font-light mt-[-20px]">:</span>
          <TimeCard value={timeLeft.hours} label="Hours" />
          <span className="text-2xl text-gold-400 font-light mt-[-20px]">:</span>
          <TimeCard value={timeLeft.minutes} label="Minutes" />
          <span className="text-2xl text-gold-400 font-light mt-[-20px] hidden sm:block">:</span>
          <div className="hidden sm:block">
            <TimeCard value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown
