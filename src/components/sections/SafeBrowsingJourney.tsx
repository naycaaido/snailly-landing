import { ScrollFade } from '../ui/ScrollFade'

const STEPS = [
  {
    title: 'Exploring Online World',
    description: 'Children explore websites and social media freely for learning and entertainment.',
  },
  {
    title: 'Snailly Blocks Harmful Content',
    description:
      'Negative text, images, and videos are automatically detected and blocked in real time across websites and social media platforms.',
  },
  {
    title: 'Real-Time Notification',
    description: 'Parents instantly receive alerts whenever harmful content is detected.',
  },
  {
    title: 'Daily & Monthly Reports',
    description: "Parents get detailed activity reports, helping them monitor and guide children's internet usage.",
  },
]

export function SafeBrowsingJourney() {
  return (
    <section id="how-it-works" className="mx-auto max-w-[1300px] px-6 py-20">
      <ScrollFade className="mx-auto mb-16 flex max-w-[650px] flex-col items-center gap-3 text-center">
        <span className="text-xs font-medium tracking-wide text-body bg-[#F9F7F2] p-2 rounded-2xl">HOW DOES IT WORK</span>
        <h2 className="text-3xl font-bold md:text-[52px]">Safe Browsing Journey</h2>
      </ScrollFade>

      <div className="mx-auto flex max-w-[1300px] flex-col gap-16">
        {STEPS.map((step, i) => (
          <ScrollFade
            key={step.title}
            className={`flex flex-col items-center gap-10 md:flex-row md:gap-14 ${
              i % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="aspect-[607/456] w-full max-w-[500px] shrink-0 rounded-[24px] bg-primary" />
            <div className="flex flex-col gap-3">
              <span className="text-4xl font-bold text-ink/20">Step {i + 1}</span>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="max-w-[530px] text-base text-body">{step.description}</p>
            </div>
          </ScrollFade>
        ))}
      </div>
    </section>
  )
}
