import Header from '@/components/Header'
import MeetSamHero from '@/components/MeetSamHero'
import Carousel from '@/components/Carousel'
import BioSection from '@/components/BioSection'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import SVGDividerMiddle from '@/components/SVGDividerMiddle'
import InstagramSection from '@/components/InstagramSection'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function MeetSamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#141414]">
      <Header />
      <main className="flex-grow">
        <MeetSamHero />
        <Carousel />
        <BioSection />
        <TestimonialCarousel />
        <SVGDividerMiddle />
        <InstagramSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
