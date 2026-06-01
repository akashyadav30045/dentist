'use client';

const REVIEWS = [
  { text: '"My Invisalign journey was so smooth and comfortable. Highly recommend!"', name: 'Vaishnavi R.' },
  { text: '"Best dental clinic in Noida! Very professional and the results are amazing."', name: 'Nishant A.' },
  { text: '"Painless treatment, beautiful results and wonderful staff."', name: 'Gaurav S.' },
  { text: '"Very hygienic clinic and super friendly team. Loved the experience!"', name: 'Priya S.' },
];

function Stars({ size = "w-3.5 h-3.5" }: { size?: string }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`${size} fill-yellow-400`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsStrip() {
  return (
    <section id="reviews" className="bg-gray-50 py-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Desktop Layout — Straight horizontal bar matching the user's design */}
        <div className="hidden lg:flex items-stretch bg-white rounded-2xl border border-gray-200 shadow-sm p-6 gap-6">
          
          {/* Google rating block */}
          <div className="flex items-center gap-3 pr-6 border-r border-gray-100 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm leading-none mb-1">Google</p>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-base font-bold text-gray-900">4.9</span>
                <Stars size="w-3 h-3" />
              </div>
              <p className="text-[11px] text-gray-500">400+ Reviews</p>
            </div>
          </div>

          {/* 4 Reviews */}
          {REVIEWS.map((r, i) => (
            <div key={i} className="flex-1 flex flex-col justify-between pr-6 border-r border-gray-100 last:border-r-0">
              <div>
                <Stars size="w-3.5 h-3.5" />
                <p className="text-[11px] text-gray-700 mt-2 mb-3 leading-relaxed line-clamp-3">
                  {r.text}
                </p>
              </div>
              <p className="text-[10px] text-gray-400 font-medium">{`- ${r.name}`}</p>
            </div>
          ))}

          {/* Actions Block */}
          <div className="flex flex-col justify-center items-center gap-3 pl-6 shrink-0 border-l border-gray-100">
            <a
              href="#reviews"
              className="text-xs font-semibold text-[#1a5f4a] border border-[#1a5f4a]/30 hover:border-[#1a5f4a] hover:bg-[#1a5f4a]/5 px-4 py-2 rounded-lg transition-all"
            >
              View All Reviews
            </a>
            
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['/nistha.webp', '/doctor-photo.webp', '/nistha.webp'].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="w-5 h-5 rounded-full object-cover border border-white"
                  />
                ))}
              </div>
              <div className="leading-none">
                <p className="text-[9px] text-gray-400">Loved by</p>
                <p className="text-[9px] font-bold text-gray-700">400+ Patients</p>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile & Tablet Layout — contained card with horizontal scrolling reviews */}
        <div className="block lg:hidden bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-bold text-gray-900">4.9</span>
                  <Stars size="w-3.5 h-3.5" />
                </div>
                <p className="text-[10px] text-gray-500">Google Rating (400+ Reviews)</p>
              </div>
            </div>
            
            <a
              href="#reviews"
              className="text-[11px] font-semibold text-[#1a5f4a] border border-[#1a5f4a]/20 hover:bg-[#1a5f4a]/5 px-2.5 py-1.5 rounded-md transition-all shrink-0"
            >
              View All
            </a>
          </div>

          {/* 2x2 Grid of 4 Cards on mobile/tablet */}
          <div className="grid grid-cols-2 gap-3 pb-3">
            {REVIEWS.map((r, i) => (
              <div key={i} className="flex flex-col justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                <div>
                  <Stars size="w-3.5 h-3.5" />
                  <p className="text-[10px] sm:text-[11px] text-gray-700 mt-1.5 mb-2 leading-relaxed line-clamp-4">
                    {r.text}
                  </p>
                </div>
                <p className="text-[9px] text-gray-400 font-medium truncate">{`- ${r.name}`}</p>
              </div>
            ))}
          </div>

          {/* Loved by section on mobile */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-1">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['/nistha.webp', '/doctor-photo.webp', '/nistha.webp'].map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt=""
                    className="w-5.5 h-5.5 rounded-full object-cover border border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-700">Loved by 400+ Patients</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
