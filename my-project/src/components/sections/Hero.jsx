import Button from '../common/Button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to My App</h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8">Build amazing things with our modern tools</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
