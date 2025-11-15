import Card from '../common/Card'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth interactions'
    },
    {
      id: 2,
      title: 'Responsive Design',
      description: 'Works perfectly on all devices and screen sizes'
    },
    {
      id: 3,
      title: 'Easy to Use',
      description: 'Intuitive interface that anyone can master'
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Our team is always here to help you succeed'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map(feature => (
            <Card key={feature.id}>
              <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
