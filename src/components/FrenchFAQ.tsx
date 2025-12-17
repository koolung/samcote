'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FrenchFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: 'Qu\'est-ce que la citoyenneté numérique ?',
      answer:
        'C\'est la façon dont nous agissons en ligne — en étant prudents, respectueux et avisés avec la technologie.',
    },
    {
      question: 'Est-ce seulement une question de sécurité en ligne?',
      answer:
        'Non. C\'est aussi une question de bienveillance, de respect de la vie privée, d\'équilibre et de discernement entre le vrai et le faux.',
    },
    {
      question: 'Qu\'est-ce qui fait de quelqu\'un un bon citoyen numérique?',
      answer:
        'Il protège ses informations, réfléchit avant de publier, traite les autres avec respect, fait des pauses d\'écran et ne se laisse pas piéger par des arnaques.',
    },
    {
      question: 'Pourquoi les élèves ont-ils du mal avec la technologie aujourd\'hui?',
      answer:
        'Ils sont en ligne en permanence, mais on leur montre rarement comment l\'utiliser de façon sécuritaire. Cela peut entraîner un mauvais sommeil, du stress et des habitudes qui nuisent à l\'apprentissage et aux relations.',
    },
    {
      question: 'Quels risques devraient inquiéter les parents et les éducateurs ?',
      answer:
        'La cyberintimidation, la sextorsion, les fausses nouvelles et la pression sociale peuvent avoir un impact sérieux sur la santé mentale des élèves et leur réussite scolaire.',
    },
    {
      question: 'Quel rôle les enseignants et les parents peuvent-ils jouer ?',
      answer:
        'Être présents, poser des limites et parler des habitudes d\'écran. Il n\'est pas nécessaire d\'être expert en technologie — un soutien constant fait toute la différence.',
    },
  ]

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl md:text-5xl text-black mb-12 text-center">
        Pourquoi la citoyenneté numérique est-elle si importante?
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
