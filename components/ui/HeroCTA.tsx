'use client';
import { useBooking } from '@/context/BookingContext';
import { PHONE_RAW, PHONE_DISPLAY } from '@/lib/constants';

export default function HeroCTA() {
  const { openModal } = useBooking();

  return (
    <div className="flex gap-3 mb-8 w-full max-w-md">
      <button
        id="hero-cta"
        onClick={() => openModal()}
        className="flex-[1.3] inline-flex items-center justify-center gap-2 bg-[#1a5f4a] text-white font-semibold py-3.5 rounded-xl hover:bg-[#124035] active:scale-95 transition-all text-xs sm:text-sm whitespace-nowrap shadow-sm"
      >
        Book Consultation
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
      <a
        href={`tel:+${PHONE_RAW}`}
        className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold py-3.5 rounded-xl hover:border-[#1a5f4a] hover:text-[#1a5f4a] transition-colors text-xs sm:text-sm whitespace-nowrap shadow-sm"
      >
        <svg className="w-4 h-4 shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Call Now
      </a>
    </div>
  );
}
