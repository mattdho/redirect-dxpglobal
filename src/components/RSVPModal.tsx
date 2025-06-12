import React, { useState } from 'react'
import { X, CheckCircle } from 'lucide-react'

interface RSVPModalProps {
  onClose: () => void
}

interface FormData {
  name: string
  email: string
  organization: string
  role: string
  dietaryRestrictions: string
}

const RSVPModal: React.FC<RSVPModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    role: '',
    dietaryRestrictions: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Track RSVP submission
      if (typeof gtag !== 'undefined') {
        gtag('event', 'rsvp_submit', {
          event_category: 'EduWeb 2025',
          event_label: 'RSVP Form Submission',
          value: 1
        })
      }

      // For MVP: Log to console
      console.log('RSVP Submission:', formData)

      // TODO: Implement Supabase submission
      // const { data, error } = await supabase
      //   .from('rsvps')
      //   .insert([{
      //     name: formData.name,
      //     email: formData.email,
      //     organization: formData.organization,
      //     role: formData.role,
      //     dietary_restrictions: formData.dietaryRestrictions,
      //     event: 'EduWeb 2025',
      //     created_at: new Date().toISOString()
      //   }])

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setIsSubmitted(true)
    } catch (error) {
      console.error('RSVP submission error:', error)
      // Handle error state here
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'rsvp_modal_close', {
        event_category: 'EduWeb 2025',
        event_label: 'RSVP Modal Closed'
      })
    }
    onClose()
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center animate-scale-in">
          <div className="mb-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-jblue-dark mb-2">You're on the list!</h3>
            <p className="text-jblue-primary leading-relaxed">
              We'll see you at Grippy Tannin's on July 17th. Check your email for event details and updates.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="btn-primary w-full"
          >
            Perfect, thanks!
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-jgrey-light">
          <h3 className="text-2xl font-bold text-jblue-dark">Reserve Your Spot</h3>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-jgrey-lightest rounded-full transition-colors duration-200"
          >
            <X size={24} className="text-jblue-dark" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-jblue-dark mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-jgrey-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-jblue-medium focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-jblue-dark mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-jgrey-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-jblue-medium focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-semibold text-jblue-dark mb-2">
              Organization *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-jgrey-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-jblue-medium focus:border-transparent transition-all duration-200"
              placeholder="Your university or organization"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-jblue-dark mb-2">
              Role/Title *
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-jgrey-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-jblue-medium focus:border-transparent transition-all duration-200"
              placeholder="Your job title or role"
            />
          </div>

          <div>
            <label htmlFor="dietaryRestrictions" className="block text-sm font-semibold text-jblue-dark mb-2">
              Dietary Restrictions
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 border border-jgrey-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-jblue-medium focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Any dietary restrictions or allergies? (Optional)"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Count Me In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RSVPModal