export interface Language {
  code: 'es' | 'en';
  name: string;
}

export interface NavigationItem {
  key: string;
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  cta2: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  level: string;
  message: string;
}

export interface ContentStructure {
  nav: {
    home: string;
    about: string;
    testimonials: string;
    contact: string;
  };
  hero: HeroContent;
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    description: string;
    items: TestimonialItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    contact: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      level: string;
      message: string;
      submit: string;
    };
    levels: string[];
  };
}

export interface AppState {
  language: Language['code'];
  formData: ContactForm;
  isLoading: boolean;
  error: string | null;
}