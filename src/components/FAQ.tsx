'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'What is digital citizenship?',
      answer:
        'It’s how we act online—being safe, respectful, and smart with tech.',
    },
    {
      question: 'Is it just about online safety?',
      answer:
        'Nope. It’s also about kindness, privacy, balance, and knowing what’s real or fake.',
    },
    {
      question: 'What makes someone a good digital citizen?',
      answer:
        ' They protect their info, think before posting, treat others with respect, take screen breaks, and don’t fall for scams.',
    },
    {
      question: 'Why are students struggling with technology today?',
      answer:
        'They’re online all the time but rarely shown how to use it safely. This can lead to poor sleep, stress, and habits that hurt learning and relationships.',
    },
    {
      question: 'What risks should parents and educators be concerned about?',
      answer:
        'Cyberbullying, sextortion, fake news, and social pressure can seriously affect students\' mental health and success at school.',
    },
    {
      question: 'What role can teachers and parents play?',
      answer:
        'Be present, set boundaries, and talk about screen habits. You don’t need to be tech experts—just consistent support makes a big impact.',
    },
  ]

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl text-black mb-12 text-center">
        Why Does Digital Citizenship Matter
      </h2>

      <div className="space-y-4 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[rgb(221 221 221)] overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full px-6 py-4 flex justify-center items-center bg-white hover:bg-gray-50 transition-colors duration-300"
            >
              <h3 className="text-2xl md:text-3xl text-black text-center">
                {faq.question}
              </h3>
              <svg
                className={`w-5 h-5 text-black transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7 7-7m0 0l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 py-4 bg-gray-50 border-t-2 border-black">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
