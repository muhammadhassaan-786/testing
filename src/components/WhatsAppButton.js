'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=923280899651&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-[#25d366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      title="رابطہ کریں"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </a>
  );
}
