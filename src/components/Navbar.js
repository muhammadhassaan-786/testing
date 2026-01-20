'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'رابطہ', href: 'contact' },
    { label: 'تعارف', href: 'about' },
    { label: 'شعبہ جات', href: 'sections' },
    { label: 'سرورق', href: 'hero' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleScroll('hero')}>
          <div className="w-12 h-12 relative">
            <Image 
              src="/logo.jpg" 
              alt="دارالایمان والتقویٰ" 
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
          <div className="text-right hidden sm:block">
            <h1 className="text-lg text-gray-900">دارالایمان والتقویٰ</h1>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <ul className="flex flex-col gap-4" dir="rtl">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleScroll(link.href)}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base cursor-pointer w-full text-right"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
