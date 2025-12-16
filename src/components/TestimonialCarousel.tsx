'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Sam's workshop was eye-opening. He made digital citizenship concepts accessible and engaging for our students.",
    author: "Principal Jane Mitchell",
    role: "High School Principal"
  },
  {
    id: 2,
    quote: "Incredibly knowledgeable and passionate about helping young people navigate the digital world safely.",
    author: "Teacher David Ross",
    role: "Technology Teacher"
  },
  {
    id: 3,
    quote: "Sam brings real-world experience and genuine care to every presentation. Our community benefited greatly.",
    author: "Community Director Sarah Lee",
    role: "Community Organization Leader"
  },
  {
    id: 4,
    quote: "Professional, engaging, and truly makes a difference in how students think about their online presence.",
    author: "Administrator Mark Thompson",
    role: "School Administrator"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Testimonials</h2>
        
        <div className="relative bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm">
          {/* Quote Mark */}
          <div className="text-6xl text-gray-300 leading-none mb-4">"</div>
          
          {/* Testimonial Content */}
          <p className="text-2xl text-gray-800 mb-8 leading-relaxed min-h-24">
            {currentTestimonial.quote}
          </p>
          
          {/* Author Info */}
          <div className="border-t border-gray-300 pt-6">
            <p className="font-semibold text-black text-lg">{currentTestimonial.author}</p>
            <p className="text-gray-600">{currentTestimonial.role}</p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={goToPrevious}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-black" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-black" />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlay(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
