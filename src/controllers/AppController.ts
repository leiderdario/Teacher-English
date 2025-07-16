import { AppState, ContactForm } from '../types';
import { ContentModel } from '../models/ContentModel';
import { FormModel } from '../models/FormModel';

export class AppController {
  private contentModel: ContentModel;
  private formModel: FormModel;

  constructor() {
    this.contentModel = ContentModel.getInstance();
    this.formModel = FormModel.getInstance();
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
      error: null
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
}