export default function Gallery() {
  const items = [
    {
      id: 1,
      name: 'Modern Sofa',
      image: 'https://images.unsplash.com/photo-1615820586684-1b0f3f1d7f9b?auto=format&fit=crop&w=800&q=80',
      description: 'Comfortable modern sofa with clean lines'
    },
    {
      id: 2,
      name: 'Classic Armchair',
      image: 'https://images.unsplash.com/photo-1549187774-b4b4f2b8b3c9?auto=format&fit=crop&w=800&q=80',
      description: 'Elegant armchair with plush cushioning'
    },
    {
      id: 3,
      name: 'Dining Table Set',
      image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80',
      description: 'Solid wood dining table with matching chairs'
    },
    {
      id: 4,
      name: 'Coffee Table',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      description: 'Minimalist coffee table with marble top'
    },
    {
      id: 5,
      name: 'Wooden Bookshelf',
      image: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?auto=format&fit=crop&w=800&q=80',
      description: 'Tall wooden bookshelf with adjustable shelves'
    },
    {
      id: 6,
      name: 'Designer Lamp',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      description: 'Stylish floor lamp to brighten any room'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Furniture Collection</h2>
        <p className="text-center text-gray-600 mb-12">Explore our curated selection of furniture pieces and decor</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
