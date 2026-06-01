'use client';
import { useState } from 'react';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

const TRANSFORMATIONS = [
  { treatment: 'Invisalign Treatment', duration: '8 Months', before: '/t1 (1).png', after: '/t1 (2).png' },
  { treatment: 'Braces Treatment', duration: '10 Months', before: '/t2 (1).png', after: '/t2 (2).png' },
  { treatment: 'Smile Makeover', duration: '12 Months', before: '/t3 (1).png', after: '/t3 (2).png' },
  { treatment: 'Dental Implants', duration: '6 Months', before: '/t4 (1).png', after: '/t4 (2).png' },
];

const VISIBLE = 3;

export default function SmileTransformations() {
  const [current, setCurrent] = useState(0);
  const maxIndex = TRANSFORMATIONS.length - VISIBLE;

  return (
    <section id="transformations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        {/* Header */}
        <div className="flex items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Smile Transformations</h2>
            <p className="text-gray-500 text-sm mt-1">Real People. Real Results. — Drag the slider to compare</p>
          </div>
          <a href="#transformations" className="text-sm font-semibold text-[#1a5f4a] hover:underline whitespace-nowrap shrink-0">
            View More Results →
          </a>
        </div>

        {/* Desktop carousel */}
        <div className="relative hidden lg:block overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (33.333% + 1.25rem)))` }}
          >
            {TRANSFORMATIONS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 shrink-0"
                style={{ minWidth: 'calc(33.333% - 14px)' }}
              >
                <BeforeAfterSlider before={item.before} after={item.after} height={280} />
                <div className="px-4 py-4">
                  <p className="font-semibold text-gray-900 text-sm">{item.treatment}</p>
                  <p className="text-xs text-[#1a5f4a] font-medium mt-0.5">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setCurrent(c => Math.max(c - 1, 0))}
            disabled={current === 0}
            className="absolute left-0 top-[45%] -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:shadow-lg transition-all z-10"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent(c => Math.min(c + 1, maxIndex))}
            disabled={current >= maxIndex}
            className="absolute right-0 top-[45%] -translate-y-1/2 translate-x-5 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center disabled:opacity-30 hover:shadow-lg transition-all z-10"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="hidden lg:flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${current === i ? 'w-6 h-2 bg-[#1a5f4a]' : 'w-2 h-2 bg-gray-300'}`}
            />
          ))}
        </div>

        {/* Mobile 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {TRANSFORMATIONS.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <BeforeAfterSlider before={item.before} after={item.after} height={150} />
              <div className="p-3">
                <p className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{item.treatment}</p>
                <p className="text-[10px] text-[#1a5f4a] font-medium mt-0.5">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
