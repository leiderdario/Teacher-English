import React from 'react';
import { Target, Zap, Heart, Clock } from 'lucide-react';
import { ContentStructure } from '../types';

interface FeaturesSectionProps {
  content: ContentStructure;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ content }) => {
  const icons = [Target, Zap, Heart, Clock];
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-blue-600',
    'from-purple-500 to-pink-600',
    'from-orange-500 to-red-600'
  ];

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {content.features.title}
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {content.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {content.features.items.map((feature, index) => {
            const Icon = icons[index];
            const gradient = gradients[index];
            
            return (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
                <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
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