return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
              {product.category}
            </span>
            <div className={`flex items-center space-x-1 text-xs ${
              product.rating >= 4 ? 'text-green-600' : 
              product.rating >= 3 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
            </div>
          </div>
          
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {formatMalawianPrice(product.price)}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                ≈ ${product.price.toFixed(2)} USD
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm transition-colors">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );