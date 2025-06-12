import React from 'react';

const Footer: React.FC = () => {
  console.log('Footer component loaded');

  return (
    <footer className="w-full bg-[#1F2937] py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-300 font-inter font-normal">
          © 2025 Eldarnwand Design System — Designed for scalability and clarity
        </p>
      </div>
    </footer>
  );
};

export default Footer;