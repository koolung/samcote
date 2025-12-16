import Header from '@/components/Header'
import FingerprintHero from '@/components/FingerprintHero'
import SVGDividerLeftSlant from '@/components/SVGDividerLeftSlant'
import OurMission from '@/components/OurMission'
import SVGDividerRightSlant from '@/components/SVGDividerRightSlant'
import OurApproach from '@/components/OurApproach'
import FingerprintCarousel from '@/components/FingerprintCarousel'
import FingerprintCTA from '@/components/FingerprintCTA'
import Footer from '@/components/Footer'

export default function FingerprintInitiativePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FingerprintHero />
        <SVGDividerLeftSlant />
        <OurMission />
        <SVGDividerRightSlant />
        <OurApproach />
        <SVGDividerLeftSlant />
        <FingerprintCarousel />
        <FingerprintCTA />
      </main>
      <Footer />
    </div>
  )
}
