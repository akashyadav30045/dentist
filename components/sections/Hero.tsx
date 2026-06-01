'use client';
import HeroCTA from '@/components/ui/HeroCTA';

const STATS = [
  {
    value: '18+',
    label: 'Years Experience',
    icon: (
      <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    value: '400+',
    label: '5 Star Reviews',
    icon: (
      <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    value: 'Sir Ganga Ram',
    label: 'Hospital Consultant',
    icon: (
      <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    value: 'Invisalign',
    label: 'Certified Provider',
    icon: (
      <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section className="relative bg-white pt-10 pb-16 overflow-hidden min-h-[580px] flex items-center">
      {/* Desktop Background Image — cover right 60% of viewport, fading to white */}
      <div className="absolute inset-y-0 right-0 w-[55%] hidden lg:block z-0">
        <img
          src="/hero.png"
          alt="Bouquet Dental Clinic"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content Column */}
          <div className="py-4 lg:py-8">
            <p className="text-xs font-bold text-[#1a5f4a] uppercase tracking-widest mb-3">
              Advanced Dental Care in Noida
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-4">
              Redefining Smiles.<br />
              <span className="text-[#1a5f4a]">Changing Lives.</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Advanced Orthodontics, Implants &amp; Complete Dental Care in Noida
            </p>

            {/* Mobile Hero Image — Displayed inline on mobile (below description) */}
            <div className="block lg:hidden mb-6 rounded-2xl overflow-hidden h-[240px] sm:h-[320px] w-full relative shadow-sm border border-gray-100">
              <img
                src="/hero.png"
                alt="Bouquet Dental Clinic"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Buttons */}
            <HeroCTA />

            {/* Stats row with custom icons and container styles */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#e8f5f0] flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 text-xs sm:text-sm leading-snug">{s.value}</p>
                    <p className="text-gray-500 text-[9px] sm:text-[10px] leading-tight mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Empty Right Column on Desktop (filled by background image) */}
          <div className="hidden lg:block h-[520px]" />

        </div>
      </div>
    </section>
  );
}
