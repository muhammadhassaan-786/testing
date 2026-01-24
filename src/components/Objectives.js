'use client';

export default function Objectives() {
  return (
    <section className="w-full py-16 px-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-right text-[#2d1b0e] mb-12">
          مقاصد
        </h2>
        <p className="text-lg text-gray-700 text-right leading-relaxed mb-12">
          اس ہدف کے حصول کے لیے یہ تحریک تین مقاصد پر کام کرتی ہے:
        </p>

        <div className="space-y-8">
          {/* First Objective */}
          <div className="rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-right text-[#2d1b0e] mb-4">
              ۱۔ تزکیہ نفس
            </h3>
            <p className="text-gray-700 text-right leading-relaxed">
              تقویٰ، طہارت، اللہ تعالی کے ساتھ شدید محبت، اس کی عظمت و معرفت اور خشیت کے اعلیٰ درجات اور زندگی کے ہر گوشے میں احسانی کیفیت حاصل کرنے کے لیے مسلسل محنت و کوشش کرنا، اور اپنے گردو پیش کو بھی اپنی اصلاح و تربیت اور ایمانی اوصاف و کمالات سے آراستہ ہونے کی جانب توجہ دلانا۔
            </p>
          </div>

          {/* Second Objective */}
          <div className="rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-right text-[#2d1b0e] mb-4">
              ۲۔ پورے دین پر پورا عمل
            </h3>
            <p className="text-gray-700 text-right leading-relaxed">
              عقائد و ایمانیات سے لے کر عبادات، معاملات، معاشرت، حسن اخلاق اور حقوق و آداب تک پورے کے پورے دین پر خود عمل کرنا۔ دنیا کے سامنے دین اپنی کامل اور صحیح شکل میں پیش کرنا اور دوسرے مسلمانوں کو بھی پورے دین پر عمل پیرا ہونے کی ترغیب دینا۔
            </p>
          </div>

          {/* Third Objective */}
          <div className="rounded-2xl p-8 border border-gray-100">
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
  );
}
