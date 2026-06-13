import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import TechMarquee from '@/components/TechMarquee';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <ProjectsGrid limit={6} /> 
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
