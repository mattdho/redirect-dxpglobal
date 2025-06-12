import React from 'react'
import { MapPin, Clock } from 'lucide-react'

const BoothSection: React.FC = () => {
  return (
    <section id="booth-section" className="section-padding bg-jgrey-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-jblue-dark animate-fade-in-up">
            Where to Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="event-card animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="icon-booth">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-jblue-dark mb-2">Visit us at</h3>
                  <p className="text-xl text-jblue-primary font-medium">Booth 24</p>
                </div>
              </div>
            </div>
            
            <div className="event-card animate-fade-in-up">
              <div className="flex items-center gap-6">
                <div className="icon-booth">
                  <Clock size={24} />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-jblue-dark mb-2">Conference Dates</h3>
                  <p className="text-xl text-jblue-primary font-medium">July 15-17, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoothSection