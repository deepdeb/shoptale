import { faBasketball, faBook, faHome, faLaptop, faShoppingBag, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CategoryNameIcons from './CategoryElements/CategoryNameIcons';

function ShopByCategory() {

  const categories = [
    { name: 'Electronics', icon: faLaptop},
    { name: 'Fashion', icon: faTshirt },
    { name: 'Home & Kitchen', icon: faHome },
    { name: 'Sports', icon: faBasketball },
    { name: 'Books', icon: faBook },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Shop By Category</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our carefully curated collections</p>
        </div>

        <CategoryNameIcons categories={categories}/>
      </div>
    </section>
  );
}

export default ShopByCategory;