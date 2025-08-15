import React from 'react';
import { faShippingFast, faHeadset, faDollarSign, faShieldAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import ShopWithUsCard from './ShopWithUsElements/ShopWithUsCard';

function ShopWithUs() {
  const features = [
    { icon: faShippingFast, title: 'Free Shipping', description: 'On all orders above ₹500' },
    { icon: faHeadset, title: 'Support 24/7', description: 'Dedicated customer support' },
    { icon: faDollarSign, title: '100% Money Back', description: 'Easy returns and refunds' },
    { icon: faShieldAlt, title: 'Payment Secure', description: 'Secure payment gateway' },
    { icon: faTag, title: 'Discounts', description: 'Exclusive member discounts' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Our Store?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We're committed to excellence in every detail</p>
        </div>

        <ShopWithUsCard features={features} />
      </div>
    </section>
  );
}

export default ShopWithUs;