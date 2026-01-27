'use client';

import { useState } from 'react';
import { Menu, X, Code2, Mail, Home, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { NavItem } from '@/app/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'Projects', href: '/projects', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 text-xl font-bold">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ibrahim.dev
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1.5 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span>{item.name}</span>
              </Link>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2.5 py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}