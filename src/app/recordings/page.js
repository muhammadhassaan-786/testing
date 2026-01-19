'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Play, Clock, Calendar, Volume2 } from 'lucide-react';

// Sample Data
const mediaData = [
  {
    id: 1,
    type: 'بیان',
    title: 'تزکیہ نفس کی اہمیت',
    author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
    duration: '45:32',
    year: '2024',
    category: 'bayan'
  },
  {
    id: 2,
    type: 'بیان',
    title: 'رمضان المبارک کی فضیلت',
    author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
    duration: '52:18',
    year: '2024',
    category: 'bayan'
  },
  {
    id: 3,
    type: 'بیان',
    title: 'ذکر الہی کے فوائد',
    author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
    duration: '38:45',
    year: '2023',
    category: 'bayan'
  },
  {
    id: 4,
    type: 'تلاوت',
    title: 'سورۃ الفاتحہ تلاوت',
    author: 'جامعہ زکریا',
    duration: '12:20',
    year: '2024',
    category: 'tilawat'
  },
  {
    id: 5,
    type: 'کلام',
    title: 'نعت رسول مقبول ﷺ',
    author: 'جامعہ زکریا',
    duration: '8:15',
    year: '2024',
    specialStyle: true,
    category: 'kalam'
  },
  {
    id: 6,
    type: 'بیان',
    title: 'حج کے مسائل',
    author: 'حضرت مفتی سید مختار الدین شاہ صاحب',
    duration: '1:02:30',
    year: '2023',
    category: 'bayan'
  },
];

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
      ${active 
        ? 'bg-[#2b221b] text-white shadow-md' 
        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
      }`}
  >
    {label}
  </button>
);

const MediaCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between h-full">
      {/* Top Row: Type Badge and Play Button */}
      <div className="flex justify-between items-start mb-4">
        <span className="bg-[#f0ece6] text-[#6b5d52] text-xs px-3 py-1 rounded-full font-medium">
          {item.type}
        </span>
        <button className="bg-[#2b221b] text-white p-3 rounded-full hover:bg-black transition-colors group">
          <Play size={20} className="fill-current ml-1 group-hover:scale-105 transition-transform" />
        </button>
      </div>

      {/* Middle: Content Info */}
      <div className="text-center mb-6">
        {item.specialStyle ? (
          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif leading-loose">
           {item.title}
          </h3>
        ) : (
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {item.title}
          </h3>
        )}
        <p className="text-sm text-gray-500 font-medium">
          {item.author}
        </p>
      </div>

      {/* Bottom: Meta Data */}
      <div className="flex justify-center items-center gap-6 text-gray-400 text-xs border-t border-gray-50 pt-4 mt-auto">
        <div className="flex items-center gap-1.5">
          <Clock size={14} />
          <span>{item.duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{item.year}</span>
        </div>
      </div>
    </div>
  );
};

export default function Recordings() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredData = activeFilter === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.category === activeFilter);

  return (
    <main className="w-full" dir="rtl">
      <Navbar />
      <div className="min-h-screen bg-[#f9f8f6] py-16 px-4 sm:px-6 lg:px-8 font-sans" style={{ fontFamily: 'var(--font-noto-naskh-arabic)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Volume2 size={32} className="text-gray-700" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#2b221b] mb-4">
              بیانات، کلام اور تلاوت
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              حضرت مفتی صاحب کے بیانات اور جامعہ زکریا کی تلاوت و کلام سنیں
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex justify-center gap-3 mb-12 overflow-x-auto pb-2">
            <FilterButton 
              label="سب" 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')} 
            />
            <FilterButton 
              label="بیان" 
              active={activeFilter === 'bayan'} 
              onClick={() => setActiveFilter('bayan')} 
            />
            <FilterButton 
              label="تلاوت" 
              active={activeFilter === 'tilawat'} 
              onClick={() => setActiveFilter('tilawat')} 
            />
            <FilterButton 
              label="کلام" 
              active={activeFilter === 'kalam'} 
              onClick={() => setActiveFilter('kalam')} 
            />
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
