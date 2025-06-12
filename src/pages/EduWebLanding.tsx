import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BoothSection from '../components/BoothSection'
import SessionSection from '../components/SessionSection'
import OffSiteEvent from '../components/OffSiteEvent'
import Footer from '../components/Footer'
import RSVPModal from '../components/RSVPModal'

const EduWebLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRSVPOpen, setIsRSVPOpen] = useState(false)

  const handleRSVPClick = () => {
    setIsRSVPOpen(true)
  }

  const handleRSVPClose = () => {
    setIsRSVPOpen(false)
  }

  return (
    <div className="min-h-screen">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero onRSVPClick={handleRSVPClick} />
      <BoothSection />
      <SessionSection />
      <OffSiteEvent onRSVPClick={handleRSVPClick} />
      <Footer />
      <RSVPModal isOpen={isRSVPOpen} onClose={handleRSVPClose} />
    </div>
  )
}

export default EduWebLanding