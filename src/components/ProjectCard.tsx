import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  inProgress?: boolean;
}

const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl, featured, inProgress }: ProjectCardProps) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg bg-card border transition-all duration-300 hover:-translate-y-1 ${featured ? 'border-primary shadow-glow' : 'border-border hover:shadow-elegant'}`}>
      {/* Badges */}
      {(featured || inProgress) && (
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {featured && (
            <span className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full font-medium">
              Featured
            </span>
          )}
          {inProgress && (
            <span className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full font-medium">
              In Progress
            </span>
          )}
        </div>
      )}
      
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-accent text-accent-foreground rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;