import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollFade } from '../ui/ScrollFade'
import { Container } from '../ui/Container'
import { Eyebrow } from '../ui/Eyebrow'
import { cx } from '../../lib/cx'

const FEATURES = {
  surfior: {
    tab: 'Surfior',
    title: 'Surfior — Safe Surfing Filter',
    description:
      "Snailly's built-in browser, the only way children browse the web and social media on a protected device. Page text is scanned by AI before it's shown, images stay hidden until they pass a vision check, and video is checked by title, transcript, and sampled frames.",
    tags: [],
    note: '',
    img: './surfior.png',
  },
  notifior: {
    tab: 'Notifior',
    title: 'Notifior — Explainable Parental Notification',
    description:
      'Every flagged item sends a push notification with a short explanation, plus Block or Allow actions built right into the notification. Every decision feeds back into the classifier as training data.',
    tags: [],
    note: '',
    img: './notifior.png',
  },
  reportior: {
    tab: 'Reportior',
    title: 'Reportior — Activity Insight and Reporting',
    description:
      "A dashboard of your child's activity in the same app, under your own login: safe/unsafe counts, most visited platforms, and a searchable history by date and category. One account manages multiple child profiles.",
    tags: [],
    note: '',
    img: './repotior.png',
  },
} as const

type FeatureKey = keyof typeof FEATURES

export function SystemFeatures() {
  const [active, setActive] = useState<FeatureKey>('surfior')
  const feature = FEATURES[active]

  return (
    <ScrollFade as="section" delay={0.05}>
      <Container>
        <div className="mx-auto mb-10 flex max-w-[650px] flex-col items-center gap-4 text-center">
          <Eyebrow>SYSTEM FEATURES</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">The System Behind Snailly</h2>
          <p className="text-sm text-body">
            Three integrated components that work together, from screening what your child sees to keeping you
            informed.
          </p>
        </div>

        <div className="mx-auto rounded-[32px] bg-cream p-10 md:p-14">
          <div role="tablist" aria-label="System features" className="mb-10 flex flex-wrap gap-3">
            {(Object.keys(FEATURES) as FeatureKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                id={`feature-tab-${key}`}
                aria-selected={active === key}
                aria-controls="feature-panel"
                onClick={() => setActive(key)}
                className={cx(
                  'rounded-full px-6 py-3 text-sm font-medium transition-colors',
                  active === key
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-white text-ink hover:bg-white/70',
                )}
              >
                {FEATURES[key].tab}
              </button>
            ))}
          </div>
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                role="tabpanel"
                id="feature-panel"
                aria-labelledby={`feature-tab-${active}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row justify-between items-center gap-10"
              >
                <div className="flex flex-col gap-4 md:max-w-[50%]">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-body">{feature.description}</p>

                  {feature.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-white px-3.5 py-2 text-xs font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {feature.note && <p className="text-sm font-medium text-primary">{feature.note}</p>}
                </div>

                <div className="relative w-full md:w-[50%] flex justify-center">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full max-w-[200px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </ScrollFade>
  )
}
