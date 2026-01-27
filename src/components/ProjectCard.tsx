import { ExternalLink, Github, Star, Wrench, Lock } from 'lucide-react';
import { ProjectCardProps } from '@/app/types';

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        {project.featured && (
          <div className="absolute top-4 left-4 flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-3 py-1.5 rounded-full text-sm font-medium text-blue-300">
            <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
            Featured
          </div>
        )}
        {project.status === 'in-progress' && (
          <div className="absolute top-4 right-4 flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-3 py-1.5 rounded-full text-sm font-medium text-yellow-300">
            <Wrench className="w-3.5 h-3.5 mr-1.5" />
            In Progress
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
        <p className="text-gray-400 mb-5 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium hover:bg-gray-700 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-5 border-t border-gray-800">
          {project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group/link"
            >
              Live Demo
              <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
          ) : (
            <div className="inline-flex items-center text-gray-500 cursor-not-allowed">
              <Lock className="w-4 h-4 mr-2" />
              Private Project
            </div>
          )}
          {project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-5 h-5" />
            </a>
          ) : (
            <div className="text-gray-600 p-2">
              <Github className="w-5 h-5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}