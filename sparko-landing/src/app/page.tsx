import HeroSection from '@/components/landing/HeroSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import WatchSection from '@/components/landing/WatchSection';
import ProblemsFeaturesSection from '@/components/landing/ProblemsFeaturesSection';

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ background: 'radial-gradient(circle at center, #2B4373 0%, #05122D 100%)' }}
    >
      <HeroSection />
      <TestimonialsSection />
      <WatchSection />
      <ProblemsFeaturesSection />
    </main>
  );
}
