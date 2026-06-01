'use client';
import { useBooking } from '@/context/BookingContext';

export default function CTABanner() {
  const { openModal } = useBooking();

  return (
    <section id="contact" className="py-16 bg-[#1a5f4a]">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
          Ready to Start Your<br />Smile Journey?
        </h2>
        <p className="text-green-200 text-base leading-relaxed mb-8 max-w-lg mx-auto">
          Book your consultation today and take the first step towards a healthier, more confident you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <button
            onClick={() => openModal()}
            className="inline-flex items-center gap-2 bg-white text-[#1a5f4a] font-bold px-7 py-3.5 rounded-lg hover:bg-gray-100 active:scale-95 transition-all text-sm"
          >
            Book Appointment →
          </button>
          <a
            href="tel:+918851530007"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Call Now
          </a>
        </div>
        <a
          href="https://wa.me/919821125140"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-green-200 text-sm hover:text-white transition-colors mt-1"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.358A9.945 9.945 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.182 8.182 0 110-16.364 8.182 8.182 0 010 16.364z" />
          </svg>
          Or WhatsApp Us
        </a>
      </div>
    </section>
  );
}
