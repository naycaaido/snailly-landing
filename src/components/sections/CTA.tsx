import { ScrollFade } from '../ui/ScrollFade'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'

export function CTA() {
  return (
    <ScrollFade as="section" id="cta">
      <Container py="py-10">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[24px] bg-cream p-10 md:flex-row md:p-14">
          <div>
            <h2 className="text-2xl font-bold">Still got questions?</h2>
            <p className="text-sm text-body">
              Our team is here to help you. Click the 'Get in touch' button and we'll be happy to answer your
              questions.
            </p>
          </div>
          <Button href="mailto:ariq@codelabspace.or.id" className="shrink-0">
            Get in touch
          </Button>
        </div>
      </Container>
    </ScrollFade>
  )
}
