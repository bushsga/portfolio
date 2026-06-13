import { Project } from '@/app/types';

export const projects: Project[] = [
 {
    id: 1,
    title: 'CarDrive – Premium Car Dealership',
    description:
      'A high‑end car dealership business website built with Vite React, TypeScript, Tailwind CSS, and Framer Motion. Showcases vehicles with smooth animations and modern UI.',
    tags: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    images: [
      '/images/car-drive-1.png',
      '/images/car-drive-2.png',
      '/images/car-drive-3.png',
    ],
    liveUrl: 'https://car-drive-sigma.vercel.app/',
    githubUrl: 'https://github.com/bushsga/CarDrive',
    featured: true,
    status: 'completed',
  },
  {
    id: 2,
    title: 'Islamic Solah Guide App',
    description:
      'Mobile application providing comprehensive Islamic prayer guidance. Collaborating with development team.',
    tags: ['React Native', 'Mobile App', 'Team Collaboration', 'UI/UX'],
    images: ['/images/solah-app-screenshort.png'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'in-progress',
  },
 {
    id: 3,
    title: 'The Grid Global – Solar E‑commerce',
    description:
      'Client project: a solar energy e‑commerce website with Paystack payments, SEO, and a full admin panel. Hosted on VPS (cPanel) for client control.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Firebase',
      'Cloudinary',
      'Paystack',
      'SEO',
    ],
    images: [
      '/images/the-grid-1.png',
      '/images/the-grid-2.png',
      '/images/the-grid-3.png',
    ],
    liveUrl: 'https://thegridglobal.com/',
    githubUrl: 'https://github.com/bushsga/The-Grid',
    featured: true,
    status: 'completed',
  },
  {
    id: 4,
    title: 'Refil Gas Delivery App',
    description:
      'Landing page for a gas delivery app (similar to Chowdeck). Working with a team to develop the full React Native application.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Team Collaboration', 'Landing Page'],
    images: [
      '/images/refil-screenshot.png',
      '/images/refil-2.png',
      '/images/refil-3.png',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'in-progress',
  },
  {
    id: 5,
    title: 'Dpilot Collection – Shoe E‑commerce',
    description:
      'Full‑featured shoe store built with Next.js, TypeScript, Tailwind CSS, Supabase, Cloudinary, EmailJS, and Paystack (test mode). Real payment integration coming soon.',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Cloudinary',
      'Paystack',
    ],
    images: [
      '/images/dpilot-1.png',
      '/images/dpilot-2.png',
      '/images/dpilot-3.png',
      '/images/dpilot-4.png',
      '/images/dpilot-5.png',
    ],
    liveUrl: 'https://dpilot-collection.vercel.app/',
    githubUrl: 'https://github.com/bushsga/Dpilot-Collection',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 6,
    title: 'EasyManagement – Inventory Manager',
    description:
      'Smart inventory management for business owners. Tracks profit/loss, capital, stock levels, and restock alerts. Currently building authentication and data sync with Firebase (migrating to Supabase soon).',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Business Tool'],
    images: [
      '/images/easy-management.png',
      '/images/easy-management-1.png',
    ],
    liveUrl: 'https://easy-management-sigma.vercel.app/',
    githubUrl: 'https://github.com/bushsga/EasyManagement',
    featured: false,
    status: 'in-progress',
  },
  {
    id: 7,
    title: 'Educational Platform',
    description:
      'Udemy-like platform where users can pay to access courses. Currently under construction.',
    tags: ['Next.js', 'TypeScript', 'Payment Integration', 'Full-stack', 'In Development'],
    images: ['/images/learn-hub-screenshot.png'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'in-progress',
  },
];