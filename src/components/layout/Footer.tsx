export function Footer() {
  return (
    <footer className="mx-auto max-w-[1300px] px-6 py-10">
      <div className="flex flex-col gap-6 border-t border-ink/10 pt-8">
        <a href="#top" className="flex w-fit items-center gap-2">
          <img src="./snailly-logo.png" alt="Snailly" className="h-8 w-auto" />
        </a>

        <div className="flex flex-col gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-body">© 2025 – Snailly</p>
          <div className="flex gap-6 text-xs text-body">
            <a href="#privacy" className="hover:text-ink">
              Privacy Policy
            </a>
            <a href="#cookies" className="hover:text-ink">
              Cookies
            </a>
            <a href="#terms" className="hover:text-ink">
              Terms &amp; Conditions
            </a>
          </div>
        </div>

        <p className="max-w-2xl text-sm text-body">
          Snailly helps families build a safe and meaningful digital space for children. With AI-powered tools, it
          supports parents in guiding and protecting online activities while encouraging kids to learn and explore
          with confidence.
        </p>
      </div>
    </footer>
  )
}
