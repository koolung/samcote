'use client'

export default function FrancaisOurMission() {
  const missions = [
    {
      title: 'Adopter des habitudes numériques plus saines',
      description: 'En encourageant une utilisation réfléchie des écrans et des routines positives en ligne.'
    },
    {
      title: 'Rester en sécurité sur le Web',
      description: 'En enseignant des outils pour protéger la vie privée, éviter les arnaques et faire face aux risques numériques.'
    },
    {
      title: 'Créer des espaces numériques plus bienveillants et inclusifs',
      description: 'En favorisant l\'empathie, le respect et une communication responsable en ligne.'
    }
  ]

  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Notre mission</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          À travers des présentations captivantes et des ateliers interactifs, nous aidons les élèves, les aidants et les communautés à :
        </p>

        <div className="space-y-8">
          {missions.map((mission, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full text-white">
                  <span className="text-2xl">🔘</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {mission.title}
                </h3>
                <p className="text-gray-700">
                  {mission.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
