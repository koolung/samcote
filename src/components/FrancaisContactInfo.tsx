'use client'

import { Mail, Instagram, Linkedin } from 'lucide-react'

export default function FrancaisContactInfo() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-10">
          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail size={28} className="text-black flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-black mb-2">Courriel</p>
              <a
                href="mailto:samcote.consulting@gmail.com"
                className="text-gray-700 hover:text-black transition-colors"
              >
                samcote.consulting@gmail.com
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4">
            <Instagram size={28} className="text-black flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-black mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/samcote.consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                @samcote.consulting
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start gap-4">
            <Linkedin size={28} className="text-black flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-black mb-2">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/samcoteconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors"
              >
                linkedin.com/in/samcoteconsulting
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="mailto:samcote.consulting@gmail.com"
            className="inline-block px-8 py-4 bg-[#141414] text-white rounded-[30px] border-2 border-[#141414] font-semibold hover:bg-black transition-colors"
          >
            Envoyer un courriel
          </a>
        </div>
      </div>
    </section>
  )
}
