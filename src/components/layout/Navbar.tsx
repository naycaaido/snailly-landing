import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About us', href: '#about' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefit', href: '#benefit' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQs', href: '#faqs' },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <motion.line x1="4" x2="20" animate={{ y1: open ? 12 : 7, y2: open ? 12 : 7, rotate: open ? 45 : 0 }} style={{ originX: '12px', originY: '12px' }} transition={{ duration: 0.2 }} />
      <motion.line x1="4" x2="20" y1="12" y2="12" animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
      <motion.line x1="4" x2="20" animate={{ y1: open ? 12 : 17, y2: open ? 12 : 17, rotate: open ? -45 : 0 }} style={{ originX: '12px', originY: '12px' }} transition={{ duration: 0.2 }} />
    </svg>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <motion.header
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur"
    >
      <div className="flex h-[92px] w-full max-w-[1800px] mx-auto items-center justify-between px-6 md:px-10">
        <a href="#top" className="text-lg font-semibold text-ink" onClick={() => setOpen(false)}>
          <img className="w-[100px] h-full" src="./snailly-logo.png" alt="" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="mailto:ariq@codelabspace.or.id" className="text-sm font-medium text-ink hover:text-primary">
            Contact us
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.snailly.appname&pli=1"
            target='_blank'
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Try Now!
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-ink/10 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-cream"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:ariq@codelabspace.or.id"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-cream"
              >
                Contact us
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.snailly.appname&pli=1"
                target='_blank'
                onClick={() => setOpen(false)}
                className="mt-2 w-full rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                Try Now!
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
