'use client';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#fdfbf8] py-20 px-6 scroll-mt-20" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          تعارف
        </h2>

        {/* First Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            حضرت مفتی سید مختار الدین شاہ صاحب
          </h3>

          <div className="space-y-6 text-right">
            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              حضرت مفتی سید مختار الدین شاہ صاحب پاکستان کے ممتاز عالم دین اور معروف روحانی پیشوا ہیں۔ آپ شیخ الحدیث مولانا محمد زکریا کاندھلوی صاحب کے خلیفہ مجاز ہیں۔
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              آپ کا تعلق ضلع گنجو کے علاقے کربوغہ شریف کے ایک معزز سادات گھرانے سے ہے۔ آپ نفس تزکیہ و باطنی اصلاح کے حوالے سے منفرد مقام رکھتے ہیں۔
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              آپ نے کربوغہ شریف میں "جامعہ زکریا" جیسی عظیم دینی درسگاہ قائم کی ہے جہاں قرآن و حدیث کی تعلیم دی جاتی ہے۔
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Second Section */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            شیخ الحدیث مولانا محمد زکریا کاندھلوی رحمۃ اللہ علیہ
          </h3>

          <div className="space-y-6 text-right">
            <p className="text-lg text-gray-700 leading-relaxed font-serif">
              (1898ء - 1982ء) بیسویں صدی کے جلیل القدر محدث، عظیم مصنف اور روحانی پیشوا تھے جنہوں نے مدرسہ مظاہر علوم میں تقریباً نصف صدی تک حدیث نبویﷺ کا درس دیا۔ آپ کی کتاب "فضائل اعمال" دنیا بھر میں تبلیغی جماعت کے نصاب کا حصہ ہے۔
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
