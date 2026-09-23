import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeX } from '../ui/Marquee'
import { Container } from '../ui/Container'

// TODO: swap for real partner logo assets exported from Figma
const PARTNERS = ['unikom-logo.png', 'codelabs-logo.png', 'unikom-logo.png', 'codelabs-logo.png']

export function PartnerLogos() {
  return (
    <ScrollFade as="section">
      <Container py="py-12">
        <h2 className="mb-8 pb-7 text-center text-xl font-bold text-ink">Partner With</h2>
        <MarqueeX>
          {PARTNERS.map((name, i) => (
            <span key={`${name}-${i}`} className="w-[250px] shrink-0 text-center text-lg font-semibold text-body">
              <img src={`/${name}`} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
        </MarqueeX>
      </Container>
    </ScrollFade>
  )
}
