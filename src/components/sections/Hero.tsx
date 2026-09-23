import { motion, type Variants } from 'framer-motion'

const BULLETS = [
  'Automatically detects harmful content with AI',
  "Receive weekly reports of your child's online activity",
  'Get real-time alerts for suspicious websites',
]

const textGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const textItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Circle highlight appears automatically once the text group has finished:
// delayChildren(0.1) + staggerChildren(0.15) * 3 items + last item duration(0.5)
const CIRCLE_DELAY = 0.1 + 0.15 * 3 + 0.5

const imageGroup: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const imageItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section id="top" className="mx-auto flex max-w-[1300px] flex-col items-center gap-16 px-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
      <motion.div
        variants={textGroup}
        initial="hidden"
        animate="visible"
        className="flex max-w-[688px] flex-col gap-8"
      >
        <motion.h1 variants={textItem} className="relative text-4xl font-bold leading-tight md:text-[48px]">
          Let Your Kids Explore{' '}
          <span className="relative inline-block">
            Safely
            <motion.img
              src="/circle.png"
              alt=""
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: CIRCLE_DELAY, ease: 'easeOut' }}
              className="pointer-events-none absolute -inset-x-3 -inset-y-8 hidden h-[calc(100%+4rem)] w-[calc(100%+4rem)] object-contain md:block"
            />
          </span>
          , While You Stay Worry-Free.
        </motion.h1>

        <motion.ul variants={textItem} className="flex flex-col gap-4">
          {BULLETS.map((bullet) => (
            <li key={bullet} className="flex items-center gap-3 text-base font-semibold text-body">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </motion.ul>

        <motion.a
          variants={textItem}
          href="#cta"
          className="w-fit rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Start Protecting Now
        </motion.a>
      </motion.div>

      <motion.div
        variants={imageGroup}
        initial="hidden"
        animate="visible"
        className="relative aspect-[584/632] w-full max-w-[584px] shrink-0 overflow-hidden"
      >
        {/* 1. background */}
        <motion.div variants={imageItem} className="absolute inset-0">
          <img className='h-full w-full object-cover rounded-4xl' src="./green-bg.png" alt="" />
        </motion.div>

        {/* 2. phone mockup — placeholder, swap for real export */}
        <motion.div
          variants={imageItem}
          className="absolute left-[27%] top-[21%] flex h-[90%] w-[48%] items-center justify-center rounded-[28px]"
        >
          <img className="h-full w-full object-contain" src="./phone-mockup.png" alt="" />
        </motion.div>

        {/* 3. Overlay Mockup 4 */}
        <motion.div
          variants={imageItem}
          className="absolute left-[33%] top-[35%] flex h-[7%] w-[60%] items-center justify-center rounded-2xl"
        >
          <img src="./overlay-mock-4.png" alt="" />
        </motion.div>

        {/* 4. Overlay Mockup 3 */}
        <motion.div
          variants={imageItem}
          className="absolute left-[11%] top-[76%] flex h-[9%] w-[59%] items-center justify-center rounded-2xl"
        >
          <img src="./overlay-mock-3.png" alt="" />
        </motion.div>
      </motion.div>
    </section>
  )
}
