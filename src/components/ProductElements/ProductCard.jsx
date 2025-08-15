import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ProductImage from './ProductSubElements/ProductImage';
import ProductWishList from './ProductSubElements/ProductWishList';
import ProductInfo from './ProductSubElements/ProductInfo';

function ProductCard({ product }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        />
      );
    }
    return stars;
  };

  return (
    <div className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <ProductImage product={product} />
      <ProductInfo product={product} onRenderStars={renderStars}/>
      <ProductWishList/>
    </div>
  );
}

export default ProductCard;