import React from 'react';
import { Calendar, Clock, MapPin, Wine } from 'lucide-react';

interface OffSiteEventProps {
  onRSVPClick: () => void;
}

const OffSiteEvent: React.FC<OffSiteEventProps> = ({ onRSVPClick }) => {
  return (
    <section id="event" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-merriweather font-bold text-jakala-blue mb-6">
              An Evening Discussing Digital Impact in Higher Ed
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-lg font-raleway text-jakala-blue-light">
                <Calendar className="mr-3 text-jakala-red-light" size={20} />
                Wednesday, July 17
              </div>
              <div className="flex items-center text-lg font-raleway text-jakala-blue-light">
                <Clock className="mr-3 text-jakala-red-light" size={20} />
                5:30–7:30 p.m.
              </div>
              <div className="flex items-start text-lg font-raleway text-jakala-blue-light">
                <MapPin className="mr-3 text-jakala-red-light mt-1" size={20} />
                <div>
                  Grippy Tannin's<br />
                  16 Middle Street, Suite 101<br />
                  Portland, ME 04101
                </div>
              </div>
            </div>

            <p className="text-lg font-raleway text-jakala-blue leading-relaxed mb-8">
              Join Jakala and leaders from Penn State, Princeton, and Yale for a private networking event and candid conversation on digital transformation in Higher Education. Expect rich insights, lobster rolls, small-production wines, and more.
            </p>

            <button
              onClick={onRSVPClick}
              className="btn-primary text-lg"
            >
              Reserve Your Spot
            </button>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg"
                alt="Elegant networking event setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
              <Wine className="text-jakala-red" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffSiteEvent;