import Hero from '@/components/sections/Hero';
import ReviewsStrip from '@/components/sections/ReviewsStrip';
import Treatments from '@/components/sections/Treatments';
import SmileTransformations from '@/components/sections/SmileTransformations';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import DoctorSection from '@/components/sections/DoctorSection';
import VideoTestimonials from '@/components/sections/VideoTestimonials';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import VisitUs from '@/components/sections/VisitUs';

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewsStrip />
      <Treatments />
      <SmileTransformations />
      <WhyChooseUs />
      <DoctorSection />
      <VideoTestimonials />
      <FAQ />
      <CTABanner />
      <VisitUs />
    </>
  );
}
