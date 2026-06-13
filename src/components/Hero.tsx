'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play the video immediately
    const attemptPlay = async () => {
      try {
        await video.play();
        // Video is playing successfully
        setVideoError(false);
      } catch (err) {
        console.log('Video play failed, using fallback image:', err);
        setVideoError(true);
      }
    };

    const handleError = () => {
      console.log('Video error, using fallback image');
      setVideoError(true);
    };

    // If video is already loaded enough to play
    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      // Wait for it to be ready
      video.addEventListener('canplay', attemptPlay, { once: true });
    }

    video.addEventListener('error', handleError, { once: true });

    return () => {
      video.removeEventListener('canplay', attemptPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="relative overflow-hidden responsive-container responsive-padding min-h-[90vh] flex items-center">
      {/* Fallback Background Image - always there as base layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/coding-bg.jpg')",
          zIndex: 0,
        }}
      />

      {/* Background Video - overlays the image when playing */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover ${
          videoError ? 'hidden' : 'block'
        }`}
        style={{ zIndex: 0 }}
      >
        <source src="/videos/coding-bg.mp4" type="video/mp4" />
        <source src="/videos/coding-bg.webm" type="video/webm" />
      </video>

      {/* Overlay Gradient - always on top of both image and video */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/60 to-gray-950/70"
        style={{ zIndex: 1 }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 mb-4 sm:mb-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
          Open to opportunities
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-white">
            Ibrahim Jamiu
          </span>
          <br />
          <span className="text-gray-400">Akeem</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-6 sm:mb-8">
          Frontend Developer specializing in{' '}
          <span className="text-blue-400">React</span>,{' '}
          <span className="text-blue-400">Next.js</span>, and{' '}
          <span className="text-blue-400">React Native</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-3xl leading-relaxed">
            With 3+ years of experience crafting high-performance web applications, I specialize in building 
  modern e-commerce platforms, business management tools, and interactive web experiences. 
  Currently working at Luxa Digital Solution as a Frontend Developer & Mentor while building 
  full-stack applications using Next.js, TypeScript, and Supabase. From solar energy marketplaces 
  to inventory management systems and premium car dealership showcases, I turn complex ideas 
  into seamless digital products with integrated payment systems and real-time data management.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:opacity-90 transition-all hover:scale-[1.02] font-medium text-sm sm:text-base group"
          >
            View My Projects
            <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-gray-700 text-gray-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-colors font-medium text-sm sm:text-base"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-6 text-gray-400">
          <a
            href="mailto:ibrahimjamiuakeem@gmail.com"
            className="flex items-center hover:text-white transition-colors text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            ibrahimjamiuakeem@gmail.com
          </a>
          <a
            href="tel:07087353925"
            className="flex items-center hover:text-white transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            07087353925
          </a>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="https://github.com/bushsga"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ibrahim-jamiu-akeem-880a6b34b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors p-1.5 sm:p-2 hover:bg-gray-800 rounded-lg"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}