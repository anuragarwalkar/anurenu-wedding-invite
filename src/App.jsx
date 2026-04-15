import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import WeddingDetails from './components/WeddingDetails'
import PhotoGallery from './components/PhotoGallery'
import Timeline from './components/Timeline'
import WhatsAppButtons from './components/WhatsAppButtons'
import MusicToggle from './components/MusicToggle'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Hero />
      <Countdown />
      <WeddingDetails />
      <PhotoGallery />
      <Timeline />
      <WhatsAppButtons />
      <Footer />
      <MusicToggle />
    </div>
  )
}

export default App
