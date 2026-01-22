'use client';

export default function AboutContent() {
  return (
    <div className="w-full bg-white" dir="rtl">
      {/* Three Objectives Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            مقاصد
          </h2>
          <p className="text-lg text-gray-700 text-right leading-relaxed mb-12">
            اس ہدف کے حصول کے لیے یہ تحریک تین مقاصد پر کام کرتی ہے:
          </p>

          <div className="space-y-8">
            {/* First Objective */}
            <div className="bg-[#fffcfa] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-right text-[#2d1b0e] mb-4">
                ۱۔ تزکیہ نفس
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                تقویٰ، طہارت، اللہ تعالی کے ساتھ شدید محبت، اس کی عظمت و معرفت اور خشیت کے اعلیٰ درجات اور زندگی کے ہر گوشے میں احسانی کیفیت حاصل کرنے کے لیے مسلسل محنت و کوشش کرنا، اور اپنے گردو پیش کو بھی اپنی اصلاح و تربیت اور ایمانی اوصاف و کمالات سے آراستہ ہونے کی جانب توجہ دلانا۔
              </p>
            </div>

            {/* Second Objective */}
            <div className="bg-[#fffcfa] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-right text-[#2d1b0e] mb-4">
                ۲۔ پورے دین پر پورا عمل
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                عقائد و ایمانیات سے لے کر عبادات، معاملات، معاشرت، حسن اخلاق اور حقوق و آداب تک پورے کے پورے دین پر خود عمل کرنا۔ دنیا کے سامنے دین اپنی کامل اور صحیح شکل میں پیش کرنا اور دوسرے مسلمانوں کو بھی پورے دین پر عمل پیرا ہونے کی ترغیب دینا۔
              </p>
            </div>

            {/* Third Objective */}
            <div className="bg-[#fffcfa] rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-right text-[#2d1b0e] mb-4">
                ۳۔ اتحاد امت
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                امت کے بکھرے ہوئے شیرازے کو دوبارہ یکجا کرنے میں اپنی پوری قوت صرف کرنا، بنیادی عقائد اور فروعی اجتہادی مسائل میں سے ہر ایک کو اپنے اپنے مرتبہ پر رکھنا، اور مختلف دینی سرگرمیوں میں مشغول افراد کے درمیان پھیلی ہوئی نفسیات کو باہمی تعاون میں بدلنا۔
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Principles Section */}
      <section className="w-full bg-[#fffcfa] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            اتحاد و اتفاق کے اصول
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۱۔ توحید کی آڑ میں توہین سے بچنا
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۲۔ عقیدت و محبت کے پردے میں شرکیہ سے بچنا
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۳۔ تحقیق کے پردے میں خود رائی سے بچنا
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-3">
                ۴۔ دین کے شعبے میں تقابلی انداز سے بچنا
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Things to Do */}
      <section className="w-full bg-white py-16 px-6">
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
              <div key={index} className="bg-[#fffcfa] rounded-xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F0EBE0] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Things to Avoid */}
      <section className="w-full bg-[#fffcfa] py-16 px-6">
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
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F0EBE0] flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Things for Moderation */}
      <section className="w-full bg-white py-16 px-6">
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
              <div key={index} className="bg-[#fffcfa] rounded-2xl p-8 border border-gray-100 text-center">
                <div className="w-16 h-16 rounded-full bg-[#F0EBE0] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#2d1b0e]">{item.num}</span>
                </div>
                <p className="text-gray-700 font-medium text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="w-full bg-[#fffcfa] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
            اصلاحی و تربیتی منہج
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-4">
                عقائد اور فکر و نظر کی تطہیر
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                جذبات و خیالات کو اعتدال پر لانا، پوشیدہ صلاحیتوں کو اجاگر کرنا، اور ہر صاحب حق کے حقوق کی تعلیم دینا۔
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-right text-[#2d1b0e] mb-4">
                عملی تربیت
              </h3>
              <p className="text-gray-700 text-right leading-relaxed">
                نماز، روزہ، زکوۃ، حج اور جہاد جیسے عبادات اور خرید و فروخت، نکاح جیسے معاملات کے بنیادی مسائل کی تعلیم دینا۔
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-100">
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
