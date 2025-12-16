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
            Élevez Votre Littératie Numérique
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Habiliter votre organisation avec des initiatives d'empreinte numérique complètes et des habitudes en ligne plus sûres.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300">
              Commencer
            </button>
            <button className="bg-transparent text-black border-black border-2 rounded-lg px-6 py-3 font-semibold hover:bg-black hover:text-white transition-colors duration-300">
              En Savoir Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
