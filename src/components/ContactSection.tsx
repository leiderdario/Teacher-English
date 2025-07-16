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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {content.cta.title}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {content.cta.subtitle}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-green-400" />
                <span className="text-lg">+57 (300) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-6 w-6 text-blue-300" />
                <span className="text-lg">info@teachersonline.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-green-400" />
                <span className="text-lg">WhatsApp: +57 (300) 123-4567</span>
              </div>
            </div>

            <button className="mt-8 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {content.cta.contact}
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {content.contact.title}
            </h3>
            <p className="text-gray-600 mb-8">
              {content.contact.subtitle}
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder={content.contact.form.name}
                  value={formData.name}
                  onChange={(e) => onFormChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  required
                  disabled={isLoading}
                />
              </div>
              
              <div>
                <select
                  value={formData.level}
                  onChange={(e) => onFormChange('level', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
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
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  disabled={isLoading}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : content.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};