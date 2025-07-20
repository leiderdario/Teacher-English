import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-10 w-10 text-blue-400" />
            <span className="text-2xl font-bold">Teachers Online</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-lg">
              © 2024 Teachers Online. Todos los derechos reservados.
            </p>
            <p className="text-base text-gray-500 mt-2">
              TESOL/TEFL Certified English Tutor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};