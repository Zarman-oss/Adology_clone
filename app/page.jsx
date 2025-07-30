import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ModulesSection from '@/components/ModulesSection';
import Navbar from '@/components/Navbar';
import ProblemSection from '@/components/ProblemSection';
import ProblemSolution from '@/components/ProblemSolution';
import SuccessStory from '@/components/SuccessStory';
import WhyAdology from '@/components/WhyAdology';
import WorksSection from '@/components/WorksSection';

export default function Home() {
  return (
    <>
      <div className='section-container'>
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <WorksSection />
        <ProblemSolution />
        <ModulesSection />
        <SuccessStory />
        <WhyAdology />
      </div>
      <Footer />
    </>
  );
}
