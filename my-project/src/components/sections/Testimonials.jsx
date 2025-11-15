export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechCorp',
      text: 'This platform has transformed the way we work. Highly recommended!',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      text: 'Best investment we made this year. The support team is amazing.',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Founder & CEO',
      text: 'Intuitive, powerful, and exactly what we needed to scale.',
      image: '👩‍🚀'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
