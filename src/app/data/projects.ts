import { Project } from '@/app/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Refil Gas Delivery App',
    description: 'Landing page for a gas delivery app (similar to Chowdeck). Working with a team to develop the full React Native application.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Team Collaboration', 'Landing Page'],
    image: '/images/refil-screenshot.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Islamic Solah Guide App',
    description: 'Mobile application providing comprehensive Islamic prayer guidance. Collaborating with development team.',
    tags: ['React Native', 'Mobile App', 'Team Collaboration', 'UI/UX'],
    image: '/images/solah-app-screenshort.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Developer Portfolio',
    description: 'Modern, responsive portfolio website built with Next.js 16, Tailwind CSS v4, and TypeScript. Features dark theme, project showcase, and contact form.',
    tags: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Responsive Design', 'Vercel'],
    image: '/images/Portfolio-screenshot.png',
    liveUrl: 'https://portfolio-omega-seven-zt41g1a3u0.vercel.app/',
    githubUrl: 'https://github.com/bushsga/portfolio',
    featured: true
  },
  {
    id: 4,
    title: 'Dessert Cart E-commerce',
    description: 'Full-featured e-commerce platform for purchasing desserts online with shopping cart functionality.',
    tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'E-commerce', 'Shopping Cart'],
    image: '/images/Dessert-screenshot.png',
    liveUrl: 'https://dessert-product-list.vercel.app/',
    githubUrl: 'https://github.com/bushsga/Dessert-Product-List.git',
    featured: true
  },
  {
    id: 5,
    title: 'Weather Application',
    description: 'Real-time weather application with location-based forecasts using OpenWeather API.',
    tags: ['React', 'API Integration', 'JavaScript', 'Tailwind CSS', 'Geolocation'],
    image: '/images/weather-app-screenshort.png',
    liveUrl: 'https://weather-app-delta-seven-67.vercel.app/',
    githubUrl: 'https://github.com/bushsga/Weather-app.git',
  },
  {
    id: 6,
    title: 'Therapy Service Website',
    description: 'Professional website for therapy services with appointment booking integration. Connects to Calendly for client sessions.',
    tags: ['Next.js', 'TypeScript', 'Calendly API', 'Service Website', 'Booking System'],
    image: '/images/therapy-screenshot.png',
    liveUrl: 'https://therapy-flax.vercel.app/',
    githubUrl: 'https://github.com/bushsga/therapy',
  },
  {
    id: 7,
    title: 'Task Management App',
    description: 'Interactive todo list application with task creation, editing, deletion, and local storage persistence.',
    tags: ['React', 'JavaScript', 'Local Storage', 'CRUD Operations', 'UI/UX'],
    image: '/images/todo-screenshot.png',
    liveUrl: 'https://todo-list-react-pearl-rho.vercel.app/',
    githubUrl: 'https://github.com/bushsga/todo-list-react',
  },
  {
    id: 8,
    title: 'Dictionary Web App',
    description: 'Comprehensive dictionary application with word definitions, pronunciations, and examples using dictionary API.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'API Integration', 'Responsive Design'],
    image: '/images/dictionary-screenshot.png',
    liveUrl: 'https://dictionary-app-three-kappa.vercel.app/',
    githubUrl: 'https://github.com/bushsga/dictionary-app',
  },
  {
    id: 9,
    title: 'Age Calculator',
    description: 'Interactive age calculator that computes exact age in years, months, and days from birthdate input.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Date Calculations', 'Form Validation'],
    image: '/images/age-calculator-screenshot.png',
    liveUrl: 'https://age-calculator-app-main-three-kappa.vercel.app/',
    githubUrl: 'https://github.com/bushsga/age-calculator-app-main',
  },
  {
    id: 10,
    title: 'Educational Platform',
    description: 'Udemy-like platform where users can pay to access courses. Currently under construction.',
    tags: ['Next.js', 'TypeScript', 'Payment Integration', 'Full-stack', 'In Development'],
    image: '/images/learn-hub-screenshot.png',
    liveUrl: '#',
    githubUrl: '#',
    status: 'in-progress'
  }
];