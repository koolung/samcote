'use client'

interface Service {
  id: number
  title: string
  description: string
  image: string
  points: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'Pour les écoles',
    description: 'Donnez aux élèves de la 3e à la 12e année les moyens de s\'épanouir grâce à des séances captivantes, adaptées à leur âge, et enrichies d\'exemples concrets et d\'activités interactives :',
    image: '/images/services/service1.jpeg',
    points: [
      'Cyberintimidation',
      'Vie privée',
      'Temps d\'écran',
      'Sextage',
      'Leadership numérique'
    ]
  },
  {
    id: 2,
    title: 'Pour les parents et les aidants',
    description: 'Soutenez les familles avec des outils concrets pour les aider à naviguer dans :',
    image: '/images/services/service2.jpeg',
    points: [
      'Le temps d\'écran',
      'L\'utilisation des applications',
      'Les risques en ligne',
      'Comment parler aux enfants des limites numériques, du consentement et des habitudes technologiques respectueuses.'
    ]
  },
  {
    id: 3,
    title: 'Pour les aînés et les groupes communautaires',
    description: 'Offrez aux aînés et aux membres de la communauté des connaissances accessibles et des conseils pratiques pour :',
    image: '/images/services/service3.jpeg',
    points: [
      'Naviguer sur Internet en toute sécurité',
      'Reconnaître les fraudes et arnaques en ligne',
      'Communiquer avec leurs proches',
      'Utiliser les outils numériques avec plus de confiance et d\'autonomie.'
    ]
  }
]

export default function FrancaisServicesCards() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl mb-12">Séances interactives qui renforcent la confiance numérique, la sécurité et le bien-être — pour tous les groupes d'âge.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-transparent">
              {/* Image with rounded border */}
              <div className="mb-6 overflow-hidden rounded-[40px] h-64 md:h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
            
              <div>
                <h3 className="text-2xl md:text-3xl text-black mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Dot Points */}
                <ul className="space-y-3">
                  {service.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
