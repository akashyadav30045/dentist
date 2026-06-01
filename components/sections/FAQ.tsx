'use client';
import { useState } from 'react';
import { useBooking } from '@/context/BookingContext';

const FAQS = [
  {
    q: 'How long does Invisalign treatment take?',
    a: 'Invisalign treatment typically takes 12–18 months depending on the complexity of your case. Mild corrections can be done in as little as 6 months.',
  },
  {
    q: 'Is the treatment painful?',
    a: 'We use the latest pain-free techniques and local anesthesia where needed. Most patients report minimal discomfort during and after procedures.',
  },
  {
    q: 'Do you offer EMI options?',
    a: 'Yes! We offer flexible EMI plans starting from ₹0 down payment through major banks and finance partners. Ask our team for details.',
  },
  {
    q: 'How many visits are required?',
    a: 'The number of visits depends on your treatment. A routine cleaning takes 1 visit; Invisalign involves check-ins every 6–8 weeks.',
  },
  {
    q: 'What makes Bouquet Dental different?',
    a: 'We combine 18+ years of expertise, advanced 3D digital scanning, Invisalign certification, and a team led by a Sir Ganga Ram Hospital consultant — all under one roof in Noida.',
  },
  {
    q: 'Do you treat children?',
    a: 'Absolutely. Our pediatric dentistry team is experienced with children of all ages, making dental visits comfortable and stress-free for young patients.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { openModal } = useBooking();

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">

          {/* FAQ Accordion */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="font-medium text-gray-900 text-sm pr-4">{faq.q}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                        open === i ? 'bg-[#1a5f4a]' : 'bg-gray-100'
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${open === i ? 'rotate-45 text-white' : 'text-gray-500'}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v12M6 12h12" />
                      </svg>
                    </span>
                  </button>

                  {/* Smooth slide animation */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: open === i ? '200px' : '0px' }}
                  >
                    <p className="px-5 pb-4 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#faq" className="inline-flex items-center gap-1.5 mt-6 text-sm font-semibold text-[#1a5f4a] hover:underline">
              View All FAQs →
            </a>
          </div>

          {/* CTA Card */}
          <div className="hidden lg:block mt-12">
            <div className="bg-[#1a5f4a] rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-green-200 text-sm leading-relaxed mb-6">
                Our dental experts are ready to answer all your questions and help you start your smile journey.
              </p>
              <button
                onClick={() => openModal()}
                className="flex items-center justify-center gap-2 w-full bg-white text-[#1a5f4a] font-bold text-sm px-6 py-3 rounded-xl hover:bg-gray-100 active:scale-95 transition-all mb-3"
              >
                Book a Consultation
              </button>
              <a
                href="tel:+919821125140"
                className="flex items-center justify-center gap-2 w-full border border-white/30 text-white text-sm font-medium py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                +91-88515 30007
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
