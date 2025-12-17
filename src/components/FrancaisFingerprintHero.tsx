'use client'

export default function FrancaisFingerprintHero() {
  return (
    <section
      className="relative bg-cover bg-center py-32 px-4 md:px-12 lg:px-20"
      style={{
        backgroundImage: 'url(/images/fingerprint-initiative/fingerprint.webp)',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl text-white">
            L'initiative empreinte numérique
          </h1>
        <p className="text-xl text-white leading-relaxed max-w-2xl">
        Donner à chaque génération les moyens de naviguer dans la vie numérique avec confiance en intégrant l'apprentissage par le jeu!
        <br></br><br></br>
        Contactez-nous pour en connaître davantage sur nos salles d'évasion!
        </p>
        </div>
      </div>
    </section>
  )
}
