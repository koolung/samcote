interface CardItem {
  title: string
    image?: string
  details: string
}

export default function FrenchCardsSection() {
  const cards: CardItem[] = [
    {
      title: 'Explorateurs du numérique',
      image: 'images/explore.webp',
      details:
        'Aidez les élèves de la 3e à la 6e année à adopter des habitudes en ligne sécuritaires et à comprendre les bases d’un comportement numérique respectueux.',
    },
    {
      title: 'Détectives du numérique',
      image: 'images/detective.jpeg',
      details:
        'Aidez les élèves de la 7e à la 9e année à développer leur pensée critique face au contenu en ligne, à reconnaître les risques et à naviguer des situations numériques complexes.',
    },
    {
      title: 'Leaders du numérique',
      image: 'images/leader.jpeg',
      details:
        'Donnez aux élèves du secondaire les moyens de faire preuve d’intégrité en ligne et d’explorer l’éthique liée à la prise de décisions numériques.',
    },
    {
      title: 'Conférence en ligne pour les aînés',
        image: 'images/senior.jpeg',
      details:
        'GOffrez aux aînés la confiance et les compétences nécessaires pour naviguer, communiquer et se protéger en ligne en toute simplicité.',
    },
    {
      title: 'Ateliers personnalisés',
        image: 'images/workshop.jpeg',
      details:
        'Créez des séances sur mesure pour les parents, les enseignants ou les élèves — axées sur des défis concrets et des habitudes numériques pratiques.',
    },
  ]

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl text-black mb-6 text-center">
        Ateliers
      </h2>

      <p className="text-lg text-gray-700 mb-16 text-center max-w-2xl mx-auto">
        Nos ateliers aident chaque génération à développer des habitudes numériques sécuritaires, respectueuses et éclairées — grâce à des récits vécus, des activités pratiques et des conversations significatives.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* First row - 3 cards */}
        {cards.slice(0, 3).map((card, index) => (
          <a
            key={index}
            href="/francais/francais-services"
            className="group block overflow-hidden duration-300 rounded-3xl"
          >
            {card.image && (
              <div className="overflow-hidden h-55 rounded-3xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-3xl text-black mb-3 text-center group-hover:underline group-hover:underline-offset-2 transition-all duration-300"
                style={{textDecorationThickness: '2px'}}
              >{card.title}</h3>
              <p className="text-gray-700 text-center">{card.details}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Second row - 2 cards centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
        {cards.slice(3).map((card, index) => (
          <a
            key={index + 3}
            href="/english/services"
            className="group block overflow-hidden duration-300 rounded-3xl"
          >
            {card.image && (
              <div className="overflow-hidden h-55 rounded-3xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-3xl group-hover:scale-110  transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-3xl text-black mb-3 text-center group-hover:underline group-hover:underline-offset-2 transition-all duration-300"
                style={{textDecorationThickness: '2px'}}
              >{card.title}</h3>
              <p className="text-gray-700 text-center">{card.details}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
