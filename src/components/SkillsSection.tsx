import { Layout, Smartphone, GitBranch, Database, Code, Palette, Server } from 'lucide-react';
import { SkillCategory } from '@/app/types';

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js 14', 'Tailwind CSS'],
  },
  {
    title: 'Mobile Development',
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['React Native', 'Expo', 'Cross-platform Apps', 'Mobile UI/UX'],
  },
  {
    title: 'Programming',
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['JavaScript', 'TypeScript', 'REST APIs', 'GraphQL Basics'],
  },
  {
    title: 'State Management',
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['React Context API', 'Redux Toolkit', 'Zustand', 'React Query'],
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['Figma', 'Responsive Design', 'Component Libraries', 'Design Systems'],
  },
  {
    title: 'Tools & DevOps',
    icon: <GitBranch className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ['Git & GitHub', 'Vercel', 'Firebase', 'VS Code', 'Jest', 'Testing Library'],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative responsive-container py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#3b82f6 1px, transparent 1px),
            linear-gradient(90deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
            3 years of experience with modern web technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="relative bg-gray-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/5 overflow-hidden"
            >
              {/* Card hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4 sm:mb-5">
                  <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 text-blue-400 rounded-lg mr-3 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-gray-800 text-gray-300 rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}