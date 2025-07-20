import React, { useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import { Product } from '../lib/types'

// Demo products with Malawian items
const demoProducts: Product[] = [
  {
    id: '1',
    name: 'Chitenge Fabric',
    description: 'Beautiful traditional Malawian chitenge fabric with vibrant African patterns. Perfect for traditional wear or home decoration.',
    price: 10.00, // USD price for conversion
    image_url: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Clothing',
    stock: 25,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Malawi Coffee Beans',
    description: 'Premium Arabica coffee beans from the highlands of Malawi. Rich, smooth flavor with notes of chocolate and citrus.',
    price: 5.00,
    image_url: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Handwoven Basket',
    description: 'Traditional handwoven basket made by local artisans. Perfect for storage or as a decorative piece.',
    price: 7.50,
    image_url: 'https://images.pexels.com/photos/4792065/pexels-photo-4792065.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Crafts',
    stock: 15,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Malawi Honey',
    description: 'Pure, natural honey harvested from the forests of Malawi. Rich in flavor and packed with natural goodness.',
    price: 4.00,
    image_url: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Traditional Wooden Sculpture',
    description: 'Hand-carved wooden sculpture representing traditional Malawian art. Each piece is unique and tells a story.',
    price: 15.00,
    image_url: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Crafts',
    stock: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Nsima Flour (Maize)',
    description: 'High-quality maize flour for making nsima, the staple food of Malawi. Finely ground and nutritious.',
    price: 3.00,
    image_url: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Food',
    stock: 100,
    created_at: new Date().toISOString()
  }
]

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(demoProducts.map(p => p.category)))]

  const filteredProducts = demoProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Malawi Market</h1>
        <p className="text-xl mb-6">Discover authentic Malawian products with local pricing in Kwacha</p>
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm rounded-lg p-4 inline-block">
          <p className="text-sm">🇲🇼 Supporting Local Artisans & Businesses</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors border ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}