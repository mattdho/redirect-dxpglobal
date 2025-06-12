import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-jakala-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-merriweather font-bold text-white mb-4">
            Jakala
          </h2>
          <p className="text-xl font-raleway text-jakala-blue-lighter mb-8">
            Transforming Digital Experiences in Higher Education
          </p>
          <a
            href="https://www.jakala.com/technology/dxp-digital-experience-platforms-2"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Explore Our Higher Education Solutions
          </a>
        </div>
        
        <div className="border-t border-jakala-blue-lighter pt-8">
          <p className="text-jakala-blue-lighter font-raleway">
            © 2025 Jakala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer