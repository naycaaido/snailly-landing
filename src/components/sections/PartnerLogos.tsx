import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeX } from '../ui/Marquee'

// TODO: swap for real partner logo assets exported from Figma
const PARTNERS = ['unikom-logo.png', 'codelabs-logo.png', 'unikom-logo.png', 'codelabs-logo.png']

export function PartnerLogos() {
  return (
    <ScrollFade className="mx-auto max-w-[1300px] px-6 py-12">
      <p className="mb-8 text-center text-xl font-bold text-black pb-7">Partner With</p>
      <MarqueeX>
        {PARTNERS.map((name, i) => (
          <span key={`${name}-${i}`} className="w-[250px] shrink-0 text-center text-lg font-semibold text-body/50">
            <img src={name} alt="" />
          </span>
        ))}
      </MarqueeX>
    </ScrollFade>
  )
}
