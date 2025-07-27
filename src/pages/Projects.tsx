import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import GeometricAccents from '@/components/GeometricAccents';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Tata Autopilot Mechanic",
      description: "AI-powered DIY repair assistant for EVs using YOLOv8 Computer Vision to detect car parts and dashboard alerts. Generates contextual repair walkthroughs with GPT-4 and includes AR overlays for step-by-step guidance.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop",
      tags: ["Python", "React Native", "GPT-4", "YOLOv8", "ARCore", "Firebase"],
      githubUrl: "https://github.com",
      featured: true,
      inProgress: true
    },
    {
      title: "DressFit",
      description: "AI-driven virtual try-on platform with 3D avatar generation using Ready Player Me API. Features real-time garment customization and realistic fabric draping simulation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop",
      tags: ["ReactJS", "Flask", "Ready Player Me API", "Blender", "WebGL", "AR"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Budget Buddy",
      description: "Smart personal finance web app with expense tracking, savings visualization, and financial goal setting. Features secure JWT authentication and real-time analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop",
      tags: ["ReactJS", "Flask", "MongoDB", "Chart.js", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "NutriMet",
      description: "AI-powered food & nutrition tracker with image recognition for meal logging and nutritional analysis. Includes calorie estimation and health recommendations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop",
      tags: ["Flutter", "Flask", "TensorFlow", "Firebase", "REST APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "Secure File Encryption System",
      description: "Built a local FTP server with encrypted file access using Python and Flask. Features secure login, file download, and key-based decryption.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop",
      tags: ["Python", "Flask", "Cryptography", "Security"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "AI Feedback Generator",
      description: "Participated in fine-tuning a feedback-generating LLM for academic use. Curated and annotated datasets to improve prompt engineering.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=450&fit=crop",
      tags: ["AI/ML", "Python", "NLP", "Dataset Curation"],
      githubUrl: "https://github.com"
    },
    {
      title: "DevHouse'25 Official Website",
      description: "Designed and developed the official website UI for DevHouse'25, focusing on innovation and accessibility with modern web standards.",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=450&fit=crop",
      tags: ["UI/UX", "React", "Web Design", "Accessibility"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    },
    {
      title: "HackHub 25 & BitWars 2.0 UI",
      description: "Led UI design for major hackathon platforms, creating promotional visuals and user interfaces that enhanced participant experience.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=450&fit=crop",
      tags: ["UI/UX", "Event Design", "Adobe Creative Suite", "Figma"],
      githubUrl: "https://github.com",
      liveUrl: "https://demo.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle font-sans">
      <Navigation />
      <GeometricAccents />
      
      <main className="pt-24 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back to home */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Projects
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collection of work spanning AI/ML, web development, UI/UX design, and security implementations.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;