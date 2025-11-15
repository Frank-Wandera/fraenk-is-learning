import Button from '../common/Button'

export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-base md:text-lg text-blue-100 mb-8">Join thousands of users who are already using our platform</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
