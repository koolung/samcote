'use client'

interface Testimonial {
  id: number
  quote: string
  author: string
  school: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The escape room was an incredible experience for our students. They were engaged, excited, and worked together beautifully to solve the puzzles.",
    author: "Teacher Sarah Mitchell",
    school: "Westwood Elementary School"
  },
  {
    id: 2,
    quote: "What a fantastic team-building activity! Our students talked about this experience for weeks afterward.",
    author: "Principal James Rodriguez",
    school: "Central Middle School"
  },
  {
    id: 3,
    quote: "The virtual format made it accessible for all our students. Everyone could participate and contribute to the success of their team.",
    author: "Teacher Emily Chen",
    school: "Riverside Secondary School"
  },
  {
    id: 4,
    quote: "Highly educational and entertaining! Our students applied critical thinking, problem-solving, and communication skills throughout the activity.",
    author: "Principal David Thompson",
    school: "Northridge Academy"
  }
]

export default function EscapeRoomTestimonials() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
          What Educators Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-[20px] p-8 border-l-4 border-[#141414]"
            >
              <p className="text-xl text-gray-800 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-black">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
