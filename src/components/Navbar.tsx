import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '../stores/cartStore'
import { DarkModeToggle } from './DarkModeToggle'

export const Navbar: React.FC = () => {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Malawi Market</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            
            <Link
              to="/auth"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <UserIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Account</span>
            </Link>
            
            <Link
              to="/cart"
              className="relative flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}