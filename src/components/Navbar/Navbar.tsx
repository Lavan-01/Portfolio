import React, { useState, useEffect } from 'react';
import { Menu, Star, X } from 'lucide-react';
import { navigationItems } from '../../constants/navigation';
import { ThemeToggle } from '../ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('#hero')}
            className="text-xl font-bold hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
          >
            <div className="animate-spin-slow relative">
              <Star className="w-8 h-8 star-icon" strokeWidth={1.5} />
            </div>
          </button>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isOpen 
              ? 'max-h-[280px] opacity-100 border-t border-gray-100 dark:border-gray-800 mt-2' 
              : 'max-h-0 opacity-0'
          } overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-b-lg shadow-lg`}
        >
          <div className="py-4 space-y-1">
            {navigationItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                style={{
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}