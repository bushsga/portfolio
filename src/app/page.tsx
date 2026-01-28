import Hero from '@/components/Hero';
import ProjectsGrid from '@/components/ProjectsGrid';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsGrid limit={6} /> {/* Show 6 projects on homepage */}
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
