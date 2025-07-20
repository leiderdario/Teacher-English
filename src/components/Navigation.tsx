import React from 'react';
import { Globe } from 'lucide-react';
import { ContentStructure } from '../types';

interface NavigationProps {
  content: ContentStructure;
  language: 'es' | 'en';
  currentView: 'home' | 'grammar-videos';
  onLanguageChange: (language: 'es' | 'en') => void;
  onNavigate: (sectionId: string) => void;
  onViewChange: (view: 'home' | 'grammar-videos') => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  content,
  language,
  currentView,
  onLanguageChange,
  onNavigate,
  onViewChange
}) => {
  const grammarText = language === 'es' ? 'Video Lecciones' : 'Video Lessons';
  const homeText = language === 'es' ? 'Inicio' : 'Home';

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img src="/gallery/Img/logo.png" alt="Logo" className="h-20 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => currentView === 'home' ? onNavigate('home') : onViewChange('home')}
              className={`transition-colors font-medium text-lg ${
                currentView === 'home' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {homeText}
            </button>
            <button 
              onClick={() => onViewChange('grammar-videos')}
              className={`transition-colors font-medium text-lg ${
                currentView === 'grammar-videos' 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {grammarText}
            </button>
            <button 
              onClick={() => currentView === 'home' ? onNavigate('features') : onViewChange('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
            >
              {content.nav.about}
            </button>
            <button 
              onClick={() => currentView === 'home' ? onNavigate('testimonials') : onViewChange('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-lg"
            >
              {content.nav.testimonials}
            </button>
            <button 
              onClick={() => currentView === 'home' ? onNavigate('contact') : onViewChange('home')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              {content.nav.contact}
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onLanguageChange(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 px-4 py-2 rounded-full border border-gray-300 hover:border-blue-600 transition-colors"
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