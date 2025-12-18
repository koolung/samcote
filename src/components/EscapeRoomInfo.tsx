'use client'

export default function EscapeRoomInfo() {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Images */}
          <div className="space-y-4">
            <img
              src="/images/escape-room/tablet.png"
              alt="Students playing escape room"
              className="w-full h-80 object-cover rounded-[20px]"
            />
            <img
              src="/images/escape-room/tablet2.png"
              alt="Classroom activity"
              className="w-full h-80 object-cover rounded-[20px]"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                What is it?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Just like in a real-life escape room, students embark on an adventure and attempt to advance the story by solving puzzles to find secret codes, one step at a time.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Activity Duration</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold">Approximate:</span> 60-90 minutes
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">Preparation & Instructions:</span> 10-15 minutes
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">Playing Time:</span> 60-75 minutes
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">Review:</span> 5-10 minutes
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Available Difficulty Levels</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Grade 3-6</li>
                <li>• Grade 7-10</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-2">Objective</h3>
              <p className="text-gray-700 leading-relaxed">
                To offer students and teachers the opportunity to come together virtually and experience a unique and certainly fun-filled intra-school experience!
              </p>
            </div>
          </div>
        </div>

        {/* How Section */}
        <div className="border-t-2 border-gray-300 pt-16 mb-16">
          <h2 className="text-4xl font-bold text-black mb-8">HOW?</h2>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              Everything takes place on our online platform, so there is no handling of objects and the activity can be done while respecting physical distancing.
            </p>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Three Different Game Options</h3>
              <ul className="space-y-3 ml-4">
                <li className="flex gap-3">
                  <span className="font-semibold min-w-fit">Class Challenge:</span>
                  <span>Full class participation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-fit">Small Group Challenge:</span>
                  <span>Teams of students work together</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-fit">Individual Challenge:</span>
                  <span>Students compete individually</span>
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">
              See our Game Options document to familiarize yourself with the required equipment and the gameplay of the three options.
            </p>

            <p className="leading-relaxed">
              The achievements of classes/teams/students will automatically be compiled into a best scores table unique to your school.
            </p>
          </div>
        </div>

        {/* Why Section */}
        <div>
          <h2 className="text-4xl font-bold text-black mb-8">WHY?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nearly 100 schools across Canada have played our virtual escape games "Under the Blue Moon" or "The Prestigious Reservation." At the helm of Mobile Escapes are Eric and Nick, two certified "retired" teachers. Here are a few testimonials that, in our opinion, justify our "why?":
          </p>
        </div>
      </div>
    </section>
  )
}
