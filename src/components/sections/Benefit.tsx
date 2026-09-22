import { ScrollFade } from '../ui/ScrollFade'

const BENEFITS = [
  {
    title: 'Save Time and Reduce Stress',
    description: 'No more manual history checks. We automate the entire monitoring process for you.',
  },
  {
    title: 'Stay Ahead of New Threats',
    description: "You don't have to be a tech expert. Our smart AI detects the latest online threats automatically.",
  },
  {
    title: 'Get Clear, Actionable Insights',
    description: 'Receive simple weekly reports that help you truly understand their digital world.',
  },
  {
    title: 'Go Beyond Simple Web Blocking',
    description: 'Our protection goes further by analyzing harmful text, images, and even video content.',
  },
]

export function Benefit() {
  return (
    <ScrollFade className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2" id="benefit">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-medium tracking-wide text-body">BENEFIT</span>
          <h2 className="text-3xl font-bold md:text-4xl">
            Smarter and more effective than manual monitoring.
          </h2>
        </div>

        <ul className="flex flex-col gap-5">
          {BENEFITS.map((benefit, i) => (
            <li key={benefit.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-ink">{benefit.title}</p>
                <p className="text-sm text-body">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <a href="#cta" className="w-fit rounded-full bg-primary px-8 py-4 text-sm font-medium text-white hover:bg-primary-dark">
          Try Now!
        </a>
      </div>

      <div className="aspect-square w-full rounded-[24px] bg-cream" />
    </ScrollFade>
  )
}
