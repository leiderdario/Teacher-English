import { useState, useCallback } from 'react';
import { AppController } from '../controllers/AppController';
import { AppState, ContactForm } from '../types';

export const useAppController = () => {
  const [controller] = useState(() => new AppController());
  const [state, setState] = useState<AppState>(controller.getInitialState());

  const setLanguage = useCallback((language: 'es' | 'en') => {
    setState(prev => ({ ...prev, language }));
  }, []);

  const updateFormData = useCallback((field: keyof ContactForm, value: string) => {
    setState(prev => ({
      ...prev,
      formData: { ...prev.formData, [field]: value }
    }));
  }, []);

  const setFormData = useCallback((formData: ContactForm) => {
    setState(prev => ({ ...prev, formData }));
  }, []);

  const setLoading = useCallback((isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const submitForm = useCallback(async () => {
    const validation = controller.validateForm(state.formData);
    
    if (!validation.isValid) {
      setError(validation.errors.join(', '));
      return { success: false, message: validation.errors.join(', ') };
    }

    setLoading(true);
    setError(null);

    try {
      const result = await controller.submitForm(state.formData);
      if (result.success) {
        setFormData(controller.getInitialState().formData);
      }
      return result;
    } catch (error) {
      const errorMessage = 'An error occurred while submitting the form';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [controller, state.formData, setError, setLoading, setFormData]);

  const getContent = useCallback(() => {
    return controller.getContent(state.language);
  }, [controller, state.language]);

  const getAvailableLanguages = useCallback(() => {
    return controller.getAvailableLanguages();
  }, [controller]);

  const scrollToSection = useCallback((sectionId: string) => {
    controller.scrollToSection(sectionId);
  }, [controller]);

  return {
    state,
    actions: {
      setLanguage,
      updateFormData,
      setFormData,
      submitForm,
      scrollToSection
    },
    getters: {
      getContent,
      getAvailableLanguages
    }
  };
}