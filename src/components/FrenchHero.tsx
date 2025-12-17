'use client'

export default function FrenchHero() {
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
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Votre guide pour un espace digital plus sécuritaire
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Aider les élèves, les parents, les enseignants et les aînés à adopter des pratiques en ligne respectueuses, sécuritaires et responsables          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-[50px] font-semibold hover:bg-gray-800 transition-colors duration-300">
              Découvrir les services
            </button>
            <button className="bg-black text-white w-full md:w-auto px-6 py-3 rounded-[50px] font-semibold hover:bg-gray-800 transition-colors duration-300">
              Qui est Sam Côté?
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
