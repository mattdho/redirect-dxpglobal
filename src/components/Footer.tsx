import React from 'react'

const Footer: React.FC = () => {
  const handleCTAClick = () => {
    // Track footer CTA click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'footer_cta_click', {
        event_category: 'EduWeb 2025',
        event_label: 'Higher Education Solutions'
      })
    }
  }

  return (
    <footer className="section-padding text-white bg-jblue-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="text-4xl font-bold mb-6 font-merriweather">JAKALA</div>
            <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-2xl mx-auto">
              Transforming digital experiences in higher education through data-driven innovation and strategic design.
            </p>
            <a
              href="https://www.jakala.com/higher-education"
              onClick={handleCTAClick}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore our Higher Education Solutions
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="border-t border-white border-opacity-20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm opacity-70 mb-4 md:mb-0">
                © 2025 Jakala. All rights reserved.
              </div>
              <div className="flex gap-8 text-sm opacity-70">
                <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                  Terms of Service
                </a>
                <a href="#" className="hover:opacity-100 transition-opacity duration-300">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer