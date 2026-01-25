'use client';

export default function AboutContent() {
  return (
    <div className="w-full" dir="rtl">
      {/* Four Principles Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            اتحاد و اتفاق کے اصول
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۱۔ توحید کی آڑ میں توہین سے بچنا
              </h3>
            </div>

            <div className="rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۲۔ عقیدت و محبت کے پردے میں شرکیہ سے بچنا
              </h3>
            </div>

            <div className="rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۳۔ تحقیق کے پردے میں خود رائی سے بچنا
              </h3>
            </div>

            <div className="rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۴۔ دین کے شعبے میں تقابلی انداز سے بچنا
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Things to Do */}
      <section className="w-full py-16 px-6 bg-accent-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            آٹھ بنیادی باتیں
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '۱', text: 'توحید و تعظیم شعائر اللہ' },
              { num: '۲', text: 'ذکر و عبادت' },
              { num: '۳', text: 'تعلیم و تعلم' },
              { num: '۴', text: 'حسن خلق' },
              { num: '۵', text: 'خدمت خلق' },
              { num: '۶', text: 'دعوت و تبلیغ' },
              { num: '۷', text: 'جہاد' },
              { num: '۸', text: 'اخلاص نیت' }
            ].map((item, index) => (
              <div key={index} className="rounded-xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Things to Avoid */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            پانچ چیزوں سے پرہیز
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '۱', text: 'سوال' },
              { num: '۲', text: 'طمع' },
              { num: '۳', text: 'اسراف و تبذیر' },
              { num: '۴', text: 'بے جا استعمال' },
              { num: '۵', text: 'فضول باتوں سے بچنا' }
            ].map((item, index) => (
              <div key={index} className="rounded-xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Things for Moderation */}
      <section className="w-full py-16 px-6 bg-accent-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            تین چیزوں میں اعتدال
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '۱', text: 'کم سونا' },
              { num: '۲', text: 'کم کھانا' },
              { num: '۳', text: 'کم بولنا' }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            اصلاحی و تربیتی منہج
          </h2>

          <div className="space-y-6">
            <div className="rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-4">
                عقائد اور فکر و نظر کی تطہیر
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                جذبات و خیالات کو اعتدال پر لانا، پوشیدہ صلاحیتوں کو اجاگر کرنا، اور ہر صاحب حق کے حقوق کی تعلیم دینا۔
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-4">
                عملی تربیت
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                نماز، روزہ، زکوۃ، حج اور جہاد جیسے عبادات اور خرید و فروخت، نکاح جیسے معاملات کے بنیادی مسائل کی تعلیم دینا۔
              </p>
            </div>

            <div className="rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-4">
                روحانی ترقی
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                درس قرآن، ذکر، مجاہدہ، خدمت اور مراقبات کے ذریعے نفس کو پاک کرنا اور عملی صلاحیتوں کو بیدار کرنا۔
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
