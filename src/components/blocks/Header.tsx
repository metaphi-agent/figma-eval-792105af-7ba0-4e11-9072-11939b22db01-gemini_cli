import React, { useState } from 'react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Products', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <header className="w-full bg-[#043873] py-4 px-4 lg:px-[220px] flex items-center justify-between relative">
      <div className="flex items-center gap-10">
        <Logo className="text-white filter brightness-0 invert" />
        <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-[#FFE492] font-medium text-sm transition-colors">
                {link.name}
              </a>
            ))}
        </nav>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <Button variant="secondary" className="bg-[#FFE492] text-[#043873] px-6 py-3">Login</Button>
        <Button variant="primary" className="bg-[#4F9CF9] text-white px-6 py-3">Try Whitepace free</Button>
      </div>

      <button 
        className="lg:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#043873] p-6 flex flex-col gap-4 shadow-lg z-50">
           {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white hover:text-[#FFE492] font-medium">
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <Button variant="secondary" className="justify-center">Login</Button>
              <Button variant="primary" className="justify-center">Try Whitepace free</Button>
            </div>
        </div>
      )}
    </header>
  );
};
