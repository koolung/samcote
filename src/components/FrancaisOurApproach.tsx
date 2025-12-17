'use client'

export default function FrancaisOurApproach() {
  const approaches = [
    'Des histoires parlantes qui reflètent des expériences vécues',
    'Des visuels engageants qui éveillent la curiosité et favorisent la connexion',
    'Des outils concrets que vous pouvez utiliser immédiatement'
  ]

  return (
    <section className="bg-[#121212] py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre approche</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          Nous donnons vie au bien-être numérique grâce à :
        </p>

        <div className="space-y-6 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="flex gap-6 items-start">
              <span className="text-2xl flex-shrink-0">🔘</span>
              <p className="text-gray-200 text-lg">
                {approach}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <p className="text-white text-xl font-semibold text-center">
            NOUVEAU:<br></br>ESSAYEZ NOS SALLES D'ÉVASION ÉDUCATIVES EN LIGNE!
          </p>
        </div>
      </div>
    </section>
  )
}
