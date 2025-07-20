import { GrammarLevel, GrammarVideo } from '../types';

export class GrammarModel {
  private static instance: GrammarModel;
  private grammarContent: Record<'es' | 'en', GrammarLevel[]>;

  private constructor() {
    this.grammarContent = {
      es: [
        {
          id: 'a1-beginners',
          name: 'A1 Beginners',
          description: 'Fundamentos básicos del inglés para principiantes',
          videos: [
            {
              id: 'a1-1',
              title: 'Verb "To Be" - Present Simple',
              description: 'Aprende el uso básico del verbo "to be" en presente simple',
              duration: '15:30',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-2',
              title: 'Articles: A, An, The',
              description: 'Uso correcto de los artículos en inglés',
              duration: '12:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-3',
              title: 'Personal Pronouns',
              description: 'Pronombres personales y su uso en oraciones',
              duration: '10:20',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-4',
              title: 'Present Simple - Affirmative',
              description: 'Formación y uso del presente simple afirmativo',
              duration: '18:15',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'a2-lower-intermediate',
          name: 'A2 Lower Intermediate',
          description: 'Conceptos intermedios básicos para expandir tu conocimiento',
          videos: [
            {
              id: 'a2-1',
              title: 'Past Simple - Regular Verbs',
              description: 'Formación del pasado simple con verbos regulares',
              duration: '16:40',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-2',
              title: 'Past Simple - Irregular Verbs',
              description: 'Verbos irregulares más comunes en pasado simple',
              duration: '20:25',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-3',
              title: 'Comparative and Superlative',
              description: 'Comparativos y superlativos de adjetivos',
              duration: '14:50',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-4',
              title: 'Future with "Going to"',
              description: 'Expresar planes futuros con "going to"',
              duration: '13:30',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'b1-intermediate',
          name: 'B1 Intermediate',
          description: 'Gramática intermedia para comunicación más fluida',
          videos: [
            {
              id: 'b1-1',
              title: 'Present Perfect Simple',
              description: 'Uso y formación del presente perfecto simple',
              duration: '22:15',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-2',
              title: 'Modal Verbs: Can, Could, Should',
              description: 'Verbos modales para expresar habilidad y consejo',
              duration: '19:45',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-3',
              title: 'Conditional Sentences Type 1',
              description: 'Oraciones condicionales del primer tipo',
              duration: '17:20',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-4',
              title: 'Passive Voice - Present and Past',
              description: 'Voz pasiva en presente y pasado simple',
              duration: '25:10',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'b2-upper-intermediate',
          name: 'B2 Upper Intermediate',
          description: 'Gramática avanzada para perfeccionar tu inglés',
          videos: [
            {
              id: 'b2-1',
              title: 'Present Perfect Continuous',
              description: 'Presente perfecto continuo y sus usos',
              duration: '21:35',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-2',
              title: 'Reported Speech',
              description: 'Discurso indirecto y cambios necesarios',
              duration: '24:20',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-3',
              title: 'Conditional Sentences Type 2 & 3',
              description: 'Condicionales segundo y tercer tipo',
              duration: '28:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-4',
              title: 'Relative Clauses',
              description: 'Cláusulas relativas definitorias y no definitorias',
              duration: '23:15',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'c1-advance',
          name: 'B2-C1 Advance',
          description: 'Gramática avanzada para dominio del idioma',
          videos: [
            {
              id: 'c1-1',
              title: 'Advanced Modal Verbs',
              description: 'Verbos modales avanzados y matices de significado',
              duration: '26:30',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-2',
              title: 'Subjunctive Mood',
              description: 'Modo subjuntivo en inglés y sus usos',
              duration: '22:40',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-3',
              title: 'Inversion and Emphasis',
              description: 'Inversión y estructuras enfáticas',
              duration: '20:55',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-4',
              title: 'Mixed Conditionals',
              description: 'Condicionales mixtos y usos avanzados',
              duration: '24:10',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'c1-business',
          name: 'C1 Business',
          description: 'Inglés de negocios y comunicación profesional',
          videos: [
            {
              id: 'bus-1',
              title: 'Business Presentations Grammar',
              description: 'Estructuras gramaticales para presentaciones efectivas',
              duration: '25:20',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-2',
              title: 'Formal Email Writing',
              description: 'Gramática para emails formales y comunicación escrita',
              duration: '18:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-3',
              title: 'Meeting Language & Grammar',
              description: 'Estructuras para reuniones y negociaciones',
              duration: '23:30',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-4',
              title: 'Financial English Grammar',
              description: 'Gramática específica para contextos financieros',
              duration: '21:15',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        }
      ],
      en: [
        {
          id: 'a1-beginners',
          name: 'A1 Beginners',
          description: 'Basic English fundamentals for beginners',
          videos: [
            {
              id: 'a1-1',
              title: 'Verb "To Be" - Present Simple',
              description: 'Learn the basic use of the verb "to be" in present simple',
              duration: '15:30',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-2',
              title: 'Articles: A, An, The',
              description: 'Correct use of articles in English',
              duration: '12:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-3',
              title: 'Personal Pronouns',
              description: 'Personal pronouns and their use in sentences',
              duration: '10:20',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a1-4',
              title: 'Present Simple - Affirmative',
              description: 'Formation and use of present simple affirmative',
              duration: '18:15',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'a2-lower-intermediate',
          name: 'A2 Lower Intermediate',
          description: 'Basic intermediate concepts to expand your knowledge',
          videos: [
            {
              id: 'a2-1',
              title: 'Past Simple - Regular Verbs',
              description: 'Formation of past simple with regular verbs',
              duration: '16:40',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-2',
              title: 'Past Simple - Irregular Verbs',
              description: 'Most common irregular verbs in past simple',
              duration: '20:25',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-3',
              title: 'Comparative and Superlative',
              description: 'Comparative and superlative forms of adjectives',
              duration: '14:50',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'a2-4',
              title: 'Future with "Going to"',
              description: 'Expressing future plans with "going to"',
              duration: '13:30',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'b1-intermediate',
          name: 'B1 Intermediate',
          description: 'Intermediate grammar for more fluent communication',
          videos: [
            {
              id: 'b1-1',
              title: 'Present Perfect Simple',
              description: 'Use and formation of present perfect simple',
              duration: '22:15',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-2',
              title: 'Modal Verbs: Can, Could, Should',
              description: 'Modal verbs to express ability and advice',
              duration: '19:45',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-3',
              title: 'Conditional Sentences Type 1',
              description: 'First type conditional sentences',
              duration: '17:20',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b1-4',
              title: 'Passive Voice - Present and Past',
              description: 'Passive voice in present and past simple',
              duration: '25:10',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'b2-upper-intermediate',
          name: 'B2 Upper Intermediate',
          description: 'Advanced grammar to perfect your English',
          videos: [
            {
              id: 'b2-1',
              title: 'Present Perfect Continuous',
              description: 'Present perfect continuous and its uses',
              duration: '21:35',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-2',
              title: 'Reported Speech',
              description: 'Indirect speech and necessary changes',
              duration: '24:20',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-3',
              title: 'Conditional Sentences Type 2 & 3',
              description: 'Second and third type conditionals',
              duration: '28:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'b2-4',
              title: 'Relative Clauses',
              description: 'Defining and non-defining relative clauses',
              duration: '23:15',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'c1-advance',
          name: 'B2-C1 Advance',
          description: 'Advanced grammar for language mastery',
          videos: [
            {
              id: 'c1-1',
              title: 'Advanced Modal Verbs',
              description: 'Advanced modal verbs and meaning nuances',
              duration: '26:30',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-2',
              title: 'Subjunctive Mood',
              description: 'Subjunctive mood in English and its uses',
              duration: '22:40',
              thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-3',
              title: 'Inversion and Emphasis',
              description: 'Inversion and emphatic structures',
              duration: '20:55',
              thumbnail: 'https://images.pexels.com/photos/5212662/pexels-photo-5212662.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'c1-4',
              title: 'Mixed Conditionals',
              description: 'Mixed conditionals and advanced uses',
              duration: '24:10',
              thumbnail: 'https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        },
        {
          id: 'c1-business',
          name: 'C1 Business',
          description: 'Business English and professional communication',
          videos: [
            {
              id: 'bus-1',
              title: 'Business Presentations Grammar',
              description: 'Grammar structures for effective presentations',
              duration: '25:20',
              thumbnail: 'https://images.pexels.com/photos/5427674/pexels-photo-5427674.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-2',
              title: 'Formal Email Writing',
              description: 'Grammar for formal emails and written communication',
              duration: '18:45',
              thumbnail: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-3',
              title: 'Meeting Language & Grammar',
              description: 'Structures for meetings and negotiations',
              duration: '23:30',
              thumbnail: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            },
            {
              id: 'bus-4',
              title: 'Financial English Grammar',
              description: 'Specific grammar for financial contexts',
              duration: '21:15',
              thumbnail: 'https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=400',
              videoUrl: '#'
            }
          ]
        }
      ]
    };
  }

  public static getInstance(): GrammarModel {
    if (!GrammarModel.instance) {
      GrammarModel.instance = new GrammarModel();
    }
    return GrammarModel.instance;
  }

  public getGrammarLevels(language: 'es' | 'en'): GrammarLevel[] {
    return this.grammarContent[language];
  }

  public getGrammarLevel(language: 'es' | 'en', levelId: string): GrammarLevel | undefined {
    return this.grammarContent[language].find(level => level.id === levelId);
  }

  public getVideo(language: 'es' | 'en', levelId: string, videoId: string): GrammarVideo | undefined {
    const level = this.getGrammarLevel(language, levelId);
    return level?.videos.find(video => video.id === videoId);
  }
}