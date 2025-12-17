import Header from '@/components/Header'
import FrancaisContactHero from '@/components/FrancaisContactHero'
import FrancaisContactInfo from '@/components/FrancaisContactInfo'
import Footer from '@/components/Footer'

export default function FrancaisContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <FrancaisContactHero />
        <FrancaisContactInfo />
      </main>
      <Footer />
    </div>
  )
}
