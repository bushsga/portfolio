import ProjectsGrid from '@/components/ProjectsGrid';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <div className="responsive-container py-8 sm:py-12">
        <div className="mb-8 sm:mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            A comprehensive collection of {10} web and mobile development projects. 
            From React applications to vanilla JavaScript utilities.
          </p>
        </div>

        {/* All Projects - No limit */}
        <ProjectsGrid />
        
        {/* Stats Section - UPDATED FOR 10 PROJECTS */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">10</div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">8</div>
              <div className="text-gray-400 text-sm">Live Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="text-gray-400 text-sm">In Progress</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}