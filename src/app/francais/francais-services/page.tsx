import Header from '@/components/Header'
import FrancaisServiceHero from '@/components/FrancaisServiceHero'
import SVGDividerBottom from '@/components/SVGDividerBottom'
import FrancaisServicesCards from '@/components/FrancaisServicesCards'
import FrancaisServicesCTA from '@/components/FrancaisServicesCTA'
import Footer from '@/components/Footer'

export default function FrancaisServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FrancaisServiceHero />
        <SVGDividerBottom />
        <FrancaisServicesCards />
        <FrancaisServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
