'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ExternalLink, Github, Star, Wrench, Lock, X, Code } from 'lucide-react';
import { ProjectCardProps } from '@/app/types';
import Image from 'next/image';

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isModalOpenRef = useRef(false);
  
  // Keep a ref to currentImageIndex so interval always reads latest value
  const currentImageIndexRef = useRef(0);

  // Sync refs with state
  useEffect(() => {
    isModalOpenRef.current = isModalOpen;
  }, [isModalOpen]);

  useEffect(() => {
    currentImageIndexRef.current = currentImageIndex;
  }, [currentImageIndex]);

  // Auto-slide for cards with multiple images
  useEffect(() => {
    // Only set up interval if there are multiple images
    if (project.images.length <= 1) return;

    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval - use ref to get latest index
    intervalRef.current = setInterval(() => {
      if (!isModalOpenRef.current) {
        const nextIndex = (currentImageIndexRef.current + 1) % project.images.length;
        setCurrentImageIndex(nextIndex);
      }
    }, 3000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [project.images.length]);

  const handleCardClick = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project.images.length]);

  return (
    <>
      {/* ---------- Card ---------- */}
      <div
        onClick={handleCardClick}
        className="group bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-800">
          {project.images.length > 0 ? (
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={currentImageIndex === 0}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between">
            <div className="flex gap-2">
              {project.featured && (
                <div className="flex items-center bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 px-3 py-1.5 rounded-full text-sm font-medium text-blue-300">
                  <Star className="w-3.5 h-3.5 mr-1.5 fill-current" />
                  Featured
                </div>
              )}
            </div>
            {project.status === 'in-progress' && (
              <div className="flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-3 py-1.5 rounded-full text-sm font-medium text-yellow-300">
                <Wrench className="w-3.5 h-3.5 mr-1.5" />
                In Progress
              </div>
            )}
          </div>

          {/* Image dots (if multiple images) */}
          {project.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? 'bg-white scale-110'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <p className="text-gray-400 mb-5 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
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
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors group/link text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
                <ExternalLink className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            ) : (
              <div className="inline-flex items-center text-gray-500 cursor-not-allowed text-sm sm:text-base">
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
                onClick={(e) => e.stopPropagation()}
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

      {/* ---------- Modal (unchanged) ---------- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="relative h-48 sm:h-56 w-full rounded-xl overflow-hidden mb-6 bg-gray-800">
                {project.images.length > 0 ? (
                  <>
                    <Image
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors text-lg leading-none"
                        >
                          ‹
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors text-lg leading-none"
                        >
                          ›
                        </button>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                          {project.images.map((_, idx) => (
                            <span
                              key={idx}
                              className={`w-2 h-2 rounded-full ${
                                idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-3xl">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white flex-grow">
                  {project.title}
                </h2>
                {project.featured && (
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
                {project.status === 'in-progress' && (
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium">
                    In Progress
                  </span>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                {project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Live Site
                  </a>
                )}
                {project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center border border-gray-700 text-gray-300 px-6 py-3.5 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Source Code
                  </a>
                )}
                {project.liveUrl === '#' && project.githubUrl === '#' && (
                  <div className="text-center text-gray-500 italic">
                    Private project – details available upon request
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}