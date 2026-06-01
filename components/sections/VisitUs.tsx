import { PHONE_RAW, PHONE_DISPLAY, ADDRESS_LINE1, ADDRESS_LINE2 } from '@/lib/constants';

export default function VisitUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Address card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h2>

            <div className="flex items-start gap-3 mb-5">
              <svg className="w-5 h-5 text-[#1a5f4a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-semibold text-gray-900">Bouquet Dental</p>
                <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                  {ADDRESS_LINE1}<br />{ADDRESS_LINE2}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <svg className="w-5 h-5 text-[#1a5f4a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:+${PHONE_RAW}`} className="text-sm text-gray-700 hover:text-[#1a5f4a] transition-colors font-medium">{PHONE_DISPLAY}</a>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <svg className="w-5 h-5 text-[#1a5f4a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-gray-700">
                <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                <p>Sunday: 10:00 AM – 2:00 PM</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=ATS+Bouquet+Sector+132+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1a5f4a] font-semibold text-sm hover:underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.3712!3d28.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f1a8a9b5b3%3A0x1!2sATS+Bouquet%2C+Sector+132%2C+Noida!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bouquet Dental Location"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
