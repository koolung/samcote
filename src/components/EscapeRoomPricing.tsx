'use client'

import { useState } from 'react'

export default function EscapeRoomPricing() {
  const [activeGrade, setActiveGrade] = useState<'36' | '710'>('36')

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          Pricing
        </h2>

        {/* Tab Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveGrade('36')}
            className={`px-8 py-3 rounded-[30px] font-semibold transition-colors ${
              activeGrade === '36'
                ? 'bg-[#141414] text-white'
                : 'bg-white text-black border-2 border-[#141414]'
            }`}
          >
            Grades 3-6
          </button>
          <button
            onClick={() => setActiveGrade('710')}
            className={`px-8 py-3 rounded-[30px] font-semibold transition-colors ${
              activeGrade === '710'
                ? 'bg-[#141414] text-white'
                : 'bg-white text-black border-2 border-[#141414]'
            }`}
          >
            Grades 7-10
          </button>
        </div>

        {/* Grade 3-6 Pricing */}
        {activeGrade === '36' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Small Classes</h3>
              <p className="text-gray-600 mb-6">Only one class per school level</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$150.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$275.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$400.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$500.00</span>
                </div>
              </div>
            </div>

            {/* Medium Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Medium-sized Classes</h3>
              <p className="text-gray-600 mb-6">Two classes per school level</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$300.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$550.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$800.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$1,000.00</span>
                </div>
              </div>
            </div>

            {/* Large Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Large Classes</h3>
              <p className="text-gray-600 mb-6">More than two classes per school level</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$900.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$1,300.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$1,600.00</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grade 7-10 Pricing */}
        {activeGrade === '710' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Small Size Classes</h3>
              <p className="text-gray-600 mb-6">Total of fewer than 500 students</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$150.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$275.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$400.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">5 school levels</span>
                  <span className="font-semibold text-black">$625.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">6 school levels</span>
                  <span className="font-semibold text-black">$750.00</span>
                </div>
              </div>
            </div>

            {/* Medium Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Medium Sized Classes</h3>
              <p className="text-gray-600 mb-6">Total between 500 and 1,500 students</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$300.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$550.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$800.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$1,000.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">5 school levels</span>
                  <span className="font-semibold text-black">$1,250.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">6 school levels</span>
                  <span className="font-semibold text-black">$1,500.00</span>
                </div>
              </div>
            </div>

            {/* Large Classes */}
            <div className="bg-white rounded-[20px] p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Large Size Classes</h3>
              <p className="text-gray-600 mb-6">Total of 1,500 students or more</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">1st grade level</span>
                  <span className="font-semibold text-black">$500.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">2 school levels</span>
                  <span className="font-semibold text-black">$900.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">3 school levels</span>
                  <span className="font-semibold text-black">$1,300.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">4 school levels</span>
                  <span className="font-semibold text-black">$1,600.00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">5 school levels</span>
                  <span className="font-semibold text-black">$2,000.00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-700">6 school levels</span>
                  <span className="font-semibold text-black">$2,400.00</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
