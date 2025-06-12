import React from 'react'
import { MapPin, Clock } from 'lucide-react'

const BoothSection: React.FC = () => {
  return (
    <section id="booth" className="py-20 bg-jakala-grey-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-jakala-blue mb-6">
            Visit Us at Booth 24
          </h2>
          <p className="text-xl font-raleway text-jakala-blue-light max-w-3xl mx-auto leading-relaxed">
            Meet the Jakala team and explore how we're transforming digital experiences in Higher Education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <MapPin className="text-jakala-red mr-3" size={24} />
              <h3 className="text-xl font-merriweather font-bold text-jakala-blue">
                Location
              </h3>
            </div>
            <p className="text-lg font-raleway text-jakala-blue-light">
              Booth 24<br />
              EduWeb 2025 Exhibition Hall<br />
              Portland, Maine
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <Clock className="text-jakala-red mr-3" size={24} />
              <h3 className="text-xl font-merriweather font-bold text-jakala-blue">
                Hours
              </h3>
            </div>
            <p className="text-lg font-raleway text-jakala-blue-light">
              July 15-17, 2025<br />
              9:00 AM - 5:00 PM<br />
              Stop by anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoothSection