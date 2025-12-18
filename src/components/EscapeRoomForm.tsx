'use client'

import { useState } from 'react'

export default function EscapeRoomForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    province: '',
    date: '',
    escapeRoom: '',
    grade5Classes: '',
    grade6Classes: '',
    grade7Classes: '',
    grade8Classes: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission
  }

  const provinces = [
    'Select a province/territory',
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Quebec',
    'Saskatchewan',
    'Yukon'
  ]

  const escapeRooms = [
    'Select an escape room',
    'Under the Blue Moon',
    'The Secret Garden'
  ]

  const classOptions = [
    'Select an option',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
  ]

  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12">
          Get Started - Grades 3-6
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Name: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Email Address: <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>

          {/* School */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              School: <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
              placeholder="School name"
            />
          </div>

          {/* Province */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Province/Territory: <span className="text-red-500">*</span>
            </label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {provinces.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Date: <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-2">This date can be changed later.</p>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            />
          </div>

          {/* Escape Room Selection */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Virtual Escape Room: <span className="text-red-500">*</span>
            </label>
            <select
              name="escapeRoom"
              value={formData.escapeRoom}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {escapeRooms.map((room) => (
                <option key={room} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>

          {/* Grade 5 Classes */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              5th Grade - Please indicate the number of classes interested in the activity
            </label>
            <select
              name="grade5Classes"
              value={formData.grade5Classes}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Grade 6 Classes */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              6th Grade - Please indicate the number of classes interested in the activity
            </label>
            <select
              name="grade6Classes"
              value={formData.grade6Classes}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Grade 7 Classes */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              7th Grade - Please indicate the number of classes interested in the activity
            </label>
            <select
              name="grade7Classes"
              value={formData.grade7Classes}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Grade 8 Classes */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              8th Grade - Please indicate the number of classes interested in the activity
            </label>
            <select
              name="grade8Classes"
              value={formData.grade8Classes}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none"
            >
              {classOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-semibold text-black mb-2">
              Message/Details:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#141414] focus:outline-none resize-none"
              placeholder="Any additional details..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#141414] text-white rounded-[30px] font-semibold hover:bg-black transition-colors text-lg"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  )
}
