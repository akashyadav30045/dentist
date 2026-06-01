import Link from 'next/link';
import { PHONE_RAW, PHONE_DISPLAY, ADDRESS_LINE1, ADDRESS_LINE2, WHATSAPP_URL } from '@/lib/constants';

const QUICK_LINKS = ['Home', 'About Us', 'Treatments', 'Gallery', 'Blog', 'Contact', 'Patient Reviews', 'Privacy Policy', 'Terms & Conditions'];
const TREATMENTS = ['Invisalign', 'Braces', 'Dental Implants', 'Smile Makeover', 'Root Canal', 'Teeth Whitening', 'Pediatric Dentistry', 'Gum Treatment', 'Crowns & Bridges', 'Laser Dentistry'];
const TRUST_BADGES = [
  { icon: '💳', title: 'EMI Available', desc: 'Easy Monthly Payments' },
  { icon: '🏥', title: 'Insurance Support', desc: 'We accept major insurance' },
  { icon: '💰', title: 'Flexible Payment', desc: 'Plans For Everyone' },
  { icon: '⚙️', title: 'Latest Equipment', desc: 'World class technology' },
  { icon: '🧼', title: 'Sterilisation', desc: '100% with confidence' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f3d2e] text-white">

      {/* Trust Badges */}
      <div className="border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {TRUST_BADGES.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xl">{b.icon}</span>
                <div>
                  <p className="font-semibold text-sm leading-tight">{b.title}</p>
                  <p className="text-xs text-green-300 leading-tight">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">

            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="#1a5f4a" className="w-5 h-5">
                    <path d="M12 2C9.2 2 7 4.2 7 7c0 1.8.8 3.4 2 4.5L12 22l3-10.5C16.2 10.4 17 8.8 17 7c0-2.8-2.2-5-5-5z" />
                  </svg>
                </div>
                <div className="leading-none">
                  <p className="font-extrabold text-[13px] tracking-widest">BOUQUET</p>
                  <p className="font-extrabold text-[13px] tracking-widest">DENTAL</p>
                </div>
              </div>
              <p className="text-green-200 text-xs leading-relaxed mb-5">
                Redefining smiles and changing lives with advanced dental care, personalised treatment and compassionate service.
              </p>
              <div className="flex gap-3">
                {[
                  { label: 'f', href: '#' },
                  { label: 'in', href: 'https://www.instagram.com/bouquetdental/' },
                  { label: 'yt', href: '#' },
                  { label: 'g', href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-xs font-bold text-white">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {QUICK_LINKS.map(link => (
                  <li key={link}>
                    <Link href="#" className="text-green-200 text-xs hover:text-white transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="font-bold text-sm mb-4">Our Treatments</h4>
              <ul className="space-y-2">
                {TREATMENTS.map(t => (
                  <li key={t}>
                    <Link href="#" className="text-green-200 text-xs hover:text-white transition-colors">{t}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-sm mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-green-300 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <a href={`tel:+${PHONE_RAW}`} className="text-green-200 text-xs hover:text-white">{PHONE_DISPLAY}</a>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-green-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-green-200 text-xs">info@bouquetdental.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-green-300 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-green-200 text-xs leading-relaxed">{ADDRESS_LINE1},<br />{ADDRESS_LINE2}</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-bold text-sm mb-4">Open Hours</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium">Mon – Sat</p>
                  <p className="text-green-200 text-xs">10:00 AM – 8:00 PM</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Sunday</p>
                  <p className="text-green-200 text-xs">10:00 AM – 2:00 PM</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-green-300">
          <p>© 2024 Bouquet Dental. All Rights Reserved. This is a demo website and made by Akash Yadav.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
