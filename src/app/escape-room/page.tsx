'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EscapeRoomHero from '@/components/EscapeRoomHero'
import EscapeRoomCardsSection from '@/components/EscapeRoomCardsSection'
import EscapeRoomInfo from '@/components/EscapeRoomInfo'
import EscapeRoomTestimonials from '@/components/EscapeRoomTestimonials'
import EscapeRoomPricing from '@/components/EscapeRoomPricing'
import EscapeRoomForm from '@/components/EscapeRoomForm'
import EscapeRoomFormGrade710 from '@/components/EscapeRoomFormGrade710'

export default function EscapeRoomPage() {
  const [selectedGrade, setSelectedGrade] = useState<'36' | '710'>('36')

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <EscapeRoomHero />
        <EscapeRoomCardsSection />
        <EscapeRoomInfo />
        <EscapeRoomTestimonials />
        <EscapeRoomPricing />
        
        {/* Grade Toggle */}
        <section className="py-12 px-4 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedGrade('36')}
                className={`px-8 py-3 rounded-[30px] font-semibold text-lg transition-colors ${
                  selectedGrade === '36'
                    ? 'bg-[#141414] text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Grades 3-6
              </button>
              <button
                onClick={() => setSelectedGrade('710')}
                className={`px-8 py-3 rounded-[30px] font-semibold text-lg transition-colors ${
                  selectedGrade === '710'
                    ? 'bg-[#141414] text-white'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
              >
                Grades 7-10
              </button>
            </div>
          </div>
        </section>

        {/* Forms */}
        {selectedGrade === '36' ? <EscapeRoomForm /> : <EscapeRoomFormGrade710 />}
      </main>
      <Footer />
    </div>
  )
}
