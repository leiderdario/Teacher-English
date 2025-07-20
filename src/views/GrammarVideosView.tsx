import React from 'react';
import { Play, Clock, ArrowLeft } from 'lucide-react';
import { GrammarLevel } from '../types';

interface GrammarVideosViewProps {
  language: 'es' | 'en';
  grammarLevels: GrammarLevel[];
  onBackToHome: () => void;
}

export const GrammarVideosView: React.FC<GrammarVideosViewProps> = ({
  language,
  grammarLevels,
  onBackToHome
}) => {
  const title = language === 'es' ? 'Video Lecciones' : 'Video Lessons';
  const subtitle = language === 'es' 
    ? '¡Domina el inglés conversacional de manera rápida y efectiva! Aprende con videos cortos y prácticos, diseñados para que hables con confianza desde el primer día' 
    : 'Learn English conversationally in a fast and effective way! Learn with short and practical videos, designed to make you speak confidently from the first day';
  const backText = language === 'es' ? 'Volver al Inicio' : 'Back to Home';

  const levelColors = [
    'from-green-500 to-emerald-600',
    'from-blue-500 to-cyan-600', 
    'from-purple-500 to-violet-600',
    'from-orange-500 to-amber-600',
    'from-red-500 to-rose-600',
    'from-indigo-500 to-blue-600'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBackToHome}
            className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>{backText}</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto">{subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tutor Introduction Video */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {language === 'es' ? 'Conoce a tu Tutor' : 'Meet Your Tutor'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'es' 
                ? 'Descubre por qué miles de estudiantes han elegido aprender inglés con Eder. Un método probado que realmente funciona.'
                : 'Discover why thousands of students have chosen to learn English with Eder. A proven method that really works.'
              }
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Video Player */}
              <div className="relative">
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {/* Placeholder for actual video */}
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                      <p className="text-lg font-medium">
                        {language === 'es' ? 'Reproducir Video de Presentación' : 'Play Introduction Video'}
                      </p>
                      <p className="text-sm text-gray-300 mt-2">
                        {language === 'es' ? 'Duración: 3:45' : 'Duration: 3:45'}
                      </p>
                    </div>
                  </div>
                  
                  {/* Video overlay with play button */}
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-8 w-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {language === 'es' ? 'Soy Eder' : 'I\'m Eder'}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {language === 'es'
                      ? 'Tutor certificado TEFL/TESOL con más de 10 años de experiencia. En este video explico exactamente cómo el método personalizado ha ayudado a más de 1,000 estudiantes a dominar el inglés de manera natural y efectiva, además de obtener certificado en enseñanza del idioma inglés.'
                      : 'In this video I explain exactly how my personalized method has helped over 1,000 students master English naturally and effectively.'
                    }
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      {language === 'es'
                        ? 'Método 100% personalizado adaptado a tu nivel y objetivos'
                        : '100% personalized method adapted to your level and goals'
                      }
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      {language === 'es'
                        ? 'Certificación TESOL/TEFL con más de 10 años de experiencia'
                        : 'TESOL/TEFL certification with over 10 years of experience'
                      }
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      {language === 'es'
                        ? 'Resultados comprobados: 98% de satisfacción de estudiantes'
                        : 'Proven results: 98% student satisfaction rate'
                      }
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={onBackToHome}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    {language === 'es' ? 'Reservar Clase Gratuita' : 'Book Free Class'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Stats */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">
                {language === 'es' ? 'Estudiantes Exitosos' : 'Successful Students'}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">
                {language === 'es' ? 'Satisfacción' : 'Satisfaction Rate'}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">
                {language === 'es' ? 'Años de Experiencia' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grammar Levels */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {grammarLevels.map((level, levelIndex) => (
              <div key={level.id} className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Level Header */}
                <div className={`bg-gradient-to-r ${levelColors[levelIndex]} p-8 text-white`}>
                  <h2 className="text-4xl font-bold mb-2">{level.name}</h2>
                  <p className="text-xl opacity-90">{level.description}</p>
                </div>

                {/* Videos Grid */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {level.videos.map((video) => (
                      <div key={video.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                          {/* Video Thumbnail */}
                          <div className="relative">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                            
                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                                <Play className="h-8 w-8 text-white ml-1" />
                              </div>
                            </div>

                            {/* Duration */}
                            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{video.duration}</span>
                            </div>
                          </div>

                          {/* Video Info */}
                          <div className="p-4 bg-white">
                            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                              {video.title}
                            </h3>
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {video.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};