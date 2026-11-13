import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import MethodSection from '@/components/MethodSection';
import StudentsSection from '@/components/StudentsSection';
import PortfolioSection from '@/components/PortfolioSection';
import TrustSection from '@/components/TrustSection';
import BadgeSection from '@/components/BadgeSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <MethodSection />
      <StudentsSection />
      <PortfolioSection />
      <TrustSection />
      <BadgeSection />
    </main>
  );
}
