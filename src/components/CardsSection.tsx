interface CardItem {
  title: string
    image?: string
  details: string
}

export default function CardsSection() {
  const cards: CardItem[] = [
    {
      title: 'Digital Explorers',
      image: 'images/explore.webp',
      details:
        'Help students in Grades 3–6 build safe online habits and understand the basics of respectful digital behavior',
    },
    {
      title: 'Digital Detectives',
      image: 'images/detective.jpeg',
      details:
        'Support Grades 7–9 in thinking critically about online content, recognizing risks, and navigating tough digital situations.',
    },
    {
      title: 'Digital Leaders',
      image: 'images/leader.jpeg',
      details:
        'Empower high school students to lead with integrity online and explore the ethics of digital decision-making.',
    },
    {
      title: 'Online Conference for Seniors',
        image: 'images/senior.jpeg',
      details:
        'Give seniors the confidence and skills to browse, communicate, and protect themselves online with ease.',
    },
    {
      title: 'Customized Workshops',
        image: 'images/workshop.jpeg',
      details:
        'Create tailored sessions for parents, teachers, or students—focused on real-world challenges and practical digital habits. ',
    },
  ]

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl text-black mb-6 text-center">
        Workshops
      </h2>

      <p className="text-lg text-gray-700 mb-16 text-center max-w-2xl mx-auto">
        Our workshops help every generation build safe, respectful, and informed digital habits—through real-life stories, hands-on activities, and meaningful conversations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* First row - 3 cards */}
        {cards.slice(0, 3).map((card, index) => (
          <a
            key={index}
            href="/english/services"
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
