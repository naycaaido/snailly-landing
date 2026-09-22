import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { PartnerLogos } from './components/sections/PartnerLogos'
import { SafeBrowsingJourney } from './components/sections/SafeBrowsingJourney'
import { SystemFeatures } from './components/sections/SystemFeatures'
import { PoweredByTech } from './components/sections/PoweredByTech'
import { Benefit } from './components/sections/Benefit'
import { Testimonials } from './components/sections/Testimonials'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnerLogos />
        <SafeBrowsingJourney />
        <SystemFeatures />
        <PoweredByTech />
        <Benefit />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
