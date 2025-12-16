import Header from '@/components/Header'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
