import Header from '@/components/Header'
import FrenchHero from '@/components/FrenchHero'
import SVGDividerTop from '@/components/SVGDividerTop'
import FAQ from '@/components/FAQ'
import SVGDividerMiddle from '@/components/SVGDividerMiddle'
import CardsSection from '@/components/CardsSection'
import VideoCTA from '@/components/VideoCTA'
import SVGDividerBottom from '@/components/SVGDividerBottom'
import Footer from '@/components/Footer'

export default function FrenchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <FrenchHero />
        <SVGDividerTop />
        <FAQ />
        <SVGDividerMiddle />
        <CardsSection />
        <VideoCTA />
        <SVGDividerBottom />
      </main>
      <Footer />
    </div>
  )
}
