import React from 'react'
import { Calendar, Clock, MapPin, Users, Download } from 'lucide-react'

const SessionSection: React.FC = () => {
  return (
    <section id="session" className="py-20 bg-jakala-grey-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-jakala-blue mb-6">
              Boosting Applications with a Modern Digital Experience
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-lg font-raleway text-jakala-blue-light">
                <Calendar className="mr-3 text-jakala-red-light" size={20} />
                Tuesday, July 15
              </div>
              <div className="flex items-center text-lg font-raleway text-jakala-blue-light">
                <Clock className="mr-3 text-jakala-red-light" size={20} />
                2:45–3:45 p.m.
              </div>
              <div className="flex items-center text-lg font-raleway text-jakala-blue-light">
                <MapPin className="mr-3 text-jakala-red-light" size={20} />
                Rhode Island Room
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Users className="mr-3 text-jakala-red" size={20} />
                <h3 className="text-xl font-merriweather font-bold text-jakala-blue">
                  Speakers
                </h3>
              </div>
              <ul className="text-lg font-raleway text-jakala-blue-light space-y-2">
                <li>• Mandee Englert, Jakala</li>
                <li>• Jim Nourse, Penn State</li>
                <li>• Chaney Moore, Jakala</li>
              </ul>
            </div>

            <p className="text-lg font-raleway text-jakala-blue leading-relaxed mb-8">
              Learn how Penn State's strategic modernization effort leveraged information architecture, content sharing, and journey personalization to transform their digital experience and boost applications.
            </p>

            <button className="btn-secondary inline-flex items-center text-lg">
              <Download className="mr-2" size={20} />
              Download Slides
            </button>
          </div>

          <div className="flex justify-center">
            <div className="qr-code bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-48 h-48 bg-jakala-grey-3 rounded-lg flex items-center justify-center mb-4">
                <div className="text-jakala-blue font-raleway font-medium">
                  QR Code<br />
                  Higher Ed<br />
                  Services
                </div>
              </div>
              <p className="text-sm font-raleway text-jakala-blue-light">
                Scan to learn more about<br />
                Jakala's Higher Education solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SessionSection