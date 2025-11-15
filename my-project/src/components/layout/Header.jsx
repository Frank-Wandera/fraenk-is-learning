import viteLogo from '../../assets/vite.svg'
import reactLogo from '../../assets/react.svg'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <img src={viteLogo} alt="Vite logo" className="w-8 h-8 md:w-10 md:h-10" />
            <img src={reactLogo} alt="React logo" className="w-8 h-8 md:w-10 md:h-10" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My App</h1>
          </div>
          <nav className="flex gap-4 md:gap-8 flex-wrap justify-center">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">About</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors text-sm md:text-base">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
