import AboutContent from '@/components/AboutContent';

export const metadata = {
  title: 'تعارف - دارالایمان والتقویٰ',
  description: 'تحریک دار الایمان و التقوی کربوغہ شریف کے بارے میں',
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutContent />
    </main>
  );
}
