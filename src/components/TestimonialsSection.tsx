import React from 'react';
import { Star } from 'lucide-react';
import { ContentStructure } from '../types';

interface TestimonialsSectionProps {
  content: ContentStructure;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ content }) => {
  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            {content.testimonials.title}
          </h2>
          <p className="text-2xl text-gray-600 mb-6">
            {content.testimonials.subtitle}
          </p>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {content.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {content.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="flex items-center mb-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic leading-relaxed font-medium">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-6">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-base text-gray-600 mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};