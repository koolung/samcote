import Header from '@/components/Header'
import ServiceHero from '@/components/ServiceHero'
import SVGDividerBottom from '@/components/SVGDividerBottom'
import ServicesCards from '@/components/ServicesCards'
import ServicesCTA from '@/components/ServicesCTA'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ServiceHero />
        <SVGDividerBottom />
        <ServicesCards />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  )
}
