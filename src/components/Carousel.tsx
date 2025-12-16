'use client'

import { useState, useEffect } from 'react'

interface CarouselItem {
  image: string
  title: string
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const items: CarouselItem[] = [
    {
      image: '/images/meetsamcote/meet1.jpeg',
      title: 'Sam Côté',
    },
    {
      image: '/images/meetsamcote/meet2.jpeg',
      title: 'Digital Literacy Advocate',
    },
    {
      image: '/images/meetsamcote/meet3.jpeg',
      title: 'Community Leader',
    },
    {
      image: '/images/meetsamcote/meet4.jpeg',
      title: 'Educator & Innovator',
    },
    {
      image: '/images/meetsamcote/meet5.jpeg',
      title: 'Empowering Change',
    },
    {
      image: '/images/meetsamcote/meet6.jpeg',
      title: 'Digital Citizenship',
    },
    {
      image: '/images/meetsamcote/meet7.jpeg',
      title: 'Building Safer Communities',
    },
    {
      image: '/images/meetsamcote/meet8.jpeg',
      title: 'Youth Development',
    },
    {
      image: '/images/meetsamcote/meet9.jpeg',
      title: 'Digital Responsibility',
    },
    {
      image: '/images/meetsamcote/meet10.jpeg',
      title: 'Making an Impact',
    },
    {
      image: '/images/meetsamcote/meet11.jpeg',
      title: 'Vision for the Future',
    },
  ]

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay, items.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
    setIsAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
    setIsAutoPlay(false)
  }

  const getPrevIndex = (offset: number) => {
    return (currentIndex - offset + items.length) % items.length
  }

  const getNextIndex = (offset: number) => {
    return (currentIndex + offset) % items.length
  }

  return (
    <section className="mx-auto py-24 md:pt-10">
      <div className="relative flex items-center justify-center gap-12 md:gap-[60px] overflow-hidden">
        {/* Previous image - blurred */}
        <div className="hidden md:flex items-center justify-center opacity-50">
          <img
            src={items[getPrevIndex(1)].image}
            alt="Previous"
            className="w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] object-cover rounded-[40px] blur-sm flex-shrink-0"
          />
        </div>

        {/* Current image - focused */}
        <div className="flex items-center justify-center flex-shrink-0">
          <img
            src={items[currentIndex].image}
            className="w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] object-cover rounded-[40px] shadow-2xl"
          />
        </div>

        {/* Next image - blurred */}
        <div className="hidden md:flex items-center justify-center opacity-50">
          <img
            src={items[getNextIndex(1)].image}
            alt="Next"
            className="w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] object-cover rounded-[40px] blur-sm flex-shrink-0"
          />
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10  text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          aria-label="Previous image"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
          aria-label="Next image"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              setIsAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>


    </section>
  )
}
