import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jakala-blue backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-merriweather font-bold text-white">
              Jakala
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('booth')}
              className="nav-link font-raleway font-medium"
            >
              Find Us
            </button>
            <button
              onClick={() => scrollToSection('session')}
              className="nav-link font-raleway font-medium"
            >
              Session
            </button>
            <button
              onClick={() => scrollToSection('event')}
              className="nav-link font-raleway font-medium"
            >
              Event
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-jakala-blue-lighter mt-4 pt-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('booth')}
                className="nav-link font-raleway font-medium text-left"
              >
                Find Us
              </button>
              <button
                onClick={() => scrollToSection('session')}
                className="nav-link font-raleway font-medium text-left"
              >
                Session
              </button>
              <button
                onClick={() => scrollToSection('event')}
                className="nav-link font-raleway font-medium text-left"
              >
                Event
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;