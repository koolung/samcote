'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center"
    >
      <img
        src="/images/logo.webp"
        alt="Hero Image"
        className="w-[40%] max-w-4xl mb-8 "
      />
      <h1 className="text-4xl md:text-5xl text-black mb-6 leading-tight">
        Veuillez sélectionner la langue <br></br>
          Please select language
      </h1>

      <div className="flex gap-4 flex-wrap justify-center mt-6">
        <Link href="/francais" className="text-xl md:text-2xl bg-transparent text-black border-[#000000] border-solid border-2 rounded-[50px] px-10 py-5 font-semibold hover:bg-black hover:text-white transition-colors duration-300 inline-block">Français</Link>
        <Link href="/english" className="text-xl md:text-2xl bg-transparent text-black border-[#000000] border-solid border-2 rounded-[50px] px-10 py-5 font-semibold hover:bg-black hover:text-white transition-colors duration-300 inline-block">English</Link>
      </div>
    </section>
  )
}
