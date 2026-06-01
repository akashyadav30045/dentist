'use client';
import { useState, useEffect } from 'react';
import { useBooking } from '@/context/BookingContext';

const TREATMENTS = [
  'Invisalign', 'Braces', 'Dental Implants', 'Smile Makeover',
  'Root Canal', 'Teeth Whitening', 'Pediatric Dentistry',
  'Gum Treatment', 'Crowns & Bridges', 'Laser Dentistry', 'General Checkup',
];

const TIME_SLOTS = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];

export default function BookingModal() {
  const { isOpen, closeModal, selectedTreatment } = useBooking();
  const [form, setForm] = useState({ name: '', phone: '', email: '', treatment: selectedTreatment || '', date: '', time: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const [prevSelectedTreatment, setPrevSelectedTreatment] = useState(selectedTreatment);
  if (selectedTreatment !== prevSelectedTreatment) {
    setPrevSelectedTreatment(selectedTreatment);
    setForm(f => ({ ...f, treatment: selectedTreatment || '' }));
  }

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setSubmitted(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
      setForm({ name: '', phone: '', email: '', treatment: '', date: '', time: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        style={{ maxHeight: '92vh', overflowY: 'auto' }}
      >
        {/* Green Header */}
        <div className="bg-[#1a5f4a] px-6 py-5 text-white sticky top-0 z-10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold">Book an Appointment</h2>
              <p className="text-green-200 text-xs mt-0.5">{"We'll confirm within 2 hours · No advance payment"}</p>
            </div>
            <button
              onClick={closeModal}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {submitted ? (
          /* Success State */
          <div className="p-10 text-center">
            <div className="w-20 h-20 bg-[#e8f5f0] rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-10 h-10 text-[#1a5f4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Appointment Booked!</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              {"We'll call "}<span className="font-semibold text-gray-800">{form.phone}</span>{" within 2 hours to confirm your appointment."}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[#e8f5f0] text-[#1a5f4a] text-sm font-medium px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {form.date} {form.time && `at ${form.time}`}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all"
              />
            </div>

            {/* Treatment */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Treatment</label>
              <div className="relative">
                <select
                  value={form.treatment}
                  onChange={e => setForm(f => ({ ...f, treatment: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all appearance-none bg-white pr-8 text-gray-700"
                >
                  <option value="">Select treatment</option>
                  {TREATMENTS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Preferred Date</label>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">Time Slot</label>
                <div className="relative">
                  <select
                    value={form.time}
                    onChange={e => setForm(f => ({ ...f, time: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all appearance-none bg-white pr-8 text-gray-700"
                  >
                    <option value="">Select time</option>
                    {TIME_SLOTS.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message <span className="font-normal text-gray-400">(optional)</span></label>
              <textarea
                rows={2}
                placeholder="Any specific concern or question?"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1a5f4a] focus:ring-2 focus:ring-[#1a5f4a]/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a5f4a] text-white font-bold py-3.5 rounded-xl hover:bg-[#124035] active:scale-[0.98] transition-all text-sm tracking-wide"
            >
              Confirm Appointment →
            </button>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            <a
              href="https://wa.me/919821125140"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border border-gray-200 text-gray-700 text-sm font-medium py-3 rounded-xl hover:border-[#25d366] hover:text-[#25d366] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.358A9.945 9.945 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.182 8.182 0 110-16.364 8.182 8.182 0 010 16.364z" />
              </svg>
              Book via WhatsApp
            </a>
          </form>
        )}
      </div>
    </div>
  );
}
