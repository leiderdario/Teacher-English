import React from 'react';
import { BookOpen, Globe } from 'lucide-react';
import { ContentStructure } from '../types';

interface NavigationProps {
  content: ContentStructure;
  language: 'es' | 'en';
  onLanguageChange: (language: 'es' | 'en') => void;
  onNavigate: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  content,
  language,
  onLanguageChange,
  onNavigate
}) => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Teachers Online</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.home}
            </button>
            <button 
              onClick={() => onNavigate('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.about}
            </button>
            <button 
              onClick={() => onNavigate('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.testimonials}
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {content.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};