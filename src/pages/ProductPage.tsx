import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../stores/cartStore'
import { formatMalawianPrice } from '../lib/utils'
import toast from 'react-hot-toast'

// Demo products (same as HomePage)
const demoProducts = [
  {
    id: '1',
    name: 'Chitenge Fabric',
    description: 'Beautiful traditional Malawian chitenge fabric with vibrant African patterns. Perfect for traditional wear or home decoration.',
    price: 10.00,
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

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCartStore()
  
  const product = demoProducts.find(p => p.id === id)

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Return to products
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product)
    toast.success(`${product.name} added to cart!`)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Back to products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="aspect-square">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-2">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Price */}
          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold text-gray-900">
              {formatMalawianPrice(product.price)}
            </div>
            <div className="text-sm text-gray-500">
              ≈ ${product.price.toFixed(2)} USD
            </div>
          </div>

          {/* Stock Status */}
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              product.stock > 10 ? 'bg-green-500' : 
              product.stock > 0 ? 'bg-yellow-500' : 'bg-red-500'
            }`} />
            <span className="text-sm text-gray-600">
              {product.stock > 10 ? 'In Stock' : 
               product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </span>
          </button>

          {/* Product Features */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold mb-3">Product Features</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Authentic Malawian product</li>
              <li>✓ Supporting local artisans</li>
              <li>✓ High quality materials</li>
              <li>✓ Traditional craftsmanship</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}