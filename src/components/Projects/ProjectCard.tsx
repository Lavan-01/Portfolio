import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl 
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover-lift">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a 
            href={githubUrl}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a 
            href={liveUrl}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}