'use client';
import HeroCTA from '@/components/ui/HeroCTA';

const STATS_ROW = [
  {
    value: '18+',
    label: 'Years Experience',
    icon: (
      <svg className="w-5 h-5 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    value: '400+',
    label: '5 Star Reviews',
    icon: (
      <svg className="w-5 h-5 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    value: 'Sir Ganga Ram',
    label: 'Hospital',
    icon: (
      <svg className="w-5 h-5 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    value: 'Invisalign',
    label: 'Certified Provider',
    icon: (
      <svg className="w-5 h-5 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m16.364-6.364L5.636 18.364m12.728 0L5.636 5.636" />
      </svg>
    )
  }
];

export default function Hero() {
  return (
    <section className="bg-white pt-6 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Banner with background image — consistent on mobile and desktop */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] mb-6">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Bouquet Dental"
              className="w-full h-full object-cover object-[28%_center] lg:object-right"
            />
            {/* Soft gradient from left to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          </div>

          {/* Text and vertical bullets overlaid on the left */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-12 w-[65%] sm:w-[60%] lg:w-1/2 flex flex-col justify-center h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] text-left">
            <span className="inline-block bg-[#e8f5f0] text-[#1a5f4a] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider w-max mb-3">
              Advanced Dental Care in Noida
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-3">
              Redefining Smiles.<br />
              <span className="text-[#1a5f4a]">Changing Lives.</span>
            </h1>
            <p className="text-gray-500 text-[11px] sm:text-sm leading-relaxed mb-6 max-w-sm">
              Advanced Orthodontics, Implants &amp; Complete Dental Care in Noida
            </p>

            {/* Vertical Bullets */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f5f0] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-[10px] sm:text-xs">Expert Care</p>
                  <p className="text-gray-500 text-[9px] sm:text-[10px]">18+ Years Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f5f0] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-[10px] sm:text-xs">Trusted by 400+</p>
                  <p className="text-gray-500 text-[9px] sm:text-[10px]">5 Star Reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#e8f5f0] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3m16.364-6.364L5.636 18.364m12.728 0L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-gray-900 text-[10px] sm:text-xs">Advanced</p>
                  <p className="text-gray-500 text-[9px] sm:text-[10px]">Technology</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Buttons row */}
        <div className="mb-6">
          <HeroCTA />
        </div>

        {/* Horizontal stats box - aligned below buttons */}
        <div className="bg-white rounded-2xl border border-gray-150 shadow-sm p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS_ROW.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 pr-2 md:pr-4 ${
                i < STATS_ROW.length - 1 ? 'md:border-r md:border-gray-100' : ''
              } ${
                i % 2 === 0 ? 'border-r border-gray-100' : ''
              } ${
                i === STATS_ROW.length - 1 ? 'border-none' : ''
              }`}
            >
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
    </section>
  );
}
