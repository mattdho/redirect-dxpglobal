import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BoothSection from '../components/BoothSection'
import SessionSection from '../components/SessionSection'
import OffSiteEvent from '../components/OffSiteEvent'
import Footer from '../components/Footer'
import RSVPModal from '../components/RSVPModal'

const EduWebLanding: React.FC = () => {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false)

  const openRSVPModal = () => {
    setIsRSVPModalOpen(true)
    
    // Track RSVP modal open
    if (typeof gtag !== 'undefined') {
      gtag('event', 'rsvp_modal_open', {
        event_category: 'EduWeb 2025',
        event_label: 'RSVP Modal Opened'
      })
    }
  }

  const closeRSVPModal = () => {
    setIsRSVPModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onRSVPClick={openRSVPModal} />
      <BoothSection />
      <SessionSection />
      <OffSiteEvent onRSVPClick={openRSVPModal} />
      <Footer />
      
      {isRSVPModalOpen && (
        <RSVPModal onClose={closeRSVPModal} />
      )}
    </div>
  )
}

export default EduWebLanding