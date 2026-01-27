import { Briefcase, Calendar, Users } from 'lucide-react';

const experiences = [
  {
    company: 'Luxa Digital Solution',
    position: 'Frontend Developer & Mentor',
    duration: 'Present',
    description: 'Developing web applications and mentoring upcoming developers in internship programs. Working on client projects using React, Next.js, and modern frontend technologies.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Team Leadership'],
  },
  {
    company: 'Freelance Projects',
    position: 'Frontend Developer',
    duration: '3 Years',
    description: 'Built various web applications including e-commerce platforms, educational systems, and utility apps. Collaborated with teams on mobile app development.',
    techStack: ['React Native', 'JavaScript', 'APIs', 'Responsive Design'],
  },
];

export default function ExperienceSection() {
  return (
    <section className="responsive-container py-8 sm:py-12 md:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Professional journey and team collaborations
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden sm:block absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/30 to-purple-600/30"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 sm:mb-12">
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-gray-950 z-10"></div>
              
              <div className="ml-10 sm:ml-16 md:ml-0 bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6 hover:border-gray-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.position}</h3>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                    <span className="text-xs sm:text-sm">{exp.duration}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-300 mb-2 sm:mb-3">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                </div>
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium"
                    >
                      {tech}
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