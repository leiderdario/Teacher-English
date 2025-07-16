import React from 'react';
import { Target, Zap, Heart, Clock } from 'lucide-react';
import { ContentStructure } from '../types';

interface FeaturesSectionProps {
  content: ContentStructure;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
  const icons = [Target, Zap, Heart, Clock];
  const colors = ['blue', 'green', 'purple', 'orange'];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {content.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {content.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index];
            const color = colors[index];
            
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-12 h-12 bg-${color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className={`h-6 w-6 text-${color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};