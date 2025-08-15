import React from 'react';
import HeroImage from './HeroElements/HeroImage';
import HeroTextContent from './HeroElements/HeroTextContent';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r to-blue-400 from-indigo-50 py-16 md:py-24 overflow-hidden">

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <HeroTextContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default HeroSection;