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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
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
