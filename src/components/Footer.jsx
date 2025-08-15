import React from 'react';
import FooterBrandColumn from './FooterElements/FooterBrandColumn';
import FooterQuickLinks from './FooterElements/FooterQuickLinks';
import FooterCustomerService from './FooterElements/FooterCustomerService';
import FooterNewsLetter from './FooterElements/FooterNewsLetter';
import FooterBottomBar from './FooterElements/FooterBottomBar';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          <FooterBrandColumn/>
          <FooterQuickLinks/>
          <FooterCustomerService/>
          <FooterNewsLetter/>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        <FooterBottomBar/>
      </div>
    </footer>
  );
}

export default Footer;