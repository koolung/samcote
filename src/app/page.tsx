import '@/styles/globals.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SplashScreen />
      <Header />
      <main className="flex-grow" style={{border: 'none !important'}}>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
