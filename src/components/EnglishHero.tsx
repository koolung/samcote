'use client'

export default function EnglishHero() {
  return (
    <section id="home" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Logo on Left */}
        <div className="flex-1">
          <img
            src="/images/logo.webp"
            alt="Sam Côté Consulting"
            className="w-full max-w-md"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-6xl text-black mb-6 leading-tight">
            Your guide to safer online spaces
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Helping students, parents, teachers, and seniors adopt respectful, safe, and responsible online practices          
            </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-[50px] font-semibold hover:bg-gray-800 transition-colors duration-300">
              Explore Services
            </button>
            <button className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-[50px] font-semibold hover:bg-gray-800 transition-colors duration-300">
              Meet Sam Côté
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
