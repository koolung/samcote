'use client'

export default function OurMission() {
  const missions = [
    {
      title: 'Build healthier digital habits',
      description: 'Encouraging mindful screen time and positive online routines.'
    },
    {
      title: 'Stay safe and secure online',
      description: 'Teaching tools to protect privacy, avoid scams, and handle digital risks.'
    },
    {
      title: 'Create kinder, more inclusive digital spaces',
      description: 'Promoting empathy, respect, and responsible communication online.'
    }
  ]

  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Through engaging presentations and interactive workshops, we help students, caregivers, and communities:
        </p>

        <div className="space-y-8">
          {missions.map((mission, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full text-white">
                  <span className="text-2xl">⭕</span>
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
