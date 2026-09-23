import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer>
      <Container py="py-10">
        <div className="flex flex-col gap-6 pt-8">
          <a href="#top" className="flex w-fit items-center gap-2">
            <img src="./snailly-logo.png" alt="Snailly" className="h-15 w-auto" loading="lazy" decoding="async" />
          </a>

          <div className="flex flex-col gap-4 border-t border-ink/10 pt-6">
            <p className="text-xs text-body">© {new Date().getFullYear()} – Snailly</p>
          </div>

          <p className="max-w-2xl text-sm text-body">
            Snailly helps families build a safe and meaningful digital space for children. With AI-powered tools, it
            supports parents in guiding and protecting online activities while encouraging kids to learn and explore
            with confidence.
          </p>
        </div>
      </Container>
    </footer>
  )
}
