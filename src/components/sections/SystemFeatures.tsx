import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollFade } from '../ui/ScrollFade'

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
    <ScrollFade className="mx-auto max-w-[1300px] px-6 py-20" delay={0.05}>
      <div className="mx-auto mb-10 flex max-w-[650px] flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-body">SYSTEM FEATURES</span>
        <h2 className="text-3xl font-bold md:text-4xl">The System Behind Snailly</h2>
        <p className="text-sm text-body">
          Three integrated components that work together, from screening what your child sees to keeping you
          informed.
        </p>
      </div>

      <div className="mx-auto max-w-[1300px] rounded-[32px] bg-cream p-10 md:p-14">
        <div className="mb-10 flex flex-wrap gap-3">
          {(Object.keys(FEATURES) as FeatureKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                active === key ? 'bg-primary text-white' : 'bg-white text-ink hover:bg-white/70'
              }`}
            >
              {FEATURES[key].tab}
            </button>
          ))}
        </div>
        {/* Hapus flex justify-between dari sini, pindahkan ke dalam motion.div */}
        <div>
          <AnimatePresence mode="wait">
            {/* Bungkus text dan image dalam satu motion.div agar transisi mode="wait" mulus */}
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              // Flex dipindah ke sini
              className="flex flex-col md:flex-row justify-between items-center gap-10" 
            >
              {/* Bagian Teks */}
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

              {/* Bagian Gambar */}
              <div className="relative w-full md:w-[50%] flex justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full max-w-[200px] object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ScrollFade>
  )
}
