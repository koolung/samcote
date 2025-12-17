import Header from '@/components/Header'
import FrancaisMeetSamHero from '@/components/FrancaisMeetSamHero'
import Carousel from '@/components/Carousel'
import FrancaisBioSection from '@/components/FrancaisBioSection'
import FrenchTestimonialCarousel from '@/components/FrenchTestimonialCarousel'
import InstagramSection from '@/components/InstagramSection'
import FrancaisFinalCTA from '@/components/FrancaisFinalCTA'
import Footer from '@/components/Footer'

export default function FrancaisMeetSamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#141414]">
      <Header />
      <main className="flex-grow">
        <FrancaisMeetSamHero />
        <Carousel />
        <FrancaisBioSection />
        <FrenchTestimonialCarousel />
        <InstagramSection />
        <FrancaisFinalCTA />
      </main>
      <Footer />
    </div>
  )
}
