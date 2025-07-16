import { ContentStructure } from '../types';

export class ContentModel {
  private static instance: ContentModel;
  private content: Record<'es' | 'en', ContentStructure>;

  private constructor() {
    this.content = {
      es: {
        nav: {
          home: 'Inicio',
          about: 'Acerca de',
          testimonials: 'Testimonios',
          contact: 'Contacto'
        },
        hero: {
          title: '¡Domina el Inglés a tu Ritmo con Clases 100% Personalizadas!',
          subtitle: 'Eder es un tutor certificado (TESOL/TEFL) con más de 10 años de experiencia, que ofrece lecciones online totalmente personalizadas en tiempo real, diseñadas para adaptarse a tu nivel, ritmo de aprendizaje y necesidades específicas.',
          description: '¡Cada clase será dinámica, divertida y enfocada en que logres hablar en inglés con naturalidad y confianza!',
          cta: 'Reserva tu Clase Gratis',
          cta2: 'Ver Testimonios'
        },
        features: {
          title: '¿Por qué elegir mis lecciones?',
          subtitle: 'Un método probado con más de 10 años de experiencia que se adapta completamente a ti',
          items: [
            {
              title: 'Clases Personalizadas al 100%',
              description: 'Lecciones adaptadas a ti, pensadas para que aprendas a expresarte de manera natural en inglés.'
            },
            {
              title: 'Método Garantizado',
              description: 'Un enfoque exclusivo que se adapta a tu estilo de aprendizaje, acompañado de aplicaciones premium para un estudio más interactivo y efectivo.'
            },
            {
              title: 'Acompañamiento Constante',
              description: 'Nuestro tutor está disponible para guiarte durante todo el proceso, asegurándose de que cada clase te acerque a tu objetivo de manera clara y efectiva.'
            },
            {
              title: 'Horarios Flexibles',
              description: 'Clases individuales o en grupos pequeños de máximo 3 estudiantes. Tú eliges el horario que más te convenga, ¡a tu propio ritmo!'
            }
          ]
        },
        testimonials: {
          title: 'Opiniones de Estudiantes',
          subtitle: '¡Lo que mis estudiantes dicen!',
          description: 'Revisa los testimonios de quienes han aprendido con nuestro tutor. Nada habla mejor de un profesor que la satisfacción de los estudiantes.',
          items: [
            {
              name: 'María González',
              role: 'Profesional en Marketing',
              content: 'Las clases han sido increíbles. El método personalizado me ayudó a ganar confianza para hablar en inglés en mis presentaciones de trabajo.',
              rating: 5
            },
            {
              name: 'Carlos Ruiz',
              role: 'Estudiante Universitario',
              content: 'La flexibilidad de horarios y el enfoque personalizado son perfectos para mi estilo de vida. He mejorado mi inglés más rápido de lo que esperaba.',
              rating: 5
            },
            {
              name: 'Ana Martínez',
              role: 'Empresaria',
              content: 'El tutor es excepcional. Las clases son dinámicas y siempre se adaptan a mis necesidades específicas de negocio.',
              rating: 5
            }
          ]
        },
        cta: {
          title: '¡Ahora es el Momento de Mejorar tu Inglés!',
          subtitle: 'Reserva tu clase y empieza a aprender a tu propio ritmo desde cualquier lugar. ¡No dejes pasar esta oportunidad!',
          button: 'Reservar Clase Ahora',
          contact: 'Contactar por WhatsApp'
        },
        contact: {
          title: 'Reserva tu Primera Clase',
          subtitle: 'Completa el formulario y te contactaré para programar tu clase gratuita',
          form: {
            name: 'Nombre completo',
            email: 'Correo electrónico',
            phone: 'Teléfono',
            level: 'Nivel de inglés',
            message: 'Mensaje (opcional)',
            submit: 'Enviar solicitud'
          },
          levels: ['Principiante', 'Básico', 'Intermedio', 'Avanzado']
        }
      },
      en: {
        nav: {
          home: 'Home',
          about: 'About',
          testimonials: 'Testimonials',
          contact: 'Contact'
        },
        hero: {
          title: 'Master English at Your Own Pace with 100% Personalized Classes!',
          subtitle: "Eder is a certified tutor (TESOL/TEFL) with over 10 years of experience, offering fully personalized online lessons in real-time, designed to adapt to your level, learning pace, and specific needs.",
          description: 'Each lesson will be dynamic, fun, and focused on helping you speak English with naturalness and confidence!',
          cta: 'Book Your Free Class',
          cta2: 'View Testimonials'
        },
        features: {
          title: 'Why Choose Our Lessons?',
          subtitle: 'A proven method with over 10 years of experience that completely adapts to you',
          items: [
            {
              title: '100% Personalized Classes',
              description: 'Lessons tailored specifically for you, designed to help you express yourself naturally in English.'
            },
            {
              title: 'Guaranteed Method',
              description: 'An exclusive approach that adapts to your learning style, supported by premium applications for a more interactive and effective study experience.'
            },
            {
              title: 'Constant Support',
              description: "Our tutor is available to guide you through the entire process, ensuring each lesson brings you closer to your goal in a clear and effective way."
            },
            {
              title: 'Flexible Schedules',
              description: 'Individual classes or small groups of up to 3 students. You choose the time that suits you best, at your own pace!'
            }
          ]
        },
        testimonials: {
          title: 'Student Testimonials',
          subtitle: 'What our students say!',
          description: 'Check out the testimonials from those who have learned with our tutor. Nothing speaks better of a tutor than the satisfaction of students.',
          items: [
            {
              name: 'María González',
              role: 'Marketing Professional',
             content: "The classes have been incredible. The personalized method helped me gain confidence to speak English in my work presentations.",
              rating: 5
            },
            {
              name: 'Carlos Ruiz',
              role: 'University Student',
              content: 'The schedule flexibility and personalized approach are perfect for my lifestyle. I improved my English faster than I expected.',
              rating: 5
            },
            {
              name: 'Ana Martínez',
              role: 'Entrepreneur',
             content: 'The tutor is exceptional. The classes are dynamic and always adapt to my specific business needs.',
              rating: 5
            }
          ]
        },
        cta: {
          title: 'Now is the Time to Improve Your English!',
          subtitle: "Book your class and start learning at your own pace from anywhere. Don't miss this opportunity!",
          button: 'Book Class Now',
          contact: 'Contact via WhatsApp'
        },
        contact: {
          title: 'Book Your First Class',
          subtitle: 'Fill out the form and I will contact you to schedule your free class',
          form: {
            name: 'Full name',
            email: 'Email address',
            phone: 'Phone number',
            level: 'English level',
            message: 'Message (optional)',
            submit: 'Send request'
          },
          levels: ['Beginner', 'Basic', 'Intermediate', 'Advanced']
        }
      }
    };
  }

  public static getInstance(): ContentModel {
    if (!ContentModel.instance) {
      ContentModel.instance = new ContentModel();
    }
    return ContentModel.instance;
  }

  public getContent(language: 'es' | 'en'): ContentStructure {
    return this.content[language];
  }

  public getAvailableLanguages(): Array<{ code: 'es' | 'en'; name: string }> {
    return [
      { code: 'es', name: 'Español' },
      { code: 'en', name: 'English' }
    ];
  }
}