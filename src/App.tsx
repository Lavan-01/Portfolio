import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Timeline } from './components/Timeline/Timeline';
import { TimelineItem } from './components/Timeline/TimelineItem';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { experiences, education } from './data/experience';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* SVG Gradient Definitions */}
      <svg className="hidden">
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FCD34D' }} />
            <stop offset="50%" style={{ stopColor: '#F59E0B' }} />
            <stop offset="100%" style={{ stopColor: '#D97706' }} />
          </linearGradient>
        </defs>
      </svg>

      <Navbar />
      <Hero />
      <About />
      
      <div className="max-w-5xl mx-auto px-4 py-16" id="experience">
        <Timeline title="Experience">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              title={exp.title}
              organization={exp.organization}
              date={exp.date}
              description={exp.description}
            />
          ))}
        </Timeline>

        <Timeline title="Education">
          {education.map((edu, index) => (
            <TimelineItem
              key={index}
              title={edu.title}
              organization={edu.organization}
              date={edu.date}
              description={edu.description}
            />
          ))}
        </Timeline>
      </div>

      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;