import React from 'react';
import { useAppController } from '../hooks/useAppController';
import { Navigation } from '../components/Navigation';
import { GrammarVideosView } from './GrammarVideosView';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const MainView: React.FC = () => {
  const { state, actions, getters } = useAppController();
  const content = getters.getContent();
  const grammarLevels = getters.getGrammarLevels();

  if (state.currentView === 'grammar-videos') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          content={content}
          language={state.language}
          currentView={state.currentView}
          onLanguageChange={actions.setLanguage}
          onNavigate={actions.scrollToSection}
          onViewChange={actions.setCurrentView}
        />
        <GrammarVideosView
          language={state.language}
          grammarLevels={grammarLevels}
          onBackToHome={() => actions.setCurrentView('home')}
        />
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <Navigation
        content={content}
        language={state.language}
        currentView={state.currentView}
        onLanguageChange={actions.setLanguage}
        onNavigate={actions.scrollToSection}
        onViewChange={actions.setCurrentView}
      />

      <HeroSection
        content={content}
        onNavigate={actions.scrollToSection}
      />

      <FeaturesSection content={content} />

      <TestimonialsSection content={content} />

      <ContactSection
        content={content}
        formData={state.formData}
        isLoading={state.isLoading}
        error={state.error}
        onFormChange={actions.updateFormData}
        onSubmit={actions.submitForm}
      />

      <Footer />
    </div>
  );
};