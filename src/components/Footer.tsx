'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [openModal, setOpenModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null)

  return (
    <>
      <footer className="bg-black text-white border-t-2 border-black">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Samcote</h3>
              <p className="text-gray-300">
                Empowering digital confidence, safety, and well-being through
                interactive sessions for all age groups.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </Link> 
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.instagram.com/samcote.consulting" className="text-gray-300 hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/samcote" className="text-gray-300 hover:text-white">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Samcote. All rights reserved.
              </p>
              <Link href="https://www.bedfordwebservices.com" className="text-gray-300 text-sm text-white/50" target="_blank" rel="noopener noreferrer">
                 Built by <span className="underline">Bedford Web Services</span>
              </Link>
              <div className="flex gap-6 mt-4 md:mt-0 text-sm">
                <button onClick={() => setOpenModal('privacy')} className="text-gray-300 hover:text-white cursor-pointer">
                  Privacy Policy
                </button>
                <button onClick={() => setOpenModal('terms')} className="text-gray-300 hover:text-white cursor-pointer">
                  Terms of Service
                </button>
                <button onClick={() => setOpenModal('cookies')} className="text-gray-300 hover:text-white cursor-pointer">
                  Cookies
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Modal Overlay */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b flex justify-between items-center p-6">
              <h2 className="text-2xl font-bold text-black">
                {openModal === 'privacy' && 'Privacy Policy'}
                {openModal === 'terms' && 'Terms of Service'}
                {openModal === 'cookies' && 'Cookies Policy'}
              </h2>
              <button
                onClick={() => setOpenModal(null)}
                className="text-2xl text-gray-500 hover:text-black cursor-pointer"
              >
                ×
              </button>
            </div>

            <div className="p-6 text-gray-700 space-y-4">
              {openModal === 'privacy' && (
                <>
                  <p>
                    <strong>Last Updated: December 2025</strong>
                  </p>
                  <p>
                    At Sam Côté Consulting, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
                  </p>
                  <h3 className="font-bold text-black mt-4">Information We Collect</h3>
                  <p>
                    We may collect information about you in a variety of ways. The information we may collect on the site includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Personal identification information (name, email address, phone number, etc.)</li>
                    <li>Device information and cookies</li>
                    <li>Usage data and analytics</li>
                  </ul>
                  <h3 className="font-bold text-black mt-4">How We Use Your Information</h3>
                  <p>
                    Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Process your transactions and send related information</li>
                    <li>Respond to your inquiries and offer customer support</li>
                    <li>Generate analytics to improve our services</li>
                    <li>Contact you regarding administrative matters</li>
                  </ul>
                  <h3 className="font-bold text-black mt-4">Data Security</h3>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </>
              )}

              {openModal === 'terms' && (
                <>
                  <p>
                    <strong>Last Updated: December 2025</strong>
                  </p>
                  <p>
                    These Terms of Service govern your use of the Sam Côté Consulting website and services. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <h3 className="font-bold text-black mt-4">Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on Sam Côté Consulting's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                  <h3 className="font-bold text-black mt-4">Disclaimer</h3>
                  <p>
                    The materials on Sam Côté Consulting's website are provided on an 'as is' basis. Sam Côté Consulting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <h3 className="font-bold text-black mt-4">Limitations</h3>
                  <p>
                    In no event shall Sam Côté Consulting or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sam Côté Consulting's website.
                  </p>
                </>
              )}

              {openModal === 'cookies' && (
                <>
                  <p>
                    <strong>Last Updated: December 2025</strong>
                  </p>
                  <p>
                    Sam Côté Consulting uses cookies to enhance your experience on our website. This Cookies Policy explains what cookies are and how we use them.
                  </p>
                  <h3 className="font-bold text-black mt-4">What Are Cookies?</h3>
                  <p>
                    Cookies are small files of letters and numbers that we store on your browser or the hard drive of your device. Cookies contain information that is transferred to your device.
                  </p>
                  <h3 className="font-bold text-black mt-4">How We Use Cookies</h3>
                  <p>
                    We use cookies to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Understand how you use our website</li>
                    <li>Improve and optimize our services</li>
                    <li>Provide targeted content and advertisements</li>
                  </ul>
                  <h3 className="font-bold text-black mt-4">Types of Cookies</h3>
                  <p>
                    <strong>Essential Cookies:</strong> These are necessary for the website to function properly.
                  </p>
                  <p>
                    <strong>Analytics Cookies:</strong> These help us understand how visitors use our website.
                  </p>
                  <p>
                    <strong>Marketing Cookies:</strong> These are used to track visitors across websites and display targeted advertisements.
                  </p>
                  <h3 className="font-bold text-black mt-4">Managing Cookies</h3>
                  <p>
                    You can control and/or delete cookies as you wish. You can delete all cookies that are already on your device and set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit our website.
                  </p>
                </>
              )}
            </div>

            <div className="border-t p-6 flex justify-end gap-4">
              <button
                onClick={() => setOpenModal(null)}
                className="px-6 py-2 bg-gray-200 text-black rounded-[30px] font-semibold hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
