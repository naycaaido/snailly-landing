import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeX, MarqueeY } from '../ui/Marquee'
import { Container } from '../ui/Container'

const TECH_STACK = [
  {
    name: 'Firebase',
    desc: 'Parent Notifications',
    img: '/firebase-logo.png',
  },
  {
    name: 'PostgreSQL',
    desc: 'Data Storage',
    img: '/postgresql-logo.png',
  },
  {
    name: 'Flask',
    desc: 'AI Service Backend',
    img: '/flask-logo.png',
  },
  {
    name: 'Express JS',
    desc: 'REST API Backend',
    img: '/express-logo.png',
  },
  {
    name: 'Azure OpenAI',
    desc: 'Intelligent Processing',
    img: '/azure.png',
  },
  {
    name: 'Azure Speech',
    desc: 'Audio Detection',
    img: '/speech-logo.png',
  },
  {
    name: 'MLLM Git-Large',
    desc: 'Image Captioning',
    img: '/face-logo.png',
  },
  {
    name: 'TensorFlow',
    desc: 'SVM Classification',
    img: '/tensor-logo.png',
  },
] as const

interface TechCardProps {
  name: string
  desc: string
  img: string
}

function TechCard({ name, desc, img }: TechCardProps) {
  return (
    <div className="flex h-[246px] w-[292px] shrink-0 flex-col items-start justify-start gap-3 rounded-[52px] bg-mock p-6 text-center">
      <img src={img} alt={name} className="h-[123px] w-[120px] object-contain" loading="lazy" decoding="async" />

      <div className="flex flex-col items-start gap-1">
        <h3 className="text-lg font-bold text-ink">{name}</h3>
        <p className="text-sm font-normal text-muted">{desc}</p>
      </div>
    </div>
  )
}

function TechColumn() {
  return (
    <div className="flex flex-col gap-6 py-4">
      {TECH_STACK.map((item) => (
        <TechCard key={item.name} {...item} />
      ))}
    </div>
  )
}

export function PoweredByTech() {
  return (
    <ScrollFade as="section">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Sisi Kiri: Content Header */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">Powered by Advanced AI &amp; Technology</h2>
          <p className="max-w-md text-base text-body">
            Discover the advanced technologies we use to deliver reliable, efficient, and scalable solutions.
          </p>
        </div>

        {/* Mobile: satu baris, auto-scroll horizontal */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] md:hidden">
          <MarqueeX>
            {TECH_STACK.map((item) => (
              <TechCard key={item.name} {...item} />
            ))}
          </MarqueeX>
        </div>

        {/* Desktop: 2 kolom marquee vertikal berlawanan arah, dengan gradient mask fade */}
        <div className="relative hidden h-[520px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:block">
          <div className="mx-auto grid w-fit grid-cols-1 gap-6 justify-items-center sm:grid-cols-2">
            <MarqueeY direction="down">
              <TechColumn />
            </MarqueeY>

            <MarqueeY direction="up">
              <TechColumn />
            </MarqueeY>
          </div>
        </div>
      </Container>
    </ScrollFade>
  )
}
