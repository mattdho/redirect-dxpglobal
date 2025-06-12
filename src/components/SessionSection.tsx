import React from 'react'
import { Calendar, Clock, MapPin, Users, Download, QrCode } from 'lucide-react'

const SessionSection: React.FC = () => {
  const handleDownloadClick = () => {
    // Track download click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download_click', {
        event_category: 'EduWeb 2025',
        event_label: 'Session Slides Download'
      })
    }
  }

  return (
    <section id="session-section" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-jblue-dark animate-fade-in-up">
              Session
            </h2>
            <h3 className="text-3xl text-jblue-primary mb-8 leading-relaxed animate-fade-in-up">
              Boosting Applications with a Modern Digital Experience
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {/* Session Details Card */}
              <div className="event-card animate-fade-in-up">
                <h4 className="text-2xl font-semibold mb-6 text-jblue-dark flex items-center gap-3">
                  <Calendar className="text-jred-primary" size={28} />
                  Session Details
                </h4>
                <div className="space-y-4 text-jblue-primary">
                  <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-jred-primary" />
                    <span className="text-lg"><strong>Date:</strong> July 15, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-jred-primary" />
                    <span className="text-lg"><strong>Time:</strong> 2:45–3:45 p.m.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-jred-primary" />
                    <span className="text-lg"><strong>Location:</strong> Rhode Island Room</span>
                  </div>
                </div>
              </div>
              
              {/* Speakers Card */}
              <div className="event-card animate-fade-in-up">
                <h4 className="text-2xl font-semibold mb-6 text-jblue-dark flex items-center gap-3">
                  <Users className="text-jred-primary" size={28} />
                  Speakers
                </h4>
                <ul className="space-y-3 text-jblue-primary">
                  <li className="text-lg">• <strong>Mandee Englert</strong> - Jakala</li>
                  <li className="text-lg">• <strong>Jim Nourse</strong> - Penn State</li>
                  <li className="text-lg">• <strong>Chaney Moore</strong></li>
                </ul>
              </div>
              
              {/* Session Summary */}
              <div className="event-card animate-fade-in-up">
                <h4 className="text-2xl font-semibold mb-6 text-jblue-dark">Session Summary</h4>
                <p className="text-jblue-primary leading-relaxed text-lg mb-8">
                  Discover how Jakala transformed Penn State's undergraduate enrollment experience through strategic information architecture, 
                  personalized content journeys, and modern digital experience design. Learn practical approaches to boosting application 
                  rates and improving student engagement through data-driven digital transformation.
                </p>
                
                <button
                  onClick={handleDownloadClick}
                  className="btn-primary inline-flex items-center gap-3"
                >
                  <Download size={20} />
                  Download Slides
                </button>
              </div>
            </div>
            
            {/* QR Code Section */}
            <div className="text-center animate-fade-in-up">
              <div className="event-card max-w-md mx-auto">
                <div className="w-32 h-32 bg-white border-2 border-jgrey-light rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <QrCode size={64} className="text-jgrey-dark" />
                </div>
                <h4 className="text-xl font-semibold text-jblue-dark mb-2">
                  Scan for Higher Ed Solutions
                </h4>
                <p className="text-jblue-primary">jakala.com/higher-ed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionSection