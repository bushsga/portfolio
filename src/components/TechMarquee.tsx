'use client';

import { 
  Code2, 
  Globe, 
  Smartphone, 
  Database, 
  Palette, 
  GitBranch,
  Layers,
  Cpu,
  Cloud,
  Terminal
} from 'lucide-react';

const techStack = [
  { name: 'React.js', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Next.js 14', icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', icon: <Terminal className="w-5 h-5" /> },
  { name: 'JavaScript', icon: <Code2 className="w-5 h-5" /> },
  { name: 'Tailwind CSS', icon: <Palette className="w-5 h-5" /> },
  { name: 'React Native', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Redux Toolkit', icon: <Database className="w-5 h-5" /> },
  { name: 'Zustand', icon: <Layers className="w-5 h-5" /> },
  { name: 'React Query', icon: <Database className="w-5 h-5" /> },
  { name: 'Firebase', icon: <Cloud className="w-5 h-5" /> },
  { name: 'Supabase', icon: <Database className="w-5 h-5" /> },
  { name: 'Git & GitHub', icon: <GitBranch className="w-5 h-5" /> },
  { name: 'Figma', icon: <Palette className="w-5 h-5" /> },
  { name: 'Vercel', icon: <Globe className="w-5 h-5" /> },
  { name: 'HTML5', icon: <Code2 className="w-5 h-5" /> },
  { name: 'CSS3', icon: <Palette className="w-5 h-5" /> },
  { name: 'REST APIs', icon: <Cpu className="w-5 h-5" /> },
  { name: 'Framer Motion', icon: <Layers className="w-5 h-5" /> },
];

export default function TechMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-900/50 border-y border-gray-800 py-4 sm:py-5">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-transparent to-gray-950 z-10 pointer-events-none" />
      
      {/* Marquee content - duplicated for seamless loop */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-4 sm:mx-6 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-blue-400 mr-2">{tech.icon}</span>
            <span className="text-sm sm:text-base font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}