import { Project } from '@/app/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Refil Gas Delivery App',
    description: 'A business strategy platform operating like Chowdeck for gas delivery. Built with React Native and Next.js. Working with a team to develop both mobile app and landing page.',
    tags: ['React Native', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Team Collaboration'],
    image: '/projects/refil-app.jpg',
    liveUrl: '#', // Will update when available
    githubUrl: '#',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 2,
    title: 'Islamic Solah Guide App',
    description: 'Mobile application providing comprehensive Islamic prayer guidance. Collaborating with development team, soon to be in production.',
    tags: ['React Native', 'Mobile App', 'Team Collaboration', 'UI/UX'],
    image: '/projects/solah-app.jpg',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    status: 'in-progress'
  },
  {
    id: 3,
    title: 'Dessert Cart',
    description: 'E-commerce platform for purchasing delicious desserts online with shopping cart functionality.',
    tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'E-commerce'],
    image: '/projects/dessert-cart.jpg',
    liveUrl: 'https://dessert-product-list.vercel.app/',
    githubUrl: 'https://github.com/bushsga/Dessert-Product-List.git',
    featured: true
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts using weather API.',
    tags: ['React', 'API Integration', 'JavaScript', 'Tailwind CSS'],
    image: '/projects/weather-app.jpg',
    liveUrl: 'https://weather-app-delta-seven-67.vercel.app/',
    githubUrl: 'https://github.com/bushsga/Weather-app.git',
  },
  {
    id: 5,
    title: 'Educational Platform',
    description: 'Udemy-like platform where users can pay to access courses. Currently under construction.',
    tags: ['Next.js', 'TypeScript', 'Payment Integration', 'Full-stack'],
    image: '/projects/education-platform.jpg',
    liveUrl: '#',
    githubUrl: '#',
    status: 'in-progress'
  }
];