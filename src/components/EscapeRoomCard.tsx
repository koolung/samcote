'use client'

interface EscapeRoomCardProps {
  image: string
  title: string
  description: string
  difficulty: string
  targetTime: string
}

export default function EscapeRoomCard({
  image,
  title,
  description,
  difficulty,
  targetTime,
}: EscapeRoomCardProps) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="h-80 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-black">{title}</h3>

        <p className="text-gray-700 leading-relaxed">{description}</p>

        {/* Info Tags */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-gray-100 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-black">
              Difficulty: <span className="font-normal">{difficulty}</span>
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-full">
            <p className="text-sm font-semibold text-black">
              Time: <span className="font-normal">{targetTime}</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-6 px-6 py-3 bg-[#141414] text-white rounded-[30px] font-semibold hover:bg-black transition-colors">
          Try the Demo
        </button>
      </div>
    </div>
  )
}
