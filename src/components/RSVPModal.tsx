import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RSVPModal: React.FC<RSVPModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    title: '',
    dietaryRestrictions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    console.log('RSVP Data:', formData);
    alert('Thank you for your RSVP! We\'ll send you event details shortly.');
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      title: '',
      dietaryRestrictions: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-merriweather font-bold text-jakala-blue">
            RSVP for Wine & Strategy Event
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-jakala-grey-1 rounded-full transition-colors"
          >
            <X size={24} className="text-jakala-blue" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
              Organization *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
            />
          </div>

          <div>
            <label htmlFor="dietaryRestrictions" className="block text-sm font-raleway font-medium text-jakala-blue mb-2">
              Dietary Restrictions or Preferences
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              rows={3}
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-jakala-grey-3 rounded-lg focus:ring-2 focus:ring-jakala-blue-lighter focus:border-jakala-blue-lighter"
              placeholder="Please let us know about any allergies or dietary preferences..."
            />
          </div>

          <button
            type="submit"
            className="btn-primary w-full inline-flex items-center justify-center text-lg"
          >
            <Send className="mr-2" size={20} />
            Send RSVP
          </button>
        </form>
      </div>
    </div>
  );
};

export default RSVPModal;