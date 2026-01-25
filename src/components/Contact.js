import React from 'react';
import { FaWhatsapp, FaFacebook, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="w-full py-20 px-6 scroll-mt-20 bg-white" dir="rtl">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Main Page Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-center text-[#2d1b0e] mb-20">
          رابطہ
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* RIGHT COLUMN: Donation Card - appears first in RTL */}
          <div className="border border-gray-100 rounded-3xl p-10 shadow-sm">
            <h2 className="text-3xl font-bold text-right text-[#2d1b0e] mb-10">
              عطیات
            </h2>

            <div className="space-y-8">
              {/* Account Title Row */}
              <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                <span className="text-gray-500 text-sm">اکاؤنٹ ہولڈر</span>
                <span className="text-gray-900 font-semibold text-lg">Muhammad Jafar</span>
              </div>

              {/* Bank Name Row */}
              <div className="flex justify-between items-start pb-4 border-b border-gray-100">
                <span className="text-gray-500 text-sm">بینک</span>
                <span className="text-gray-900 font-semibold text-lg">Meezan Bank, Doaba Branch</span>
              </div>

              {/* IBAN Row */}
              <div className="pb-4 border-b border-gray-100">
                <span className="text-[#a8a29e] text-xs font-semibold uppercase tracking-wider block mb-3">IBAN</span>
                <span className="text-gray-600 font-mono text-sm tracking-wide">
                  PK31MEZN0026510107239161
                </span>
              </div>

              {/* Footer Note */}
              <p className="text-right text-gray-600 text-sm pt-4">
                اللہ تعالیٰ آپ کو اس کا بہترین اجر عطا فرمائے
              </p>
            </div>
          </div>

          {/* LEFT COLUMN: Contact Details - appears second in RTL */}
          <div className="flex flex-col gap-10" dir="ltr">
            
            {/* Address */}
            <div className="flex items-start gap-6 justify-start">
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-800">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div className="text-right" dir="rtl">
                <h3 className="text-[#2d1b0e] font-bold text-lg mb-1">مرکز خانقاہ دارالایمان والتقویٰ</h3>
                <p className="text-gray-600">کربوغہ شریف، پاکستان</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-6 justify-start">
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
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
              {/* WhatsApp */}
              <a 
                href="https://api.whatsapp.com/send/?phone=923177930224&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-12 h-12 rounded-full flex items-center justify-center transition"
              >
                <FaWhatsapp className="w-6 h-6 text-gray-800" />
              </a>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/markazdaruleman"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="w-12 h-12 rounded-full flex items-center justify-center transition"
              >
                <FaFacebook className="w-6 h-6 text-gray-800" />
              </a>
              {/* Youtube */}
              <a 
                href="https://www.youtube.com/@markazdarulemanofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our YouTube channel"
                className="w-12 h-12 rounded-full flex items-center justify-center transition"
              >
                <FaYoutube className="w-6 h-6 text-gray-800" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;