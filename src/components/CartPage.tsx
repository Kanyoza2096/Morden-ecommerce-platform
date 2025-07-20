import React from 'react'
import { useCartStore } from '../stores/cartStore'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity } = useCartStore()
  
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  )

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-900 dark:text-white">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Your cart is empty</h2>
        <Link
          to="/"
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Shopping Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.product.image_url}
                alt={item.product.name}
                className="h-20 w-20 object-cover rounded"
              />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{item.product.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.product_id, parseInt(e.target.value))
                }
                className="rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-1"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeItem(item.product_id)}
                className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-4">
        <div className="flex justify-between text-xl font-semibold text-gray-900 dark:text-white">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link
          to="/checkout"
          className="block w-full bg-blue-600 dark:bg-blue-700 text-white text-center py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}