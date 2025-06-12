import React, { useEffect } from 'react'

const RedirectPage: React.FC = () => {
  useEffect(() => {
    // Delay redirect to allow tracking scripts to fire
    const timer = setTimeout(() => {
      window.location.href = "https://www.jakala.com/technology/dxp-digital-experience-platforms-2"
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-jakala-grey-1">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-jakala-blue mx-auto mb-4"></div>
        <p className="text-jakala-blue font-raleway">Redirecting...</p>
      </div>
    </div>
  )
}

export default RedirectPage