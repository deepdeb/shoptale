import React from 'react';
import HeaderTopbar from './HeaderElements/HeaderTopbar';
import HeaderSearchBar from './HeaderElements/HeaderSearchBar';
import HeaderIcons from './HeaderElements/HeaderIcons';
import HeaderNavigation from './HeaderElements/HeaderNavigation';
import HeaderCompanyLogo from './HeaderElements/HeaderCompanyLogo';

function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <HeaderTopbar />

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <HeaderCompanyLogo/>
        <HeaderSearchBar />
        <HeaderIcons />
      </div>

      <HeaderNavigation />
    </header>
  );
}

export default Header;