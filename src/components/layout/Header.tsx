import React from 'react';

const Header: React.FC = () => {
  console.log('Header component loaded');

  return (
    <header 
      className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white py-20 md:py-28 lg:py-36 font-['Inter']"
      aria-labelledby="main-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          id="main-heading"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6"
        >
          Eldarnwand Design System
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl mx-auto opacity-90">
          A comprehensive guide to our visual identity, core principles, and component library.
        </p>
      </div>
    </header>
  );
};

export default Header;