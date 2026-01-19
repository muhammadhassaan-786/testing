import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-[#FAF9F6] py-20 px-6 font-sans scroll-mt-20" dir="rtl">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Main Page Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[#2d1b0e] mb-20 font-serif">
          رابطہ
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* RIGHT COLUMN: Donation Card - appears first in RTL */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-right text-[#2d1b0e] mb-10 font-serif">
              عطیات
            </h2>

            <div className="space-y-8">
              {/* Account Title Row */}
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <span className="text-gray-500 text-sm font-serif">اکاؤنٹ ہولڈر</span>
                <span className="text-gray-900 font-semibold text-lg">Muhammad Jafar</span>
              </div>

              {/* Bank Name Row */}
              <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                <span className="text-gray-500 text-sm font-serif">بینک</span>
                <span className="text-gray-900 font-semibold text-lg w-1/2">Meezan Bank, Doaba Branch</span>
              </div>

              {/* IBAN Row */}
              <div className="pb-4 border-b border-gray-100">
                <span className="text-[#a8a29e] text-xs font-semibold uppercase tracking-wider block mb-3">IBAN</span>
                <span className="text-gray-600 font-mono text-sm tracking-wide">
                  PK31MEZN0026510107239161
                </span>
              </div>

              {/* Footer Note */}
              <p className="text-right text-gray-600 text-sm font-serif pt-4">
                اللہ تعالیٰ آپ کو اس کا بہترین اجر عطا فرمائے
              </p>
            </div>
          </div>

          {/* LEFT COLUMN: Contact Details - appears second in RTL */}
          <div className="flex flex-col gap-10">
            
            {/* Address */}
            <div className="flex items-start gap-6 justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0EBE0] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="text-[#2d1b0e] font-bold text-lg font-serif mb-1">مرکز خانقاہ دارالایمان والتقویٰ</h3>
                <p className="text-gray-600 font-serif">کربوغہ شریف، پاکستان</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-6 justify-start">
              <div className="w-14 h-14 rounded-full bg-[#F0EBE0] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div className="text-right flex flex-col gap-2">
                <span dir="ltr" className="text-[#2d1b0e] font-semibold text-lg">+92-328-0899651</span>
                <span dir="ltr" className="text-[#2d1b0e] font-semibold text-lg">+92-317-7930224</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-start gap-4 pt-4">
              {/* Facebook */}
              <button className="w-12 h-12 rounded-full bg-[#F0EBE0] flex items-center justify-center hover:bg-gray-200 transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.648 0-2.928 1.67-2.928 3.403v1.575h3.913l-.566 3.667h-3.347v7.98h-5.005l.112-.007Z" />
                </svg>
              </button>
              {/* Youtube */}
              <button className="w-12 h-12 rounded-full bg-[#F0EBE0] flex items-center justify-center hover:bg-gray-200 transition">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-gray-800">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;