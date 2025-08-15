export default function ProductInfo({product, onRenderStars}){
    return (
              <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {onRenderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500">({product.reviewCount})</span>
        </div>

        <p className="text-xl font-bold text-gray-900 mb-5">{product.price}</p>

        {/* Animated Add to Cart Button - Hover effects only here */}
        <div className="flex justify-end">
          <button className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full hover:w-32 transition-all duration-300 ease-in-out overflow-hidden group/btn">
            {/* Plus icon - moves left on hover */}
            <span className="absolute text-xl font-bold group-hover/btn:left-3 transition-all duration-300">+</span>

            {/* Text - appears on hover */}
            <span className="pl-8 pr-3 whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 text-sm font-medium">
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    )
}