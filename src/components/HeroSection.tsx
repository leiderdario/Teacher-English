import React from 'react';
import { Award, CheckCircle, MessageCircle } from 'lucide-react';
import { ContentStructure } from '../types';

interface HeroSectionProps {
  content: ContentStructure;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, onNavigate }) => {
  return (
    <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm">
                <Award className="h-4 w-4" />
                <span>TESOL/TEFL Certified</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                {content.hero.subtitle}
              </p>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                {content.hero.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
              >
                {content.hero.cta}
              </button>
              <button 
                onClick={() => onNavigate('testimonials')}
                className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                {content.hero.cta2}
              </button>
            </div>

            <div className="flex items-center justify-center space-x-16 pt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white">1000+</div>
                <div className="text-lg text-blue-200">Estudiantes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">98%</div>
                <div className="text-lg text-blue-200">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white">10+</div>
                <div className="text-lg text-blue-200">Años Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};