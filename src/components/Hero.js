'use client';

import Link from 'next/link';

export default function Hero() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-12 scroll-mt-0 pt-20 bg-white">
      {/* Bismillah */}
      <div className="mb-8 text-center">
        <p className="text-[#8b7d6b] text-xl font-normal tracking-wide">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      </div>

      {/* Main Title */}
      <h1 className="text-6xl md:text-7xl font-bold text-gray-900 text-center mb-4 leading-tight">
        دارالایمان والتقویٰ
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-gray-600 text-center mb-10 max-w-2xl">
        تزكيه نفس اور روحانی اصلاح کا مرکز
      </p>

      {/* Buttons */}
      <div className="flex gap-6 items-center justify-center flex-wrap w-full">
        {/* Secondary Button */}
        <button onClick={() => handleScroll('contact')} className="px-8 py-3 text-black border-2 border-gray-400 rounded-full font-semibold text-lg transition-colors duration-300">
          رابطہ کریں
        </button>
      </div>
    </section>
  );
}
