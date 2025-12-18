'use client'

import EscapeRoomCard from './EscapeRoomCard'

const grade36Rooms = [
  {
    id: 1,
    title: "Zerobyte's Attack",
    description: 'Help our system defend against a cyber attack by solving puzzles related to online safety and digital citizenship.',
    image: '/images/escape-room/zerobyte.png',
    difficulty: 'Medium',
    targetTime: '60-75 min'
  },
  {
    id: 2,
    title: 'The Secret Garden',
    description: 'Explore a magical garden and solve nature-themed puzzles to reveal its hidden treasures.',
    image: '/images/escape-room/decrypt.png',
    difficulty: 'Easy',
    targetTime: '50-65 min'
  }
]

const grade710Rooms = [
  {
    id: 3,
    title: 'The Prestigious Reservation',
    description: 'Uncover secrets of an exclusive hotel by solving intricate puzzles and decoding mysterious messages.',
    image: '/images/escape-room/zerobyte.png',
    difficulty: 'Hard',
    targetTime: '70-85 min'
  },
  {
    id: 4,
    title: 'Code Breaker',
    description: 'Crack complex codes and cipher challenges to prevent a digital heist before time runs out.',
    image: '/images/escape-room/decrypt.png',
    difficulty: 'Hard',
    targetTime: '75-90 min'
  }
]

export default function EscapeRoomCardsSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Grade 3-6 Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            For Grades 3-6
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grade36Rooms.map((room) => (
              <EscapeRoomCard
                key={room.id}
                title={room.title}
                description={room.description}
                image={room.image}
                difficulty={room.difficulty}
                targetTime={room.targetTime}
              />
            ))}
          </div>
        </div>

        {/* Grade 7-10 Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
            For Grades 7-10
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {grade710Rooms.map((room) => (
              <EscapeRoomCard
                key={room.id}
                title={room.title}
                description={room.description}
                image={room.image}
                difficulty={room.difficulty}
                targetTime={room.targetTime}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
