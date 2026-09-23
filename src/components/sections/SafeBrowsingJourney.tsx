import { ScrollFade } from '../ui/ScrollFade'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { cx } from '../../lib/cx'

const STEPS = [
  {
    title: 'Exploring Online World',
    description: 'Children explore websites and social media freely for learning and entertainment.',
    img: './step-1.jpg'
  },
  {
    title: 'Snailly Blocks Harmful Content',
    description:
      'Negative text, images, and videos are automatically detected and blocked in real time across websites and social media platforms.',
      img: './step-2.jpg'
  },
  {
    title: 'Real-Time Notification',
    description: 'Parents instantly receive alerts whenever harmful content is detected.',
    img: './step-3.jpg'
  },
  {
    title: 'Daily & Monthly Reports',
    description: "Parents get detailed activity reports, helping them monitor and guide children's internet usage.",
    img: './step-4.jpg'
  },
]

export function SafeBrowsingJourney() {
  return (
    <section id="how-it-works">
      <Container>
        <ScrollFade className="mx-auto mb-16 flex max-w-[650px] flex-col items-center gap-3 text-center">
          <Eyebrow>HOW DOES IT WORK</Eyebrow>
          <h2 className="text-3xl font-bold md:text-[52px]">Safe Browsing Journey</h2>
        </ScrollFade>

        <div className="flex flex-col gap-16">
          {STEPS.map((step, i) => (
            <ScrollFade
              key={step.title}
              className={cx(
                'flex flex-col items-center gap-10 md:flex-row md:gap-14',
                i % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <div className="aspect-[607/456] w-full max-w-[500px] shrink-0 rounded-[24px] bg-primary">
                <img className="h-full w-full object-cover" src={step.img} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-4xl font-bold text-ink">Step {i + 1}</span>
                <h3 className="text-2xl font-bold">{step.title}</h3>
                <p className="max-w-[530px] text-base text-body">{step.description}</p>
              </div>
            </ScrollFade>
          ))}
        </div>
      </Container>
    </section>
  )
}
