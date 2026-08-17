import { Principle, ServiceItem, TeamMember, FaqItem, LocationInfo } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAs86d9EHng9whGk9QXWjMOGIb8jbczV1X0qa8s1mZCDLpSaJDfdbhKyQYqt0FQib5wy6ubrZLWlSIJpKRjCYla9jMF_DulC_zyonZcrgHMSXhz0E9AS4sVCjOm3YjBabPU6iO4kO08wc5XtPfIB5y0AjZggfuzNBlAKFsgbuhToFbFeU0U83EgyY_JMkEUZ12LSxDudgFAvOtaFl9sTUFvyjZ5i3J66w-lxi2P6ATLH7fxZrnl5bL3";

export const HERO_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyRDD7MBoz8uzzwF2SQWlWxgd3CTLYaXUJixOP5xA3QIlpJqS0XgSnoKzn11hhtT24U_HtCwmJLdgRe_tE6i0LAfwywVtb_NRcujLsUkeav_q-cVoBId7e8jjavndBGwH3klWMLbM7CUqif1Rc335OjR4MdbTIy3_JciPpBXdVE9hAUjQncOpe7BK3L-2ObbtxiiXdc7IvIs1GKrOCbMteNL0-d5hRlhurv822jiJNMqdq3_PCKNv";

export const ABOUT_IMAGE_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCEviRWKOEx4EKUC8wZp2_6shSsaLhEJFnmZAKtR7dlEfb9UR-TdtPI0MnEfcFU6IhklrXp5drKPHJssQXu_Jr7XuDhYXGz0PIzFsjal0niOV7caoFwYRwelyevTPnfEfPQwWSx40mFfXPQsI8TOjx859dk6VBYVR38vZimevludMUnVAkF_-CjEQPoN_Vo4s1uEYwUUG69-JpBtSwTYyItkOJmixlrGGFps2zEUz-s5yJWk_BX8Qo0";

