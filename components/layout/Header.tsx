'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';

const TREATMENTS = [
  'Invisalign', 'Braces', 'Dental Implants', 'Smile Makeover',
  'Root Canal', 'Teeth Whitening', 'Pediatric Dentistry', 'Gum Treatment',
  'Crowns & Bridges', 'Laser Dentistry',
];

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Smile Transformations', href: '#transformations' },
  { label: 'Patient Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const { openModal } = useBooking();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastY.current && y > 80) {
        setHidden(true);   // scrolling down → hide
      } else {
        setHidden(false);  // scrolling up → show
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'border-b border-gray-100'
      } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-full bg-[#1a5f4a] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2C9.2 2 7 4.2 7 7c0 1.8.8 3.4 2 4.5L12 22l3-10.5C16.2 10.4 17 8.8 17 7c0-2.8-2.2-5-5-5z" />
              </svg>
            </div>
            <div className="leading-none">
              <p className="text-[#1a5f4a] font-extrabold text-[13px] tracking-widest">BOUQUET</p>
              <p className="text-[#1a5f4a] font-extrabold text-[13px] tracking-widest">DENTAL</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 text-[13px] font-medium">
            <Link href="/" className="text-[#1a5f4a] border-b-2 border-[#1a5f4a] pb-0.5">Home</Link>

            <div
              className="relative"
              onMouseEnter={() => setDropOpen(true)}
              onMouseLeave={() => setDropOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-700 hover:text-[#1a5f4a] py-5 transition-colors">
                Treatments
                <svg className={`w-3 h-3 transition-transform ${dropOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 transition-all duration-200 ${
                  dropOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {TREATMENTS.map(t => (
                  <Link
                    key={t}
                    href={`#${t.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`}
                    className="block px-4 py-2 text-[13px] text-gray-600 hover:bg-[#e8f5f0] hover:text-[#1a5f4a] transition-colors"
                  >
                    {t}
                  </Link>
                ))}
              </div>
            </div>

            {NAV_LINKS.map(({ label, href }) => (
              <Link key={label} href={href} className="text-gray-700 hover:text-[#1a5f4a] transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919821125140" className="flex items-center gap-1.5 text-[13px] font-medium text-gray-700 hover:text-[#1a5f4a] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.58l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +91-98211 25140
            </a>
            <button
              onClick={() => openModal()}
              className="bg-[#1a5f4a] text-white text-[13px] font-semibold px-4 py-2 rounded-lg hover:bg-[#124035] active:scale-95 transition-all"
            >
              Book Appt
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-600 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 pb-4">
            <Link href="/" className="px-3 py-2.5 text-sm font-medium text-[#1a5f4a] bg-[#e8f5f0] rounded-lg">Home</Link>
            <Link href="#treatments" className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Treatments</Link>
            <Link href="#about" className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">About Us</Link>
            <Link href="#transformations" className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Smile Transformations</Link>
            <Link href="#reviews" className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Patient Reviews</Link>
            <Link href="#contact" className="px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Contact</Link>
            <div className="flex gap-3 mt-2">
              <a href="tel:+919821125140" className="flex-1 text-center border-2 border-[#1a5f4a] text-[#1a5f4a] text-sm font-semibold py-2.5 rounded-lg">Call Now</a>
              <button onClick={() => { openModal(); setMenuOpen(false); }} className="flex-1 text-center bg-[#1a5f4a] text-white text-sm font-semibold py-2.5 rounded-lg">
                Book Appt
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
