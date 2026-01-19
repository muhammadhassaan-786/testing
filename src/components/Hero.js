'use client';

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen bg-gradient-to-b from-[#f5f1ed] to-[#f9f7f4] flex flex-col items-center justify-center px-6 py-12 scroll-mt-20 pt-32">
      {/* Bismillah */}
      <div className="mb-8 text-center">
        <p className="text-[#8b7d6b] text-xl font-normal tracking-wide">بسم الله الرحمن الرحيم</p>
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
      <div className="flex gap-6 items-center justify-center flex-wrap">
        {/* Primary Button */}
        <button className="px-8 py-3 bg-black text-white rounded-full font-semibold text-lg hover:bg-gray-900 transition-colors duration-300">
          تعارف پڑھیں
        </button>

        {/* Secondary Button */}
        <button className="px-8 py-3 bg-white text-black border-2 border-gray-400 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors duration-300">
          رابط کریں
        </button>
      </div>
    </section>
  );
}
