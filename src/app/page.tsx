import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid limit={4} />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
