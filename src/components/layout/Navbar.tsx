import { motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About us', href: '#about' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefit', href: '#benefit' },
  { label: 'Testimonial', href: '#testimonial' },
  { label: 'FAQs', href: '#faqs' },
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 flex h-[92px] w-full items-center justify-center bg-white/90 backdrop-blur px-10"
    >
      <div className="flex w-full max-w-[1800px] items-center justify-between px-6">
        <a href="#top" className="text-lg font-semibold text-ink">
          <img src="./snailly-logo.png" alt="" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden text-sm font-medium text-ink md:inline">
            Contact us
          </a>
          <a
            href="#cta"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Try Now!
          </a>
        </div>
      </div>
    </motion.header>
  )
}
