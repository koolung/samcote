'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Linkedin, Instagram } from 'lucide-react'
// import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [frenchDropdownOpen, setFrenchDropdownOpen] = useState(false)
  const [englishDropdownOpen, setEnglishDropdownOpen] = useState(false)
  // const { setLanguage } = useLanguage()

  const frenchMenu = [
    { label: 'Accueil', href: '/francais' },
    { label: 'Services', href: '/francais/services' },
    { label: 'Qui est Sam Côté?', href: '/francais/samcote' },
    { label: 'Initiative Empreinte Numérique', href: '/francais/initiative-empreinte-numerique' },
    { label: 'Contact', href: '/francais/contact-2' },
  ]

  const englishMenu = [
    { label: 'Home', href: '/english' },
    { label: 'Meet Sam Côté', href: '/english/meetsamcote' },
    { label: 'Services', href: '/english/services' },
    { label: 'Fingerprint Initiative', href: '/english/fingerprint-initiative' },
    { label: 'Contact', href: '/english/contact' },
  ]

  const handleItemClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-[#141414] border-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-white">
          Sam Côté Consulting
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-gray-300 transition-colors duration-300">
            Home
          </Link>

          {/* Français Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center gap-1 py-2">
              Français
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7 7-7m0 0l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-black border-2 border-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {frenchMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-white hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* English Dropdown */}
          <div className="relative group">
            <button className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center gap-1 py-2">
              English
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7 7-7m0 0l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-black text-white border-2 border-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {englishMenu.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-white hover:bg-gray-100 border-b border-gray-200 last:border-b-0"
                  onClick={handleItemClick}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 ml-4 pl-4 border-l border-gray-600">
            <a
              href="https://www.linkedin.com/in/samcoteconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/samcote.consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-white bg-black">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-gray-300" onClick={handleItemClick}>
              Home
            </Link>

            {/* Mobile Français Dropdown */}
            <div>
              <button
                onClick={() => setFrenchDropdownOpen(!frenchDropdownOpen)}
                className="w-full text-left text-white hover:text-gray-300 flex items-center justify-between py-2"
              >
                Français
                <svg
                  className={`w-4 h-4 transition-transform ${frenchDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7 7-7m0 0l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  frenchDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {frenchMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-gray-300 hover:text-white py-1"
                    onClick={handleItemClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile English Dropdown */}
            <div>
              <button
                onClick={() => setEnglishDropdownOpen(!englishDropdownOpen)}
                className="w-full text-left text-white hover:text-gray-300 flex items-center justify-between py-2"
              >
                English
                <svg
                  className={`w-4 h-4 transition-transform ${englishDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7 7-7m0 0l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`pl-4 space-y-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  englishDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {englishMenu.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-gray-300 hover:text-white py-1"
                    onClick={handleItemClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Social Links */}
          <div className="flex gap-4 mt-6 py-4 pl-6 ">
            <a
              href="https://www.linkedin.com/in/samcoteconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/samcote.consulting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
