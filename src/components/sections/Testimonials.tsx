import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeX } from '../ui/Marquee'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'

// Sourced from the approved Figma design (node 4688-3310)
const ROW_1 = [
  { name: 'Andi Cahyo', role: 'Father of 3, Surabaya', quote: "Snailly's intuitive system saved us countless hours. We highly recommend it for every Indonesian family", avatar: '/andi-cahyo.avif' },
  { name: 'Putri Adhiningrum', role: 'Mother of two, Yogyakarta', quote: 'The real-time detection and responsive blocking boosted our confidence instantly. A true game-changer!', avatar: '/putri.avif' },
  { name: 'Mursya Rinaldi', role: 'Father of one, Medan', quote: 'Snailly made our parental reports look premium without extra effort. Perfect blend of safety and usability', avatar: '/mursya-rinaldi.avif' },
]

const ROW_2 = [
  { name: 'Regina Wangi', role: 'Mother of two, Malang', quote: 'The attention to detail in Snailly is unmatched. Our kids love the polished feel', avatar: '/regina.avif' },
  { name: 'Dian Prakoso', role: 'Father of two, Jakarta', quote: "Harmful websites are automatically blocked and I get notified right away, so I can stay aware of my child's online activity", avatar: '/dian-prakoso.avif' },
  { name: 'Jannah Wibowo', role: 'Mother of one, Bandung', quote: 'Sleek, fast, and family-friendly. Snailly exceeded all our expectations in protecting children online', avatar: undefined as string | undefined },
]

function Card({ name, role, quote, avatar }: { name: string; role: string; quote: string; avatar?: string }) {
  return (
    <div className="flex w-[400px] shrink-0 flex-col gap-4 rounded-[20px] bg-cream p-8">
      <div className="flex gap-1 text-star" role="img" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-body">{quote}</p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt=""
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/20" />
        )}
        <div>
          <p className="text-sm font-semibold text-ink">{name}</p>
          <p className="text-xs text-body">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <ScrollFade as="section" id="testimonial">
      <Container>
        <div className="mx-auto mb-14 flex max-w-[600px] flex-col items-center gap-3 text-center">
          <Eyebrow>REVIEWS</Eyebrow>
          <h2 className="text-3xl font-semibold md:text-[52px] leading-[63px] tracking-[-2px]">Trusted by Parents Across Indonesia</h2>
        </div>

        <div className="flex flex-col gap-6">
          <MarqueeX>
            {ROW_1.map((t) => (
              <Card key={t.name} {...t} />
            ))}
          </MarqueeX>
          <MarqueeX direction="right">
            {ROW_2.map((t) => (
              <Card key={t.name} {...t} />
            ))}
          </MarqueeX>
        </div>
      </Container>
    </ScrollFade>
  )
}
