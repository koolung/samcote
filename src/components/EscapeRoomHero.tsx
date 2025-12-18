'use client'

export default function EscapeRoomHero() {
  return (
    <section
      className="relative bg-cover bg-center h-96 md:h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/images/escape-room/hero.png)',
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Virtual Escape Rooms
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mt-4">
          Engage, Challenge, and Connect
        </p>
      </div>
    </section>
  )
}
