import { ContactForm } from '../types';

export class FormModel {
  private static instance: FormModel;

  private constructor() {}

  public static getInstance(): FormModel {
    if (!FormModel.instance) {
      FormModel.instance = new FormModel();
    }
    return FormModel.instance;
  }

  public getInitialFormData(): ContactForm {
    return {
      name: '',
      email: '',
      phone: '',
      level: '',
      message: ''
    };
  }

  public validateForm(formData: ContactForm): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!formData.name.trim()) {
      errors.push('Name is required');
    }

    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!this.isValidEmail(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    if (!formData.phone.trim()) {
      errors.push('Phone number is required');
    }

    if (!formData.level) {
      errors.push('Please select your English level');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public async submitForm(formData: ContactForm): Promise<{ success: boolean; message: string }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', formData);
        resolve({
          success: true,
          message: 'Form submitted successfully! We will contact you soon.'
        });
      }, 1000);
    });
  }
}