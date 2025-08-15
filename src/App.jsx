import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import HeroSection from './components/HeroSection';
import ShopByCategory from './components/ShopByCategory';
import ShopWithUs from './components/ShopWithUs';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import bagImg from './assets/images/bag.jpg';
import sandleImg from './assets/images/sandle.jpg';
import watchImg from './assets/images/watch.webp';
import capImg from './assets/images/cap.jpg'
import bootImg from './assets/images/running shoes.jpg';
import doveImg from './assets/images/shampoo.webp';
import headphoneImg from './assets/images/headphone.webp';
import robotImg from './assets/images/robot vacuum.avif';
import luxuryWatchImg from './assets/images/chrono watch.webp';
import tshirtImg from './assets/images/shirt.jpg';

const App = () => {
  const topProducts = [
    { id: 1, name: 'Vintage Tote Bag', price: '₹400.00', imageUrl: bagImg, rating: 3, reviewCount: 120 },
    { id: 2, name: 'Breezy Summer Floaters', price: '₹350.00', imageUrl: sandleImg, rating: 5, reviewCount: 98 },
    { id: 3, name: 'NeoFit Smartwatch', price: '₹1200.00', imageUrl: watchImg, rating: 4, reviewCount: 210 },
    { id: 4, name: 'Urban Style Cap', price: '₹150.00', imageUrl: capImg, rating: 4, reviewCount: 75 },
    { id: 5, name: "Men's Running Shoes", price: '₹800.00', imageUrl: bootImg, rating: 5, reviewCount: 160 },
  ];

  const shopProducts = [
    { id: 6, name: 'Vintage Tote Bag', price: '₹400.00', imageUrl: bagImg, rating: 3, reviewCount: 120 },
    { id: 7, name: 'Breezy Summer Floaters', price: '₹350.00', imageUrl: sandleImg, rating: 5, reviewCount: 98 },
    { id: 8, name: 'NeoFit Smartwatch', price: '₹1200.00', imageUrl: watchImg, rating: 4, reviewCount: 210 },
    { id: 9, name: 'Urban Style Cap', price: '₹150.00', imageUrl: capImg, rating: 4, reviewCount: 75 },
    { id: 10, name: "Men's Running Shoes", price: '₹800.00', imageUrl: bootImg, rating: 5, reviewCount: 160 },
    { id: 11, name: 'Four Reasons Shampoo Set', price: '₹200.00', imageUrl: doveImg, rating: 3, reviewCount: 88 },
    { id: 12, name: 'Philips Wireless Headphones', price: '₹600.00', imageUrl: headphoneImg, rating: 4, reviewCount: 132 },
    { id: 13, name: 'CleanBot Robot Vacuum', price: '₹2500.00', imageUrl: robotImg, rating: 1, reviewCount: 95 },
    { id: 14, name: 'Tissot Chrono Watch', price: '₹1500.00', imageUrl: luxuryWatchImg, rating: 5, reviewCount: 110 },
    { id: 15, name: 'Pure Cotton Tee', price: '₹300.00', imageUrl: tshirtImg, rating: 2, reviewCount: 140 },
  ];

  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <main>
        <ImageSlider />
        <HeroSection />
        <ShopByCategory />
        <ShopWithUs />
        <ProductSection title="Top Products" products={topProducts} />
        <ProductSection title="Shop" products={shopProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;