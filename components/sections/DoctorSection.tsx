'use client';
import { useBooking } from '@/context/BookingContext';
import { PHONE_RAW, PHONE_DISPLAY, DOCTOR_NAME } from '@/lib/constants';

const CREDENTIALS = [
  'BDS, MDS (Orthodontics & Dentofacial Orthopaedics)',
  'Consultant – Sir Ganga Ram Hospital, New Delhi',
  'Certified Invisalign Provider (Diamond Level)',
  '18+ Years of Clinical Experience',
  '500+ Successful Orthodontic Cases',
  'Member – Indian Orthodontic Society (IOS)',
  'Member – Indian Dental Association (IDA)',
  'Expertise in Digital Smile Design (DSD)',
];

const STATS = [
  { value: 18, suffix: '+', label: 'Years Experience', icon: '🦷' },
  { value: 500, suffix: '+', label: 'Cases Treated', icon: '😊' },
  { value: 400, suffix: '+', label: '5 Star Reviews', icon: '⭐' },
  { value: 0, suffix: '', label: 'Certified', display: 'Invisalign', icon: '✓' },
];

const ACHIEVEMENTS = [
  { title: 'Diamond Invisalign Provider', desc: 'Top 1% of providers in India' },
  { title: 'Sir Ganga Ram Hospital', desc: 'Visiting Consultant, New Delhi' },
  { title: 'Google 4.9 ★ Rating', desc: 'Loved by 400+ patients' },
  { title: 'Digital Smile Design', desc: 'Internationally certified DSD practitioner' },
];

function AnimatedStat({ stat }: { stat: typeof STATS[0] }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all">
      <span className="text-xl mb-1">{stat.icon}</span>
      <p className="text-2xl font-extrabold text-gray-900 leading-none">
        {stat.display ?? `${stat.value}${stat.suffix}`}
      </p>
      <p className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</p>
    </div>
  );
}

export default function DoctorSection() {
  const { openModal } = useBooking();

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10 items-start align-top">

          {/* Column 1 — Photo + Credentials */}
          <div>
            <p className="text-xs font-bold text-[#1a5f4a] uppercase tracking-widest mb-4">Meet {DOCTOR_NAME}</p>
            <div className="rounded-2xl overflow-hidden h-80 shadow-sm mb-5">
              <img
                src="/nistha.webp"
                alt={DOCTOR_NAME}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <ul className="space-y-2 mb-5">
              {CREDENTIALS.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-[#1a5f4a] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="leading-snug">{c}</span>
                </li>
              ))}
            </ul>
            <a href="#about" className="inline-flex items-center gap-2 border border-[#1a5f4a] text-[#1a5f4a] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#e8f5f0] transition-colors">
              Know More →
            </a>
          </div>

          {/* Column 2 — Bio */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Meet <span className="text-[#1a5f4a]">{DOCTOR_NAME}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              {DOCTOR_NAME} is a highly acclaimed MDS Orthodontist and Visiting Consultant at Sir Ganga Ram Hospital, New Delhi. With an unwavering commitment to clinical excellence and patient comfort, she has transformed thousands of smiles over 18+ years of practice.
            </p>
            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              A Diamond-level Invisalign provider — placing her in the top 1% of providers across India — Dr. Glodha specialises in clear aligner therapy, comprehensive orthodontics, and full-mouth Digital Smile Design. She combines cutting-edge 3D digital scanning with a deeply personalised approach to care.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Experience You Can Trust</h3>
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              Every patient at Bouquet Dental receives a bespoke treatment plan crafted with precision and warmth. From the first consultation to the final reveal, Dr. Glodha ensures every step is comfortable, transparent and results-driven.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#1a5f4a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#124035] transition-colors"
              >
                Book Consultation →
              </button>
              <a
                href={`tel:+${PHONE_RAW}`}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:border-[#1a5f4a] hover:text-[#1a5f4a] transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Column 3 — Stats + Achievements */}
          <div className="space-y-5">
            {/* Animated stats 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s, i) => <AnimatedStat key={i} stat={s} />)}
            </div>

            {/* Achievements list */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-50">
                <h4 className="font-bold text-sm text-gray-900">Awards &amp; Recognition</h4>
              </div>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i < ACHIEVEMENTS.length - 1 ? 'border-b border-gray-50' : ''}`}>
                  <div className="w-7 h-7 rounded-lg bg-[#e8f5f0] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[#1a5f4a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-xs leading-tight">{a.title}</p>
                    <p className="text-[11px] text-gray-500 mt-0.5 leading-tight">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Doctor photo card */}
            <div className="bg-[#1a5f4a] rounded-2xl p-4 text-white text-center">
              <p className="text-xs text-green-200 mb-1">Available at</p>
              <p className="font-bold text-sm">Bouquet Dental, Sector 132</p>
              <p className="text-xs text-green-200 mt-0.5">Mon–Sat: 10 AM – 8 PM</p>
              <button
                onClick={() => openModal()}
                className="mt-3 w-full bg-white text-[#1a5f4a] text-xs font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Book with Dr. Glodha
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
