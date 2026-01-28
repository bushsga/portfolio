'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code2, Mail, Home, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';
import { NavItem } from '@/app/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'Projects', href: '/projects', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg' 
          : 'bg-gray-900/90 backdrop-blur-md border-b border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-xl font-bold hover:scale-105 transition-transform"
            >
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ibrahim.dev
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors group relative"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              <a
                href="tel:07087353925"
                className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call: 07087353925</span>
                <span className="lg:hidden">Call</span>
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:opacity-90 hover:scale-105 transition-all font-medium"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2.5 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-800 mt-2">
                <a
                  href="tel:07087353925"
                  className="flex items-center space-x-2.5 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: 07087353925</span>
                </a>
                <a
                  href="#contact"
                  className="block mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16"></div>
    </>
  );
}