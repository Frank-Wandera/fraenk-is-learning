export default function HeroShowcase() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Vehicle Experience</h2>
            <p className="text-lg text-gray-300 mb-6">
              Discover the perfect vehicle for your lifestyle. From sleek sports cars to comfortable family SUVs, we have something for everyone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Wide selection of premium vehicles</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Competitive pricing and financing options</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Expert support and guidance</span>
              </li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Explore Vehicles
            </button>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="text-9xl mb-4">🏎️</div>
              <p className="text-xl text-gray-300">Premium Cars Await</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
