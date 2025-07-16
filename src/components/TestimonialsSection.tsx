import React from 'react';
import { Star } from 'lucide-react';
import { ContentStructure } from '../types';

interface TestimonialsSectionProps {
  content: ContentStructure;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ content }) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {content.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            {content.testimonials.subtitle}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {content.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.testimonials.items.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
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