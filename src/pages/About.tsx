import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Hi, I'm Shruti Selvakkumar
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a dedicated software developer with a passion for creating innovative 
                solutions and beautiful user experiences. My journey in technology is driven 
                by curiosity and a commitment to continuous learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web development, working with cutting-edge technologies 
                to build scalable applications that make a difference. I believe in writing 
                clean, maintainable code and following best practices.
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button variant="hero" asChild>
                  <a href="https://github.com/shhruti-me" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="http://www.linkedin.com/in/shrutiselvakkumar" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">Skills & Expertise</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Frontend Development</h4>
                      <p className="text-sm text-muted-foreground">
                        React, TypeScript, Tailwind CSS, Modern JavaScript
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Development Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Git, VS Code, Vite, npm/yarn, Responsive Design
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Core Principles</h4>
                      <p className="text-sm text-muted-foreground">
                        Clean Code, User Experience, Performance Optimization
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="mb-6 opacity-90">
                Interested in collaborating? I'm always open to discussing new opportunities 
                and exciting projects.
              </p>
              <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                <a href="/contact">
                  <Mail className="w-4 h-4" />
                  Get In Touch
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;