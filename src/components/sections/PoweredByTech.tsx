import { ScrollFade } from '../ui/ScrollFade'
import { MarqueeY } from '../ui/Marquee'

// TODO: user is filling this list in manually (Firebase, PostgreSQL, Flask, Express, etc.) — placeholder for now
const COLUMN_1 = ['Firebase', 'PostgreSQL', 'Flask', 'Express JS']
const COLUMN_2 = ['Azure OpenAI', 'Azure Speech', 'MLLM Git-Large', 'TensorFlow']

function TechCard({ name }: { name: string }) {
  return (
    <div className="flex h-20 items-center justify-center rounded-2xl bg-cream text-sm font-semibold text-ink">
      {name}
    </div>
  )
}

export function PoweredByTech() {
  return (
    <ScrollFade className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Powered by Advanced AI &amp; Technology</h2>
        <p className="max-w-md text-sm text-body">
          Discover the technologies we use to deliver reliable, efficient, and scalable protection.
        </p>
      </div>

      <div className="grid h-[260px] grid-cols-2 gap-6">
        <MarqueeY direction="down">
          <div className="flex flex-col gap-6">
            {COLUMN_1.map((name) => (
              <TechCard key={name} name={name} />
            ))}
          </div>
        </MarqueeY>
        <MarqueeY direction="up">
          <div className="flex flex-col gap-6">
            {COLUMN_2.map((name) => (
              <TechCard key={name} name={name} />
            ))}
          </div>
        </MarqueeY>
      </div>
    </ScrollFade>
  )
}
