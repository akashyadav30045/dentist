'use client';
import { useBooking } from '@/context/BookingContext';

// Real Unsplash dental images — circular crop
const TREATMENTS = [
  {
    name: 'Invisalign',
    tagline: 'Clear Aligners',
    img: '/invas.jpg',
    bg: '#e8f5f0',
  },
  {
    name: 'Braces',
    tagline: 'Perfect Alignment',
    img: '/braces.jpg',
    bg: '#fef3c7',
  },
  {
    name: 'Dental Implants',
    tagline: 'Strong & Permanent',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=200&h=200&q=80',
    bg: '#fce7f3',
  },
  {
    name: 'Smile Makeover',
    tagline: 'Transform Your Smile',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&h=200&q=80',
    bg: '#ede9fe',
  },
  {
    name: 'Root Canal',
    tagline: 'Pain Relief Treatment',
    img: '/rootcanal.jpg',
    bg: '#fee2e2',
  },
  {
    name: 'Teeth Whitening',
    tagline: 'Whiter & Brighter',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=200&h=200&q=80',
    bg: '#fef9c3',
  },
];

export default function Treatments() {
  const { openModal } = useBooking();

  return (
    <section id="treatments" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Treatments</h2>
            <p className="text-gray-500 text-sm mt-1">Personalised care. Advanced technology. Beautiful smiles.</p>
          </div>
          <a href="#treatments" className="text-sm font-semibold text-[#1a5f4a] hover:underline whitespace-nowrap shrink-0">
            View All Treatments →
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TREATMENTS.map((t, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-[#1a5f4a] hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden"
            >
              {/* Circular image */}
              <div
                className="w-20 h-20 rounded-full mb-3 overflow-hidden ring-2 ring-white shadow-sm group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: t.bg }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    (e.currentTarget.parentElement as HTMLElement).style.display = 'flex';
                    (e.currentTarget.parentElement as HTMLElement).style.alignItems = 'center';
                    (e.currentTarget.parentElement as HTMLElement).style.justifyContent = 'center';
                  }}
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">{t.name}</h3>
              <p className="text-xs text-gray-500 mt-1 leading-tight group-hover:opacity-0 transition-opacity duration-150">{t.tagline}</p>

              {/* Book slide-up on hover */}
              <button
                onClick={() => openModal(t.name)}
                className="absolute bottom-0 left-0 right-0 bg-[#1a5f4a] text-white text-xs font-bold py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-200"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
