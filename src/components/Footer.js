'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo and Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative flex-shrink-0">
            <Image 
              src="/logo.jpg" 
              alt="دارالایمان والتقویٰ" 
              fill
              className="object-cover rounded-full"
            />
          </div>
          <p className="text-sm text-gray-600">
            © 2026 دارالایمان والتقویٰ
          </p>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-8 items-center" dir="rtl">
          <a href="#hero" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            سرورق
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            تعارف
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            رابط
          </a>
        </div>
      </div>
    </footer>
  );
}
