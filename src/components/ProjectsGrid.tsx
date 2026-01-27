import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/data/projects';
import { ProjectsGridProps } from '@/app/types';

export default function ProjectsGrid({ limit }: ProjectsGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="responsive-container py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Real-world applications showcasing modern web and mobile development
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {limit && displayedProjects.length < projects.length && (
        <div className="text-center mt-8 sm:mt-12">
          <a
            href="/projects"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base transition-colors group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </section>
  );
}