import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-secondary py-4 px-4 md:px-8 lg:px-32 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="./assets/icons/logo-icon.svg" alt="Whitepace Logo" className="w-8 h-8" />
          <span className="text-white text-2xl font-bold">whitepace</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-white font-medium">
            <a href="#" className="hover:text-accent transition-colors">Products</a>
            <a href="#" className="hover:text-accent transition-colors">Solutions</a>
            <a href="#" className="hover:text-accent transition-colors">Resources</a>
            <a href="#" className="hover:text-accent transition-colors">Pricing</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="accent" className="bg-[#FFE492] text-[#043873] hover:bg-[#ffeaaa]">Login</Button>
            <Button variant="primary" rightIcon={<span>&rarr;</span>}>Try Whitepace free</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-secondary p-4 flex flex-col gap-4 shadow-lg border-t border-secondary-dark">
          <a href="#" className="text-white font-medium py-2">Products</a>
          <a href="#" className="text-white font-medium py-2">Solutions</a>
          <a href="#" className="text-white font-medium py-2">Resources</a>
          <a href="#" className="text-white font-medium py-2">Pricing</a>
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="accent" className="w-full bg-[#FFE492] text-[#043873]">Login</Button>
            <Button variant="primary" className="w-full" rightIcon={<span>&rarr;</span>}>Try Whitepace free</Button>
          </div>
        </div>
      )}
    </nav>
  );
};