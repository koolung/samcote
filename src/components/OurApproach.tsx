'use client'

export default function OurApproach() {
  const approaches = [
    'Relatable stories that reflect real experiences',
    'Visuals that spark curiosity and connection',
    'Hands-on tools you can use right away'
  ]

  return (
    <section className="bg-[#121212] py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-4xl md:max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Approach</h2>
        <p className="text-lg text-gray-300 mb-12 leading-relaxed">
          We bring digital wellness to life through:
        </p>

        <div className="space-y-6 mb-12">
          {approaches.map((approach, index) => (
            <div key={index} className="flex gap-6 items-start">
              <span className="text-2xl flex-shrink-0">⭕</span>
              <p className="text-gray-200 text-lg">
                {approach}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 border border-white/20 rounded-lg p-6">
          <p className="text-white text-xl font-semibold text-center">
            NEW PACKAGES INCLUDE ONLINE EDUCATIONAL ESCAPE ROOMS!
          </p>
        </div>
      </div>
    </section>
  )
}
