'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [shouldShow, setShouldShow] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
      // Remove from DOM after animation completes
      const animationTimer = setTimeout(() => {
        setShouldShow(false)
      }, 800) // Match animation duration

      return () => clearTimeout(animationTimer)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!shouldShow) return null

  return (
    <div
      className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center ${
        isAnimating ? 'animate-curtainLift' : ''
      }`}
    >
      <style>{`
        @keyframes curtainLift {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
        }
        
        .animate-curtainLift {
          animation: curtainLift 0.8s ease-out forwards;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center">
        <img
          src="images/animation.gif"
          alt="Logo Animation"
          className="w-48 h-48 md:w-64 md:h-64 object-contain"
        />
      </div>
    </div>
  )
}
