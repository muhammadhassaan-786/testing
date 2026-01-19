'use client';

export default function Navbar() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'رابطہ', href: 'contact' },
    { label: 'تعارف', href: 'about' },
    { label: 'شعبہ جات', href: 'sections' },
    { label: 'سرورق', href: 'hero' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-gray-700">د</span>
          </div>
          <div className="text-right">
            <h1 className="text-lg font-bold text-gray-900">دارالایمان والتقویٰ</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-base cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
