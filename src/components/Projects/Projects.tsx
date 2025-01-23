import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="projects">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}