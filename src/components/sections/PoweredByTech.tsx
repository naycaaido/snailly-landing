import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeX, MarqueeY } from '../ui/Marquee'

const TECH_STACK = [
  {
    name: 'Firebase',
    desc: 'Parent Notifications',
    img: 'https://framerusercontent.com/images/oYG9WuBvCjJJKQnu1KnryzPU.png',
  },
  {
    name: 'PostgreSQL',
    desc: 'Data Storage',
    img: 'https://framerusercontent.com/images/qc36C3Cvh7W1VQTSi602D0vas.png',
  },
  {
    name: 'Flask',
    desc: 'AI Service Backend',
    img: 'https://framerusercontent.com/images/faQGiBXMov35YF3HH5h9pt15Vf0.png',
  },
  {
    name: 'Express JS',
    desc: 'REST API Backend',
    img: 'https://framerusercontent.com/images/2UIC1P9bGYdQcM8NNMiVwUajo.png',
  },
  {
    name: 'Azure OpenAI',
    desc: 'Intelligent Processing',
    img: 'https://framerusercontent.com/images/gytX8atTL4Jqj7ncOZCjZ9iS4.png',
  },
  {
    name: 'Azure Speech',
    desc: 'Audio Detection',
    img: 'https://framerusercontent.com/images/lryIn8wAXhDpNaSy5ImejLJn64.png',
  },
  {
    name: 'MLLM Git-Large',
    desc: 'Image Captioning',
    img: 'https://framerusercontent.com/images/ryFyQ6nHkfcWnK3yAJhmj2seozc.png',
  },
  {
    name: 'TensorFlow',
    desc: 'SVM Classification',
    img: 'https://framerusercontent.com/images/xWRtoBJhrQ2mLx09TQDFg4trlo.png',
  },
] as const

interface TechCardProps {
  name: string
  desc: string
  img: string
}

function TechCard({ name, desc, img }: TechCardProps) {
  return (
    <div className="flex h-[246px] w-[292px] shrink-0 flex-col items-start justify-start gap-3 rounded-[52px] bg-[#FAFAFA] p-6 text-center">
      <img src={img} alt={name} className="h-[123px] w-[120px] object-contain" />

      <div className="flex flex-col items-start gap-1">
        <h3 className="text-lg font-bold text-ink">{name}</h3>
        <p className="text-sm font-normal text-[#6D6D6D]">{desc}</p>
      </div>
    </div>
  )
}

export function PoweredByTech() {
  return (
    <ScrollFade className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
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
            <TechCard key={item.name} name={item.name} desc={item.desc} img={item.img} />
          ))}
        </MarqueeX>
      </div>

      {/* Desktop: 2 kolom marquee vertikal berlawanan arah, dengan gradient mask fade */}
      <div className="relative hidden h-[520px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:block">
      <div className="mx-auto grid w-fit grid-cols-1 gap-6 justify-items-center sm:grid-cols-2">
        <MarqueeY direction="down">
          <div className="flex flex-col gap-6 py-4">
            {TECH_STACK.map((item) => (
              <TechCard key={item.name} name={item.name} desc={item.desc} img={item.img} />
            ))}
          </div>
        </MarqueeY>

        <MarqueeY direction="up">
          <div className="flex flex-col gap-6 py-4">
            {TECH_STACK.map((item) => (
              <TechCard key={`col2-${item.name}`} name={item.name} desc={item.desc} img={item.img} />
            ))}
          </div>
        </MarqueeY>
      </div>
    </div>
    </ScrollFade>
  )
}