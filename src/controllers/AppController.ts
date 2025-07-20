import { AppState, ContactForm } from '../types';
import { ContentModel } from '../models/ContentModel';
import { FormModel } from '../models/FormModel';
import { GrammarModel } from '../models/GrammarModel';

export class AppController {
  private contentModel: ContentModel;
  private formModel: FormModel;
  private grammarModel: GrammarModel;

  constructor() {
    this.contentModel = ContentModel.getInstance();
    this.formModel = FormModel.getInstance();
    this.grammarModel = GrammarModel.getInstance();
  }

  public getContent(language: 'es' | 'en') {
    return this.contentModel.getContent(language);
  }

  public getAvailableLanguages() {
    return this.contentModel.getAvailableLanguages();
  }

  public getInitialState(): AppState {
    return {
      language: 'es',
      formData: this.formModel.getInitialFormData(),
      isLoading: false,
      error: null,
      currentView: 'home'
    };
  }

  public validateForm(formData: ContactForm) {
    return this.formModel.validateForm(formData);
  }

  public async submitForm(formData: ContactForm) {
    return this.formModel.submitForm(formData);
  }

  public scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  public getGrammarLevels(language: 'es' | 'en') {
    return this.grammarModel.getGrammarLevels(language);
  }

  public getGrammarLevel(language: 'es' | 'en', levelId: string) {
    return this.grammarModel.getGrammarLevel(language, levelId);
  }

  public getVideo(language: 'es' | 'en', levelId: string, videoId: string) {
    return this.grammarModel.getVideo(language, levelId, videoId);
  }
}