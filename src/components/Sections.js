'use client';

import { useRouter } from 'next/navigation';

export default function Sections() {
  const router = useRouter();

  const handleNavigation = (id) => {
    if (id === 5) {
      router.push('/recordings');
    }
  };

  const sections = [
    {
      id: 1,
      title: 'جامعہ زکریا',
      description: 'تعلیم قرآن و حدیث',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'دارالافتاء',
      description: 'آپ کے مسائل اور کا حل',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-1.804 9-4.023V16.5M12 20.25c-4.97 0-9-1.804-9-4.023V16.5m18 0V9.75c0-2.219-4.03-4.023-9-4.023S3 7.531 3 9.75v10.5m18 0a4.023 4.023 0 0 0-9-4.023m-9 4.023a4.023 4.023 0 0 0 9 4.023" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'تعارفِ بانی',
      description: 'حضرت مفتی سید مختار الدین شاہ صاحب کا تعارف',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'کتب',
      description: 'مفید علمی و اصلاحی کتابیں',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3.042.525A9.006 9.006 0 0 0 3 9.694M12 6.042a8.967 8.967 0 0 1 6-2.292c1.052 0 2.062.18 3.042.524A9 9 0 0 1 21 9.694M12 6.042A8.968 8.968 0 0 1 12 20.964m0-14.922v14.922m0-14.922c1.485 0 2.917.308 4.219.884m-4.219 0a8.968 8.968 0 0 0-4.219-.884m0 0a8.968 8.968 0 0 0-4.219.884" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'ریکارڈنگز',
      description: 'بیانات، کلام اور تلاوت',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 4.75L19.25 9M12.75 4.75L6.25 9M12.75 4.75v14.5m6.5-10.5v10.5a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V9M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0Z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'مراکز و مجالس',
      description: 'مختلف مقامات پر مجالس',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-800">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0A24.226 24.226 0 0 0 21 7.51c0-3.848-2.339-7.177-5.693-8.94a.75.75 0 0 0-.82 1.316A22.73 22.73 0 0 1 19.5 7.51c0 3.192-1.625 6.02-4.117 7.747a.75.75 0 1 0 .82 1.316A24.228 24.228 0 0 0 21 7.51Z" />
        </svg>
      )
    }
  ];

  return (
    <section id="sections" className="w-full bg-white py-16 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          شعبہ جات
        </h2>

        {/* Grid of Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.id} className="w-full bg-[#FAF9F6] rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer" dir="rtl" onClick={() => handleNavigation(section.id)}>
              
              {/* Top: Icon Section - on the right side for RTL */}
              <div className="self-end">
                <div className="bg-[#F0EBE0] w-14 h-14 rounded-full flex items-center justify-center">
                  {section.icon}
                </div>
              </div>

              {/* Bottom: Text Section - on the left side for RTL */}
              <div className="self-start text-right">
                <h2 className="text-2xl font-bold text-[#2d1b0e] mb-2 font-serif">
                  {section.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed font-serif">
                  {section.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
