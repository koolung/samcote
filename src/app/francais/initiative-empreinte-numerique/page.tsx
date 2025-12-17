import Header from '@/components/Header'
import FrancaisFingerprintHero from '@/components/FrancaisFingerprintHero'
import SVGDividerLeftSlant from '@/components/SVGDividerLeftSlant'
import FrancaisOurMission from '@/components/FrancaisOurMission'
import SVGDividerRightSlant from '@/components/SVGDividerRightSlant'
import FrancaisOurApproach from '@/components/FrancaisOurApproach'
import FingerprintCarousel from '@/components/FingerprintCarousel'
import FrancaisFingerprintCTA from '@/components/FrancaisFingerprintCTA'
import Footer from '@/components/Footer'

export default function FrancaisFingerprintInitiativePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FrancaisFingerprintHero />
        <SVGDividerLeftSlant />
        <FrancaisOurMission />
        <SVGDividerRightSlant />
        <FrancaisOurApproach />
        <SVGDividerLeftSlant />
        <FingerprintCarousel />
        <FrancaisFingerprintCTA />
      </main>
      <Footer />
    </div>
  )
}
