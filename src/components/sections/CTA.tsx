import { ScrollFade } from '../ui/ScrollFade'

export function CTA() {
  return (
    <ScrollFade className="mx-auto max-w-[1300px] px-6 py-10" id="cta">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 rounded-[24px] bg-cream p-10 md:flex-row md:p-14">
        <div>
          <h3 className="text-2xl font-bold">Still got questions?</h3>
          <p className="text-sm text-body">
            Our team is here to help you. Click the 'Get in touch' button and we'll be happy to answer your
            questions.
          </p>
        </div>
        <a
          href="#contact"
          className="w-fit shrink-0 rounded-full bg-primary px-8 py-4 text-sm font-medium text-white hover:bg-primary-dark"
        >
          Get in touch
        </a>
      </div>
    </ScrollFade>
  )
}
