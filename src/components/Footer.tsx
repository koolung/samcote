import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Samcote</h3>
            <p className="text-gray-300">
              A modern website showcasing clean design and excellent user
              experience.
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
              <li>
                <Link
                  href="#features"
                  className="text-gray-300 hover:text-white"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
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
              <Link href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
