import { ScrollFade } from '../ui/ScrollFade'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { Button } from '../ui/Button'

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 2.1l4 4-4 4" />
      <path d="M3 12.2v-2a4 4 0 0 1 4-4h12.8" />
      <path d="M7 21.9l-4-4 4-4" />
      <path d="M21 11.8v2a4 4 0 0 1-4 4H4.2" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 17v5" />
      <path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
    </svg>
  )
}

const BENEFITS = [
  {
    title: 'Save Time and Reduce Stress',
    description: 'No more manual history checks. We automate the entire monitoring process for you.',
    Icon: RefreshIcon,
  },
  {
    title: 'Stay Ahead of New Threats',
    description: "You don't have to be a tech expert. Our smart AI detects the latest online threats automatically.",
    Icon: ShareIcon,
  },
  {
    title: 'Get Clear, Actionable Insights',
    description: 'Receive simple weekly reports that help you truly understand their digital world.',
    Icon: RefreshIcon,
  },
  {
    title: 'Go Beyond Simple Web Blocking',
    description: 'Our protection goes further by analyzing harmful text, images, and even video content.',
    Icon: PinIcon,
  },
]

export function Benefit() {
  return (
    <ScrollFade as="section" id="benefit">
      <Container className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Eyebrow className="w-fit">BENEFIT</Eyebrow>
            <h2 className="text-3xl font-semibold md:text-[52px] leading-[63px] tracking-[-2px]">
              Smarter and more{' '}
              <span className="relative inline-block">
                effective
                <img
                  src="/circle.png"
                  alt=""
                  className="pointer-events-none absolute -inset-x-1 -inset-y-40 hidden h-[calc(100%+20rem)] w-[calc(100%+20rem)] object-contain md:block"
                />
              </span>{' '}
              than manual monitoring.
            </h2>
          </div>

          <ul className="flex flex-col gap-5">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <benefit.Icon />
                </span>
                <div>
                  <p className="font-semibold text-ink">{benefit.title}</p>
                  <p className="text-sm text-body">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <Button
            href="https://play.google.com/store/apps/details?id=com.snailly.appname&pli=1"
            target="_blank"
            rel="noreferrer"
            className="w-fit"
          >
            Try Now!
          </Button>
        </div>

        <div className="aspect-square w-full rounded-[24px]">
          <img
            className="object-cover w-full h-full"
            src="./benefit-img.avif"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </Container>
    </ScrollFade>
  )
}
