import React from 'react';

interface HeroProps {
  onRSVPClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRSVPClick }) => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-merriweather font-bold text-white mb-6 leading-tight">
          Join Jakala at EduWeb 2025
        </h1>
        <p className="text-xl md:text-2xl font-raleway text-jakala-blue-lighter mb-8 leading-relaxed">
          Reimagining the Digital Experience in Higher Education
        </p>
        <button
          onClick={onRSVPClick}
          className="btn-primary text-lg md:text-xl"
        >
          RSVP for Our Wine & Strategy Event
        </button>
      </div>
    </section>
  );
};

export default Hero;