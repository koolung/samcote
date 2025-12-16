export default function VideoCTA() {
  return (
    <section id="cta" className="relative py-24 mx-6 md:mx-[100px] overflow-hidden rounded-[30px] md:rounded-[50px]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/videos/rocket.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.3)]"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
          Ready to Launch Your Classroom or Community into Safer Digital Habits?
        </h2>

        <button className="bg-black text-white w-full md:w-auto px-8 py-3 rounded-[30px] hover:bg-gray-200 transition-colors duration-300">
          Contact Us To Get Started Today
        </button>
      </div>
    </section>
  )
}
