import { lazy, Suspense } from 'react';
import LoadingFallback from '../../components/LoadingFallBack';

const HeroSection = lazy(() => import('../../sections/HeroSection'));
const AboutSection = lazy(() => import('../../sections/AboutSection'));
const SkillsSection = lazy(() => import('../../sections/SkillsSection'));
const ProjectsSection = lazy(() => import('../../sections/ProjectsSection'));
const ContactSection = lazy(() => import('../../sections/ContactSection'));

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </Suspense>
  );
};

export default HomePage;
