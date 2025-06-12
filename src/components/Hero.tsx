import React from 'react'

interface HeroProps {
  onRSVPClick: () => void
}

const Hero: React.FC<HeroProps> = ({ onRSVPClick }) => {
  const handleRSVPClick = () => {
    // Track RSVP click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'rsvp_click', {
        event_category: 'EduWeb 2025',
        event_label: 'Hero RSVP Button'
      })
    }
    
    onRSVPClick()
  }

  return (
    <section className="hero-bg text-white section-padding relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-down">
            Join Jakala at EduWeb 2025
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 opacity-90 font-light leading-relaxed animate-fade-in-up">
            Reimagining Digital Experience in Higher Education
          </h2>
          <div className="animate-scale-in">
            <button
              onClick={handleRSVPClick}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              RSVP for Our Wine & Strategy Event
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero