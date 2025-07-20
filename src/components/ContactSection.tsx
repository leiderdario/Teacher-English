import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { ContentStructure, ContactForm } from '../types';

interface ContactSectionProps {
  content: ContentStructure;
  formData: ContactForm;
  isLoading: boolean;
  error: string | null;
  onFormChange: (field: keyof ContactForm, value: string) => void;
  onSubmit: () => Promise<{ success: boolean; message: string }>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  content,
  formData,
  isLoading,
  error,
  onFormChange,
  onSubmit
}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await onSubmit();
    if (result.success) {
      alert(result.message);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <div className="text-center text-white mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              {content.cta.title}
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              {content.cta.subtitle}
            </p>

            <button className="bg-green-500 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-green-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 mb-16">
              {content.cta.contact}
            </button>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              {content.contact.title}
            </h3>
            <p className="text-xl text-gray-600 mb-12 text-center">
              {content.contact.subtitle}
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder={content.contact.form.name}
                  value={formData.name}
                  onChange={(e) => onFormChange('name', e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder={content.contact.form.email}
                  value={formData.email}
                  onChange={(e) => onFormChange('email', e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder={content.contact.form.phone}
                  value={formData.phone}
                  onChange={(e) => onFormChange('phone', e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <select
                  value={formData.level}
                  onChange={(e) => onFormChange('level', e.target.value)}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-lg"
                  required
                  disabled={isLoading}
                >
                  <option value="">{content.contact.form.level}</option>
                  {content.contact.levels.map((level, index) => (
                    <option key={index} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder={content.contact.form.message}
                  value={formData.message}
                  onChange={(e) => onFormChange('message', e.target.value)}
                  rows={5}
                  className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-lg"
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-5 rounded-xl font-bold text-xl hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {isLoading ? 'Enviando...' : content.contact.form.submit}
              </button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-center space-x-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>+57 (300) 3004870901</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span>onlinetutor.tutor@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};