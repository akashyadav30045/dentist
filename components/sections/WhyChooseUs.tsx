const WHY_ITEMS = [
  { title: 'Advanced Technology', desc: 'Digital scans & 3D imaging', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
  { title: 'Hygiene First', desc: 'Sterilisation at every step', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
  { title: 'Painless Treatment', desc: 'Comfortable experience', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
  { title: 'Transparent Pricing', desc: 'No hidden costs', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { title: 'Personalised Care', desc: 'Tailored treatment plans', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
  { title: 'Experienced Team', desc: 'Expert care you can trust', icon: <svg className="w-5 h-5" fill="none" stroke="#1a5f4a" viewBox="0 0 24 24" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'Understand your needs' },
  { num: '02', title: 'Digital Scan', desc: 'Advanced 3D scanning' },
  { num: '03', title: 'Treatment Plan', desc: 'Personalised plan for you' },
  { num: '04', title: 'Aftercare', desc: 'Smile with confidence' },
];

const GALLERY_IMAGES = [
  { src: '/reception-area.webp', label: 'Reception Area' },
  { src: '/treating-room.webp', label: 'Treatment Room' },
  { src: '/waiting-area.webp', label: 'Waiting Area' },
  { src: '/equipment.webp', label: 'Equipment' },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Column 1: Why Choose */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Why Patients Choose <span className="text-[#1a5f4a]">Bouquet Dental?</span>
            </h2>
            <div className="grid grid-cols-2 gap-5">
              {WHY_ITEMS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8f5f0] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm leading-tight">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Clinic Tour */}
          <div id="gallery">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Clinic Tour</h2>
                <p className="text-xs text-gray-500 mt-0.5">A glimpse of our clinic</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {GALLERY_IMAGES.map((img, i) => (
                <div key={i} className="h-28 rounded-xl overflow-hidden group cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            <a
              href="#gallery"
              className="flex items-center justify-center gap-2 w-full border border-[#1a5f4a] text-[#1a5f4a] text-sm font-semibold py-2.5 rounded-lg hover:bg-[#e8f5f0] transition-colors"
            >
              View Full Gallery →
            </a>
          </div>

          {/* Column 3: Treatment Process */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Our Treatment Process</h2>
            <div className="relative">
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-[#e8f5f0]" />
              <div className="flex flex-col gap-6">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-full bg-[#1a5f4a] text-white text-xs font-bold flex items-center justify-center shrink-0 z-10">
                      {step.num}
                    </div>
                    <div className="pt-1.5">
                      <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
