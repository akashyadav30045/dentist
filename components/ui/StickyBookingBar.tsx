'use client';
import { useEffect, useState } from 'react';
import { useBooking } from '@/context/BookingContext';
import { PHONE_RAW, PHONE_DISPLAY } from '@/lib/constants';

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`hidden lg:flex fixed bottom-7 left-1/2 -translate-x-1/2 z-50 items-center gap-5 bg-[#0f3d2e] text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Rating */}
      <div className="flex items-center gap-1.5 text-sm">
        <span className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </span>
        <span className="text-green-200 text-xs font-medium">4.9 · 400+ Reviews</span>
      </div>

      <div className="w-px h-4 bg-white/20" />

      {/* Phone */}
      <a
        href={`tel:+${PHONE_RAW}`}
        className="flex items-center gap-1.5 text-sm font-medium hover:text-green-200 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        {PHONE_DISPLAY}
      </a>

      <div className="w-px h-4 bg-white/20" />

      {/* Book Button */}
      <button
        onClick={() => openModal()}
        className="bg-white text-[#1a5f4a] text-sm font-bold px-5 py-1.5 rounded-full hover:bg-green-50 active:scale-95 transition-all"
      >
        Book Appointment
      </button>
    </div>
  );
}
