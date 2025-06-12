import React, { useState, useEffect } from 'react'
import RSVPModal from './components/RSVPModal'

function App() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false)

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetElement = document.querySelector(target.getAttribute('href')!)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Track button clicks with GTM
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('btn-primary') || target.classList.contains('btn-secondary')) {
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'cta_click',
            cta_text: target.textContent?.trim(),
            cta_location: target.closest('section')?.querySelector('h2')?.textContent || 'Unknown'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    document.addEventListener('click', handleButtonClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      document.removeEventListener('click', handleButtonClick)
    }
  }, [])

  const openRSVPModal = () => {
    setIsRSVPModalOpen(true)
  }

  const closeRSVPModal = () => {
    setIsRSVPModalOpen(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg text-white section-padding relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Join Jakala at EduWeb 2025
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 opacity-90 font-light">
              Reimagining Digital Experience in Higher Education
            </h2>
            <button onClick={openRSVPModal} className="btn-primary text-lg inline-block">
              RSVP for Our Wine & Strategy Event
            </button>
          </div>
        </div>
      </section>

      {/* Where to Find Us Section */}
      <section className="section-padding" style={{backgroundColor: '#E8E8E8'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-jblue-dark">Where to Find Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-4">
                <div className="icon-booth">📍</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-jblue-dark">Visit us at</h3>
                  <p className="text-lg text-jblue-primary">Booth 24</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="icon-booth">🕒</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-jblue-dark">Conference Dates</h3>
                  <p className="text-lg text-jblue-primary">July 15-17, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-jblue-dark">Session</h2>
              <h3 className="text-2xl text-jblue-primary mb-8">Boosting Applications with a Modern Digital Experience</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-jgrey-lightest p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-jblue-dark">Session Details</h4>
                  <div className="space-y-2 text-jblue-primary">
                    <p><strong>Date:</strong> July 15, 2025</p>
                    <p><strong>Time:</strong> 2:45–3:45 p.m.</p>
                    <p><strong>Location:</strong> Rhode Island Room</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-xl font-semibold mb-3 text-jblue-dark">Speakers</h4>
                  <ul className="space-y-2 text-jblue-primary">
                    <li>• <strong>Mandee Englert</strong> - Jakala</li>
                    <li>• <strong>Jim Nourse</strong> - Penn State</li>
                    <li>• <strong>Chaney Moore</strong></li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-3 text-jblue-dark">Session Summary</h4>
                  <p className="text-jblue-primary leading-relaxed">
                    Discover how Jakala transformed Penn State's undergraduate enrollment experience through strategic information architecture, 
                    personalized content journeys, and modern digital experience design. Learn practical approaches to boosting application 
                    rates and improving student engagement through data-driven digital transformation.
                  </p>
                </div>
                
                <a href="#slides" className="btn-primary">Download Slides</a>
              </div>
              
              <div className="text-center">
                <div className="qr-code mx-auto mb-4">
                  <div>
                    <div className="text-xs mb-2">QR Code</div>
                    <div className="text-xs">jakala.com/higher-ed</div>
                  </div>
                </div>
                <p className="text-sm text-jblue-primary">Scan for Higher Ed Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-Site Event Section */}
      <section id="event" className="section-padding" style={{background: 'linear-gradient(135deg, #F5F5F5 0%, #E8E8E8 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-jblue-dark">Off-Site Event</h2>
              <h3 className="text-2xl text-jred-primary mb-8">An Evening Discussing Digital Impact in Higher Ed</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-semibold mb-6 text-jblue-dark">Event Details</h4>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-jred-primary rounded-full flex items-center justify-center text-white text-sm">📅</div>
                      <span className="text-jblue-primary"><strong>Date:</strong> Wednesday, July 17, 2025</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-jred-primary rounded-full flex items-center justify-center text-white text-sm">🕐</div>
                      <span className="text-jblue-primary"><strong>Time:</strong> 5:30–7:30 p.m.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-jred-primary rounded-full flex items-center justify-center text-white text-sm">📍</div>
                      <span className="text-jblue-primary"><strong>Location:</strong> Grippy Tannin's, Portland, ME</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h5 className="text-lg font-semibold mb-3 text-jblue-dark">Featured Panel</h5>
                    <p className="text-jblue-primary mb-4">Join industry leaders from:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-jblue-light text-white px-3 py-1 rounded-full text-sm">Penn State</span>
                      <span className="bg-jblue-light text-white px-3 py-1 rounded-full text-sm">Princeton</span>
                      <span className="bg-jblue-light text-white px-3 py-1 rounded-full text-sm">Yale</span>
                    </div>
                  </div>
                  
                  <button onClick={openRSVPModal} className="btn-secondary w-full text-center block">
                    Reserve Your Spot
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-semibold mb-6 text-jblue-dark">What to Expect</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-jred-light rounded-full flex items-center justify-center text-white">🦞</div>
                      <div>
                        <h5 className="font-semibold text-jblue-dark mb-1">Authentic Maine Cuisine</h5>
                        <p className="text-sm text-jblue-primary">Fresh lobster rolls and local specialties</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-jred-light rounded-full flex items-center justify-center text-white">🍷</div>
                      <div>
                        <h5 className="font-semibold text-jblue-dark mb-1">Premium Wine Selection</h5>
                        <p className="text-sm text-jblue-primary">Curated wines paired with gourmet appetizers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-jred-light rounded-full flex items-center justify-center text-white">💬</div>
                      <div>
                        <h5 className="font-semibold text-jblue-dark mb-1">Strategic Networking</h5>
                        <p className="text-sm text-jblue-primary">Connect with higher ed digital leaders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="section-padding text-white" style={{backgroundColor: '#040066'}}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-3xl font-bold mb-4">JAKALA</div>
              <p className="text-lg opacity-90 mb-8">
                Transforming digital experiences in higher education through data-driven innovation and strategic design.
              </p>
              <a href="https://www.jakala.com/higher-education" className="btn-primary text-lg">
                Explore our Higher Education Solutions
              </a>
            </div>
            
            <div className="border-t border-white border-opacity-20 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm opacity-70 mb-4 md:mb-0">
                  © 2025 Jakala. All rights reserved.
                </div>
                <div className="flex gap-6 text-sm opacity-70">
                  <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                  <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                  <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* RSVP Modal */}
      <RSVPModal isOpen={isRSVPModalOpen} onClose={closeRSVPModal} />
    </>
  )
}

export default App