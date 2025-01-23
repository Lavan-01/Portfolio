import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left animate-slide-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Lavan Andhavarapu</span>
              <span className="block gradient-text mt-2">Software Engineer In Test</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experienced QA Engineer skilled in ensuring seamless software performance through meticulous testing, automation, and defect resolution.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://github.com/Lavan-01" 
                className="p-3 glass rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lavan-andhavarapu" 
                className="p-3 glass rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:lavanandhavarapu0607@gmail.com" 
                className="p-3 glass rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover-lift"
                aria-label="Email Contact"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-sm mx-auto animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 blur-3xl opacity-20 animate-pulse-slow"></div>
              <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 dark:from-blue-400 dark:to-indigo-400 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob"></div>
                <img
                    src="https://github.com/Lavan-01/Portfolio/blob/main/src/assets/profile-pic.jpeg?raw=true"
                    alt="Profile"
                    className="absolute inset-4 object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] ring-4 ring-white dark:ring-gray-800 shadow-2xl w-[200px] h-[200px] object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}