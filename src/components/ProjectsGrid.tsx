import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '@/app/data/projects';
import { ProjectsGridProps } from '@/app/types';
import Link from 'next/link';

export default function ProjectsGrid({ limit }: ProjectsGridProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;
  const showViewAll = limit && displayedProjects.length < projects.length;

  return (
    <section id="projects" className="responsive-container py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {limit ? 'Featured Projects' : 'All Projects'}
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          {limit 
            ? `Showing ${displayedProjects.length} of ${projects.length} real-world applications`
            : `Showing all ${projects.length} projects including web apps, mobile apps, and JavaScript utilities`}
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {showViewAll && (
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:opacity-90 transition-all font-medium text-sm sm:text-base group"
          >
            View All {projects.length} Projects
            <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  );
}