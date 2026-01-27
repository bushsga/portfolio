import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ibrahim Jamiu Akeem
            </p>
            <p className="text-gray-400 mt-1">Frontend Developer & React Specialist</p>
          </div>
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> 
              using Next.js & TypeScript
            </p>
            <p className="text-gray-500 text-sm mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built with modern web technologies • Optimized for performance • 
            <span className="text-green-400 ml-1">●</span> Portfolio v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}