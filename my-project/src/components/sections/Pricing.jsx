export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for beginners',
      features: ['5 Projects', 'Basic Support', '1 GB Storage', 'Community Access']
    },
    {
      id: 2,
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'For growing teams',
      features: ['50 Projects', 'Priority Support', '50 GB Storage', 'Advanced Analytics', 'API Access'],
      featured: true
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      description: 'For large organizations',
      features: ['Unlimited Projects', '24/7 Dedicated Support', 'Unlimited Storage', 'Custom Integration', 'SLA Guarantee']
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-12">Choose the perfect plan for your needs</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`rounded-lg p-8 transition-transform hover:scale-105 ${
                plan.featured 
                  ? 'bg-blue-600 text-white shadow-lg scale-105' 
                  : 'bg-white shadow-md'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={plan.featured ? 'text-blue-100' : 'text-gray-600'}>{plan.description}</p>
              <div className="my-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className={plan.featured ? 'text-blue-100' : 'text-gray-600'}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-2 px-4 rounded font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
