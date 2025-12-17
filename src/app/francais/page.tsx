import Header from '@/components/Header'
import FrenchHero from '@/components/FrenchHero'
import SVGDividerTop from '@/components/SVGDividerTop'
import FrenchFAQ from '@/components/FrenchFAQ'
import SVGDividerMiddle from '@/components/SVGDividerMiddle'
import FrenchCardsSection from '@/components/FrenchCardsSection'
import FrenchVideoCTA from '@/components/FrenchVideoCTA'
import SVGDividerBottom from '@/components/SVGDividerBottom'
import Footer from '@/components/Footer'

export default function FrenchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <FrenchHero />
        <SVGDividerTop />
        <FrenchFAQ />
        <SVGDividerMiddle />
        <FrenchCardsSection />
        <FrenchVideoCTA />
        <SVGDividerBottom />
      </main>
      <Footer />
    </div>
  )
}
