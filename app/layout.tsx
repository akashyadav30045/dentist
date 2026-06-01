import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import BookingModal from '@/components/ui/BookingModal';
import StickyBookingBar from '@/components/ui/StickyBookingBar';
import { BookingProvider } from '@/context/BookingContext';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Bouquet Dental | Advanced Orthodontics, Implants & Dental Care in Noida',
  description:
    '18+ years experience. 400+ 5-star reviews. Sir Ganga Ram Hospital Consultant & Invisalign Certified Provider in Sector 110, Noida.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <BookingProvider>
          <Header />
          <main className="flex-1 w-full max-w-full overflow-x-hidden">{children}</main>
          <Footer />
          <MobileBottomNav />
          <BookingModal />
          <StickyBookingBar />

          {/* WhatsApp Floating Button */}
          <a
            href="https://wa.me/919821125140"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-20 right-5 lg:bottom-24 lg:right-6 z-50 bg-[#25d366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#20b857] hover:scale-110 transition-all duration-200"
            style={{ width: '52px', height: '52px' }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.358A9.945 9.945 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182a8.182 8.182 0 110-16.364 8.182 8.182 0 010 16.364z" />
            </svg>
          </a>
        </BookingProvider>
      </body>
    </html>
  );
}
