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
    title: 'For Schools',
    description: 'Empower students from grades 3–12 with engaging, age-appropriate sessions delivered with real-life examples and interactive activities:',
    image: '/images/services/service1.jpeg',
    points: [
      'cyberbullying' ,
      'Privacy' ,
      'Screen time' ,
      'Sexting' ,
      'Digital leadership' 
    ]
  },
  {
    id: 2,
    title: 'For Parents & Caregivers',
    description: 'Support families with practical tools to navigate:',
    image: '/images/services/service2.jpeg',
    points: [
      'Screen time',
      'App usage',
      'Online risks',
      'How to talk to kids about digital boundaries, consent, and respectful tech habits.'
    ]
  },
  {
    id: 3,
    title: 'For Seniors & Community Groups',
    description: 'Equip seniors with essential digital skills:',
    image: '/images/services/service3.jpeg',
    points: [
      'Recognizing scams',
      'Protecting privacy',
      'Building confidence using everyday tech tools like smartphones, email, and social media.',
    ]
  }
]

export default function ServicesCards() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl mb-12"> Interactive sessions that build digital confidence, safety, and well-being—for every age group.</h1>
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
