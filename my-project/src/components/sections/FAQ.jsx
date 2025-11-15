import React from 'react'

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: 'How do I get started?',
      answer: 'Simply sign up for an account, choose your plan, and you\'ll be up and running in minutes. Our onboarding guide will walk you through everything.'
    },
    {
      id: 2,
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    },
    {
      id: 4,
      question: 'Is there a free trial?',
      answer: 'Yes! All new users get a 14-day free trial with full access to Pro features. No credit card required.'
    }
  ]

  const [openId, setOpenId] = React.useState(null)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(faq => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <span className="text-2xl text-blue-600">{openId === faq.id ? '−' : '+'}</span>
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
