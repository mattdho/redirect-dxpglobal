import React from 'react'
import { Calendar, Clock, MapPin, Wine, Users, MessageCircle } from 'lucide-react'

interface OffSiteEventProps {
  onRSVPClick: () => void
}

const OffSiteEvent: React.FC<OffSiteEventProps> = ({ onRSVPClick }) => {
  const handleRSVPClick = () => {
    // Track RSVP click
    if (typeof gtag !== 'undefined') {
      gtag('event', 'rsvp_click', {
        event_category: 'EduWeb 2025',
        event_label: 'Off-Site Event RSVP Button'
      })
    }
    
    onRSVPClick()
  }

  return (
    <section id="event-section" className="section-padding bg-gradient-to-br from-jgrey-lightest to-jgrey-light">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-jblue-dark animate-fade-in-up">
              Off-Site Event
            </h2>
            <h3 className="text-3xl text-jred-primary mb-8 leading-relaxed animate-fade-in-up">
              An Evening Discussing Digital Impact in Higher Ed
            </h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Event Details */}
            <div className="event-card animate-fade-in-up">
              <h4 className="text-3xl font-semibold mb-8 text-jblue-dark">Event Details</h4>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-jred-primary rounded-full flex items-center justify-center text-white">
                    <Calendar size={18} />
                  </div>
                  <span className="text-jblue-primary text-lg">
                    <strong>Date:</strong> Wednesday, July 17, 2025
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-jred-primary rounded-full flex items-center justify-center text-white">
                    <Clock size={18} />
                  </div>
                  <span className="text-jblue-primary text-lg">
                    <strong>Time:</strong> 5:30–7:30 p.m.
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-jred-primary rounded-full flex items-center justify-center text-white">
                    <MapPin size={18} />
                  </div>
                  <span className="text-jblue-primary text-lg">
                    <strong>Location:</strong> Grippy Tannin's, Portland, ME
                  </span>
                </div>
              </div>
              
              <div className="mb-10">
                <h5 className="text-xl font-semibold mb-4 text-jblue-dark flex items-center gap-3">
                  <Users className="text-jred-primary" size={24} />
                  Featured Panel
                </h5>
                <p className="text-jblue-primary mb-4 text-lg">Join industry leaders from:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-jblue-light text-white px-4 py-2 rounded-full text-sm font-medium">Penn State</span>
                  <span className="bg-jblue-light text-white px-4 py-2 rounded-full text-sm font-medium">Princeton</span>
                  <span className="bg-jblue-light text-white px-4 py-2 rounded-full text-sm font-medium">Yale</span>
                </div>
              </div>
              
              <button
                onClick={handleRSVPClick}
                className="btn-secondary w-full text-center text-lg py-4"
              >
                Reserve Your Spot
              </button>
            </div>
            
            {/* What to Expect */}
            <div className="event-card animate-fade-in-up">
              <h4 className="text-3xl font-semibold mb-8 text-jblue-dark">What to Expect</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-jred-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Wine size={28} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-jblue-dark mb-2 text-xl">Authentic Maine Cuisine</h5>
                    <p className="text-jblue-primary leading-relaxed">Fresh lobster rolls and local specialties paired with premium wines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-jred-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <Users size={28} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-jblue-dark mb-2 text-xl">Strategic Networking</h5>
                    <p className="text-jblue-primary leading-relaxed">Connect with higher ed digital leaders and industry innovators</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-jred-light rounded-full flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-jblue-dark mb-2 text-xl">Thought Leadership</h5>
                    <p className="text-jblue-primary leading-relaxed">Engaging discussions on digital transformation in higher education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OffSiteEvent