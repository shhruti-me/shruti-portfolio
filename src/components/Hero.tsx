import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/3 to-transparent rounded-full blur-2xl" />
      
      <div className="text-center max-w-4xl mx-auto px-8 relative z-10">
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
          Shruti S
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between UI/UX design and technical implementation through creative problem-solving.
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="hero" 
          size="lg"
          className="px-8 py-6 text-lg"
          onClick={() => window.location.href = '/projects'}
        >
          View Projects
        </Button>
        
        {/* Geometric accent line */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="w-20 h-0.5 bg-primary opacity-60" />
        </div>
      </div>
    </main>
  );
};

export default Hero;