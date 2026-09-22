import { useState } from 'react'
import { ScrollFade } from '../ui/ScrollFade'

const FAQS = [
  {
    q: 'How do I get started with Snailly?',
    a: "It's simple! You install the Snailly for Parents app on your device, and the Snailly Kids app on your child's device. Then, just follow the easy on-screen instructions to link the two accounts.",
  },
  {
    q: 'What content does Snailly block?',
    a: 'Snailly uses advanced AI to detect and block a wide range of harmful content. This includes, but is not limited to, pornography, violence, hate speech, and malicious websites.',
  },
  {
    q: 'What platforms is this available on?',
    a: 'Snailly is currently available for Android and Desktop devices. We are working hard to expand our protection to other platforms in the near future.',
  },
  {
    q: 'Can my child uninstall the app?',
    a: "Yes, your child can uninstall the app. If they do, you will be notified instantly on your device so you're always aware.",
  },
  {
    q: "How do you handle my child's data and privacy?",
    a: "Your family's privacy is our absolute priority. We only collect the data necessary for protection. We will never sell your family's data to third parties.",
  },
  {
    q: 'Is Snailly free to use?',
    a: 'Snailly is mainly provided through partnerships with primary schools and educational institutions using a mass licensing model for students and families. For parents who want to access Snailly independently, we also offer affordable family subscription plans, starting with a free trial.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left text-base font-semibold text-ink"
        aria-expanded={open}
      >
        {q}
        <span className="ml-4 shrink-0 text-primary">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="mt-3 text-sm text-body">{a}</p>}
    </div>
  )
}

export function FAQ() {
  return (
    <ScrollFade className="mx-auto max-w-[1300px] px-6 py-20" id="faqs">
      <div className="mx-auto mb-14 flex max-w-[650px] flex-col items-center gap-3 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">FAQs</h2>
        <p className="text-sm text-body">
          Have questions about how Snailly works? Find the answers here. If you don't see your question, feel free
          to reach out to our team!
        </p>
      </div>

      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-x-16 md:grid-cols-2">
        {FAQS.map((faq) => (
          <FaqItem key={faq.q} {...faq} />
        ))}
      </div>
    </ScrollFade>
  )
}
