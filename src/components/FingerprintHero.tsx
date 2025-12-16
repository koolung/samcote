'use client'

export default function FingerprintHero() {
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
            The Fingerprint Initiative
          </h1>
        <p className="text-xl text-white leading-relaxed max-w-2xl">
        Empowering every generation to navigate digital life with confidence.
        <br></br><br></br>
        Contact us to learn more about our interactive games!          
        </p>
        </div>
      </div>
    </section>
  )
}