export const PRINCIPLES: Principle[] = [
  {
    id: 'eyeball',
    title: 'Zusammenarbeit auf Augenhöhe',
    icon: 'handshake',
    description: 'Wir begegnen jedem Menschen mit Wertschätzung und unterstützen Entscheidungsfreiheit auf allen Ebenen.'
  },
  {
    id: 'networking',
    title: 'Vernetzung mit Behörden & Institutionen',
    icon: 'hub',
    description: 'Wir übernehmen die Abstimmung mit Leistungsträgern, LVR und behördlichen Stellen vertrauensvoll.'
  },
  {
    id: 'autonomy',
    title: 'Förderung der Eigenständigkeit',
    icon: 'self_improvement',
    description: 'Unser Ziel ist es, Fähigkeiten zu erhalten, zu stärken und Hilfe zur Selbsthilfe nachhaltig zu bieten.'
  },
  {
    id: 'respect',
    title: 'Respekt und Vertrauen',
    icon: 'volunteer_activism',
    description: 'Verlässlichkeit, Diskretion und kontinuierliche feste Bezugspersonen prägen unser tägliches Handeln.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'alltagsbewaeltigung',
    title: 'Alltagsbewältigung',
    description: 'Unterstützung bei der Haushaltsführung, Einkäufen und Strukturierung des Alltags.',
    icon: 'home',
    fullDetails: 'Wir begleiten Sie im Alltag bei der Verrichtung alltäglicher Aufgaben. Dazu gehören die gemeinsame Haushaltsplanung, Unterstützung bei Besorgungen und Einkäufen, die Strukturierung von Tagesabläufen sowie Hilfestellung beim Verfassen von Dokumenten und Post.',
    keyBenefits: [
      'Strukturierte Tages- und Wochenplanung',
      'Unterstützung beim Einkauf & Haushaltsorganisation',
      'Hilfe bei administrativem Schriftverkehr'
    ]
  },
  {
    id: 'soziale-teilhabe',
    title: 'Soziale Teilhabe',
    description: 'Begleitung zu Freizeitaktivitäten, Aufbau und Erhalt sozialer Kontakte.',
    icon: 'groups',
    fullDetails: 'Gemeinsame Aktivitäten und das Pflegen sozialer Kontakte bringen Lebensfreude und Beziehungsqualität. Wir begleiten Sie zu Kulturveranstaltungen, Vereinen, Ausflügen sowie zu Treffen mit Verwandten und Freunden.',
    keyBenefits: [
      'Begleitung bei kulturellen und sportlichen Aktivitäten',
      'Förderung neuer und bestehender Kontakte',
      'Gemeinsame Freizeitgestaltung im Rhein-Sieg-Kreis & Bonn'
    ]
  },
  {
    id: 'gesundheitsfoerderung',
    title: 'Gesundheitsförderung',
    description: 'Begleitung zu Arztbesuchen, Unterstützung bei der Medikamenteneinnahme.',
    icon: 'health_and_safety',
    fullDetails: 'Gesundheit und Wohlbefinden stehen an erster Stelle. Wir begleiten Sie verlässlich zu Facharzt- und Therapieterminen, unterstützen bei der Vorbereitung von Arztgesprächen und erinnern strukturgebend an verordnete Medikamenteneinnahmen.',
    keyBenefits: [
      'Zuverlässige Fahr- und Begleitdienste zu Ärzten',
      'Unterstützung beim Verständnis ärztlicher Verordnungen',
      'Erinnerung und Struktur bei der Gesundheitsvorsorge'
    ]
  },
  {
    id: 'berufliche-integration',
    title: 'Berufliche Integration',
    description: 'Hilfe bei der Arbeits- oder Ausbildungsplatzsuche und am Arbeitsplatz.',
    icon: 'work',
    fullDetails: 'Teilhabe am Arbeitsleben stärkt das Selbstbewusstsein und die finanzielle Unabhängigkeit. Wir unterstützen Sie bei der Erstellung von Bewerbungsunterlagen, der Vorbereitung auf Vorstellungsgespräche und begleiten Sie am Arbeits- oder Ausbildungsplatz.',
    keyBenefits: [
      'Erstellung und Optimierung von Bewerbungsunterlagen',
      'Vorbereitung auf Vorstellungsgespräche',
      'Enge Begleitung in der Einarbeitungsphase'
    ]
  },
  {
    id: 'krisenintervention',
    title: 'Krisenintervention',
    description: 'Schnelle und kompetente Hilfe in akuten Belastungssituationen.',
    icon: 'psychology',
    fullDetails: 'In belastenden Lebensphasen oder plötzlichen Umbrüchen stehen wir kurzfristig und lösungsorientiert an Ihrer Seite. Wir erarbeiten gemeinsam Deeskalations- und Entlastungsstrategien und stellen bei Bedarf den Kontakt zu spezialisierten Fachdiensten her.',
    keyBenefits: [
      'Schnelle Erreichbarkeit in Belastungssituationen',
      'Erarbeitung individueller Bewältigungsstrategien',
      'Direkte Kooperation mit Therapeut:innen & Fachstellen'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sabine-mueller',
    name: 'Sabine Müller',
    role: 'Pflegedienstleitung',
    phone: '+49 2241 261 08 30',
    email: 's.mueller@lebensassistenz.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB614ujBmCgkkS19Z3ZxYkvzTuB73s1BSgR3ytPC-n5R8t1-NTs9OLL1Z2uMXlLuvVMkfDMzJjAwfWR5AAwRu1Ff2_Jeu4E09S2nuKJOf_v9VgaWCqDpveTyDRFCvOht3lOILE7fKHZni_vrftQ020YksqJjDddOTWpb3mxrHPz-dacBWeMBjTJ5FIVasprCNyuj0KFfaGx7205iw6C0hIqI6vlA8LSQbjgGDbtPj-yRTYvBUyOkhGn',
    bio: 'Als erfahrene Pflegedienstleitung koordiniert Sabine Müller die individuellen Unterstützungsangebote und garantiert höchste Qualitätsstandards in der persönlichen Betreuung.'
  },
  {
    id: 'julia-schmidt',
    name: 'Julia Schmidt',
    role: 'Sozialarbeiterin (B.A.)',
    phone: '+49 2241 261 08 31',
    email: 'j.schmidt@lebensassistenz.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL3iqQChJZgtBQgcRfXUNXiNuSYszVw3tRLM8UsVkACFfThDvdFlkjA_4_gF5iP-UyejrH7qBZJhLaFVq3e4emGC4PoNZ6eHOY92R1o8G4yM8qN9yS4wN6T45GU91E2C9FpcbRs9DqErMlW3cVL3C1cI8icsWHNCllLa6Ou6KqLnJs_nfkVDlJ68wb1WtawIx5KUsJVhYKkDpVg-D_g1EzaqZMj3IlXZo5bjnchOyBcY92P4-PnXXu',
    bio: 'Julia Schmidt berät Klient:innen sowie Angehörige bei behördlichen Anträgen, Eingliederungshilfe und stellt die Brücke zu Kostenträgern und LVR sicher.'
  },
  {
    id: 'markus-weber',
    name: 'Markus Weber',
    role: 'Heilerziehungspfleger',
    phone: '+49 2241 261 08 32',
    email: 'm.weber@lebensassistenz.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPz7EwEtw3iLuHE6jTrij2ZrX0hi86NMl2Erik0vRyUHqUp5M7dAdPvIVgHjNSj24BZfP7yhraSJBfTXgx_F5FrDuj8a8q-zg9XP1HTw0f2AGdRDYBFb2tVg_fjfxsIKoGuQuB7TnpEalk1UU00FKA18kv_8uF7nv261etraFJE9h7HFs2O2IRO35xHJ67qHXiyUZTCNYp-bZ8O0URUUvVqB3FpIryegefmEYp8QUz95jziMafeULR',
    bio: 'Markus Weber begleitet Menschen in ihrem vertrauten Wohnumfeld mit Empathie, Humor und fachlicher Kompetenz zur aktiven Bewältigung des Alltaglebens.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Wie stelle ich einen Antrag?',
    answer: 'Wir unterstützen Sie gerne bei der Antragstellung beim zuständigen Leistungsträger (z.B. LVR, Sozialamt). Kontaktieren Sie uns einfach für ein unverbindliches Erstgespräch.'
  },
  {
    id: 'faq-2',
    question: 'Werden die Kosten übernommen?',
    answer: 'In der Regel werden die Kosten im Rahmen der Eingliederungshilfe übernommen. Wir klären die individuellen Voraussetzungen in einem gemeinsamen Gespräch.'
  },
  {
    id: 'faq-3',
    question: 'Wie schnell kann die Hilfe beginnen?',
    answer: 'Nach der Bewilligung durch den Leistungsträger kann die Unterstützung zeitnah beginnen. In akuten Krisenfällen finden wir oft auch kurzfristige Lösungen.'
  },
  {
    id: 'faq-4',
    question: 'Kommt immer dieselbe Bezugsperson?',
    answer: 'Wir legen großen Wert auf Kontinuität und arbeiten mit einem festen Bezugsbetreuer-System, um eine vertrauensvolle Basis zu schaffen.'
  },
  {
    id: 'faq-5',
    question: 'Können Termine flexibel vereinbart werden?',
    answer: 'Ja, die Termine werden individuell nach Ihrem Bedarf und in Absprache mit Ihrer Bezugsperson geplant.'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'siegburg',
    name: 'Standort Siegburg',
    address: 'Nogenter-Platz 4',
    city: '53721 Siegburg',
    phone: '+49 2241 261 08 30',
    email: 'info@lebensassistenz-su-bn.de',
    hours: 'Mo - Fr: 08:30 - 16:30 Uhr'
  }
];
