import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ibrahim Jamiu Akeem - Frontend Developer',
  description: 'Frontend Developer specializing in React, Next.js, and React Native with 3 years of experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Navigation is fixed, so it stays at top */}
        <Navigation />
        
        {/* Main content starts below the fixed nav */}
        <main className="min-h-screen bg-gray-950 text-gray-100">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
