import { Principle, ServiceItem, TeamMember, FaqItem, LocationInfo, SupportGoal, ExclusionCriterion } from '../types';
import logoFullSvg from '../assets/logo-full.svg';
import logoSymbolSvg from '../assets/logo-symbol.svg';
import logoPng from '../assets/logo-symbol.png';
import heroImg from '../assets/hero-assistenz.jpg';
import aboutImg from '../assets/about-teilhabe.jpg';

export const LOGO_FULL_URL = logoFullSvg;
export const LOGO_SYMBOL_URL = logoSymbolSvg;
export const LOGO_URL = logoFullSvg;
export const LOGO_PNG_URL = logoPng;

export const HERO_IMAGE_URL = heroImg;
export const ABOUT_IMAGE_URL = aboutImg;

// Grundsätze der Arbeit (nach dem Konzeptdokument)
export const PRINCIPLES: Principle[] = [
  {
    id: 'augenhoehe',
    title: 'Begegnung auf Augenhöhe',
    icon: 'handshake',
    description: 'Respektvolle und wertschätzende Begegnung. Die Arbeit orientiert sich konsequent an den individuellen Bedürfnissen und Ressourcen der leistungsberechtigten Personen.'
  },
  {
    id: 'expertin',
    title: 'Experte für das eigene Leben',
    icon: 'psychology',
    description: 'Die leistungsberechtigte Person steht im Mittelpunkt. Die Assistenz unterstützt, berät und begleitet, übernimmt aber nicht die Entscheidungen der Person.'
  },
  {
    id: 'selbsthilfe',
    title: 'Auf- & Ausbau des Selbsthilfepotenzials',
    icon: 'self_improvement',
    description: 'Besonderer Wert wird darauf gelegt, eigene Fähigkeiten und Möglichkeiten zu erkennen, zu stärken und eigenständig weiterzuentwickeln.'
  },
  {
    id: 'privatsphaere',
    title: 'Schutz der Privatsphäre',
    icon: 'verified_user',
    description: 'Die Privatsphäre, Vertraulichkeit und die individuellen Bedürfnisse der leistungsberechtigten Person werden jederzeit vollumfänglich respektiert.'
  }
];

// HIGHLIGHTED SECTION: Ziele der Unterstützung (Wichtigster Fokus des Dokuments)
export const SUPPORT_GOALS: SupportGoal[] = [
  {
    id: 'teilhabe',
    title: 'Gesellschaftliche Teilhabe verbessern & erhalten',
    icon: 'diversity_3',
    description: 'Unterstützung beim Aufbau und Erhalt sozialer Kontakte, aktiver Einbindung in das gesellschaftliche Leben und Nutzung des vertrauten Sozialraums.'
  },
  {
    id: 'therapien',
    title: 'Notwendige Therapien wahrnehmen',
    icon: 'medical_services',
    description: 'Zuverlässige Begleitung und Orientierungshilfe zur kontinuierlichen Wahrnehmung medizinischer und therapeutischer Termine.'
  },
  {
    id: 'sucht',
    title: 'Angemessener Umgang mit Suchtverhalten',
    icon: 'balance',
    description: 'Gemeinsame Entwicklung und Festigung stabiler Strategien für einen reflektierten, eigenverantwortlichen Umgang mit Suchtverhalten.'
  },
  {
    id: 'kompetenzen',
    title: 'Persönliche Fähigkeiten & Kompetenzen stärken',
    icon: 'trending_up',
    description: 'Förderung vorhandener Potenziale, Stärkung des Selbstvertrauens und Erweiterung der Handlungskompetenz im Lebensalltag.'
  },
  {
    id: 'ressourcen',
    title: 'Vorhandene Ressourcen erkennen & nutzen',
    icon: 'hub',
    description: 'Gezieltes Erschließen und Aktivieren persönlicher Stärken sowie selbstgewählter sozialräumlicher Systeme und Hilfsnetzwerke.'
  },
  {
    id: 'selbststaendigkeit',
    title: 'Selbstständig Entscheidungen treffen & Alltag gestalten',
    icon: 'task_alt',
    description: 'Zunehmende Befähigung zur eigenständigen Alltagsstrukturierung und bewussten, selbstbestimmten Lebensführung.'
  }
];

// Konzept und Leistungsangebot (nach § 118 SGB IX)
export const SERVICES: ServiceItem[] = [
  {
    id: 'alltagsassistenz',
    title: 'Persönliche Assistenz im Alltag',
    description: 'Individuelle Begleitung bei der Haushaltsführung, Tagesstrukturierung und alltäglichen Aufgaben.',
    icon: 'home',
    fullDetails: 'Wir begleiten Sie im Alltag bei der eigenständigen Verrichtung alltäglicher Aufgaben. Dazu gehören Unterstützung bei der Haushaltsorganisation, Begleitung bei Einkäufen, die Strukturierung von Tagesabläufen sowie Hilfestellung bei administrativen Belangen und Schriftverkehr.',
    keyBenefits: [
      'Strukturierung des Tages- und Wochenablaufs',
      'Unterstützung bei Einkauf & Organisation des Haushalts',
      'Hilfestellung beim Schriftverkehr und administrativen Angelegenheiten'
    ]
  },
  {
    id: 'sozialraum-teilhabe',
    title: 'Sozialraum & gesellschaftliche Teilhabe',
    description: 'Erschließen und Nutzen von Angeboten und Netzwerken im Wohnumfeld Bonn und Rhein-Sieg-Kreis.',
    icon: 'groups',
    fullDetails: 'Gemeinsam werden notwendige und selbstgewählte sozialräumliche Systeme und Ressourcen erschlossen und genutzt. Wir begleiten Sie zu Kultur- und Freizeitaktivitäten, Vereinen und unterstützen Sie beim Erhalt und Ausbau Ihres sozialen Netzwerks.',
    keyBenefits: [
      'Nutzung regionaler Angebote in Bonn & Rhein-Sieg-Kreis',
      'Förderung und Erhalt sozialer Kontakte',
      'Begleitung zu Freizeit-, Kultur- und Bildungsangeboten'
    ]
  },
  {
    id: 'beratung-begleitung',
    title: 'Beratung & individuelle Begleitung',
    description: 'Regelmäßige Überprüfung, Anpassung der Unterstützung und vertrauensvolle Hilfeplanung.',
    icon: 'support_agent',
    fullDetails: 'Unsere Leistungen erfolgen auf Grundlage des § 118 SGB IX und orientieren sich an den verschiedenen Lebensbereichen. Die Leistungen werden individuell geplant, regelmäßig überprüft und transparent an Ihren persönlichen Bedarf angepasst.',
    keyBenefits: [
      'Gesetzliche Grundlage nach § 118 SGB IX',
      'Gemeinsame Zielvereinbarungen und regelmäßige Überprüfung',
      'Feste Bezugspersonen und verlässliche Betreuungskontinuität'
    ]
  },
  {
    id: 'gesundheit-therapie',
    title: 'Gesundheits- & Therapiebegleitung',
    description: 'Strukturierte Unterstützung bei medizinischen und therapeutischen Notwendigkeiten.',
    icon: 'health_and_safety',
    fullDetails: 'Gesundheitliche Stabilität bildet die Basis für selbstbestimmte Teilhabe. Wir unterstützen Sie bei der Organisation und Wahrnehmung von Arzt- und Therapieterminen und begleiten Sie verlässlich vor Ort.',
    keyBenefits: [
      'Begleitung zu Fachärzten und Therapeuten',
      'Vorbereitung auf Arztgespräche und Verordnungen',
      'Stabilisierung des gesundheitlichen Wohlbefindens'
    ]
  }
];

// Zielgruppe & Voraussetzungen
export const TARGET_GROUP_INFO = {
  title: 'Zielgruppe',
  description: 'Das Angebot richtet sich an volljährige Menschen mit geistigen, körperlichen und/oder seelischen Beeinträchtigungen im Raum Bonn und Rhein-Sieg-Kreis.',
  requirement: 'Voraussetzung ist eine entsprechende Leistungsberechtigung beziehungsweise die Bewilligung der notwendigen Eingliederungshilfe.'
};

// Ausschlusskriterien (Transparenz & Qualitätssicherung)
export const EXCLUSION_CRITERIA: ExclusionCriterion[] = [
  {
    id: 'rund-um-die-uhr',
    title: 'Keine Rund-um-die-Uhr-Versorgung',
    detail: 'Eine Aufnahme ist nicht vorgesehen, wenn eine Tag-und-Nacht-Leistung beziehungsweise 24/7-Versorgung erforderlich ist.'
  },
  {
    id: 'sprache',
    title: 'Sprachliche Verständigungsgrenzen',
    detail: 'Ausgeschlossen sind Personen, die sich nicht mehr ausreichend über Sprache ausdrücken können und dadurch einen speziellen Unterstützungsbedarf haben, der durch das Angebot nicht abgedeckt werden kann.'
  },
  {
    id: 'psychosen',
    title: 'Hirnorganische Psychosen',
    detail: 'Nicht zum Angebot gehören hirnorganische Psychosen, beispielsweise bei Demenz oder Alzheimer, wenn diese als Erstdiagnose vorliegen.'
  },
  {
    id: 'unterbringung',
    title: 'Keine geschlossene Unterbringung',
    detail: 'Eine geschlossene Unterbringung kann durch unser ambulantes Assistenzangebot nicht gewährleistet werden.'
  },
  {
    id: 'sucht-poly',
    title: 'Schwere primäre Suchterkrankungen',
    detail: 'Schwere Polytoxikomanien und primäre Suchterkrankungen stellen ein Ausschlusskriterium dar.'
  },
  {
    id: 'gefaehrdung',
    title: 'Akute Gefährdungslagen',
    detail: 'Nicht aufgenommen werden Personen, bei denen eine akute oder wiederholt auftretende Eigen- oder Fremdgefährdung besteht.'
  }
];

// Qualifikation der Mitarbeitenden & Vernetzung
export const QUALIFICATION_INFO = {
  title: 'Qualifikation unserer Fachkräfte',
  description: 'Die Assistenzleistungen werden durch qualifizierte Fachkräfte erbracht – unter anderem Sozialarbeiter*innen, Sozialpädagog*innen, Erzieher*innen, Heilerziehungspfleger*innen und Krankenpfleger*innen sowie vergleichbare Fachqualifikationen.',
  qualities: 'Entscheidend sind neben der fundierten Fachlichkeit insbesondere hohe Kommunikationsfähigkeit, persönliche Eignung, Vertrauenswürdigkeit und Verlässlichkeit.',
  assistants: 'Unterstützende Assistenzleistungen können darüber hinaus durch Studierende, sozialpädagogische, pflegerische oder hauswirtschaftliche Hilfskräfte erbracht werden.'
};

export const NETWORKING_INFO = {
  title: 'Vernetzung und Zusammenarbeit',
  description: 'Die Leitung und die pädagogische Leitung der Lebensassistenz arbeiten eng mit anderen Leistungserbringern, Kliniken, Beratungsstellen und weiteren relevanten Akteuren zusammen. Durch diese Vernetzung können bei Bedarf weitere Unterstützungsangebote erschlossen und in die individuelle Hilfeplanung einbezogen werden.'
};

// Teammitglieder
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sabine-mueller',
    name: 'Sabine Müller',
    role: 'Pädagogische Leitung',
    phone: '+49 2241 261 08 30',
    email: 'leitung@lebensassistenz-su-bn.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB614ujBmCgkkS19Z3ZxYkvzTuB73s1BSgR3ytPC-n5R8t1-NTs9OLL1Z2uMXlLuvVMkfDMzJjAwfWR5AAwRu1Ff2_Jeu4E09S2nuKJOf_v9VgaWCqDpveTyDRFCvOht3lOILE7fKHZni_vrftQ020YksqJjDddOTWpb3mxrHPz-dacBWeMBjTJ5FIVasprCNyuj0KFfaGx7205iw6C0hIqI6vlA8LSQbjgGDbtPj-yRTYvBUyOkhGn',
    bio: 'Als pädagogische Leitung koordiniert sie die individuellen Assistenzpläne nach § 118 SGB IX und pflegt die enge Vernetzung mit Leistungsträgern und Fachstellen im Rhein-Sieg-Kreis und Bonn.'
  },
  {
    id: 'julia-schmidt',
    name: 'Julia Schmidt',
    role: 'Sozialarbeiterin (B.A.)',
    phone: '+49 2241 261 08 31',
    email: 'j.schmidt@lebensassistenz-su-bn.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL3iqQChJZgtBQgcRfXUNXiNuSYszVw3tRLM8UsVkACFfThDvdFlkjA_4_gF5iP-UyejrH7qBZJhLaFVq3e4emGC4PoNZ6eHOY92R1o8G4yM8qN9yS4wN6T45GU91E2C9FpcbRs9DqErMlW3cVL3C1cI8icsWHNCllLa6Ou6KqLnJs_nfkVDlJ68wb1WtawIx5KUsJVhYKkDpVg-D_g1EzaqZMj3IlXZo5bjnchOyBcY92P4-PnXXu',
    bio: 'Julia Schmidt berät Klient*innen und Angehörige bei behördlichen Fragen, Eingliederungshilfeanträgen und unterstützt beim Erschließen sozialräumlicher Ressourcen.'
  },
  {
    id: 'markus-weber',
    name: 'Markus Weber',
    role: 'Heilerziehungspfleger',
    phone: '+49 2241 261 08 32',
    email: 'm.weber@lebensassistenz-su-bn.de',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPz7EwEtw3iLuHE6jTrij2ZrX0hi86NMl2Erik0vRyUHqUp5M7dAdPvIVgHjNSj24BZfP7yhraSJBfTXgx_F5FrDuj8a8q-zg9XP1HTw0f2AGdRDYBFb2tVg_fjfxsIKoGuQuB7TnpEalk1UU00FKA18kv_8uF7nv261etraFJE9h7HFs2O2IRO35xHJ67qHXiyUZTCNYp-bZ8O0URUUvVqB3FpIryegefmEYp8QUz95jziMafeULR',
    bio: 'Markus Weber begleitet Klient*innen im Alltag und unterstützt verlässlich bei der praktischen Alltagsstrukturierung, Arztbesuchen und der Stärkung des Selbsthilfepotenzials.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Welche gesetzliche Grundlage hat das Assistenzangebot?',
    answer: 'Unser Assistenzangebot erfolgt auf Grundlage des § 118 SGB IX im Rahmen der Eingliederungshilfe. Es richtet sich an volljährige Menschen mit geistigen, körperlichen und/oder seelischen Beeinträchtigungen im Raum Bonn und Rhein-Sieg-Kreis.'
  },
  {
    id: 'faq-2',
    question: 'Was ist das übergeordnete Ziel der Unterstützung?',
    answer: 'Übergeordnetes Ziel ist eine möglichst selbstständige und selbstbestimmte Lebensführung in allen relevanten Lebensbereichen. Die Unterstützung soll die Selbstständigkeit nicht ersetzen, sondern diese gezielt fördern und langfristig ausbauen.'
  },
  {
    id: 'faq-3',
    question: 'Wie wird die Hilfe individuell geplant?',
    answer: 'Die leistungsberechtigte Person steht im Mittelpunkt und gilt als Expert*in für das eigene Leben. Die Leistungen werden gemeinsam individuell geplant, regelmäßig überprüft und flexibel an den persönlichen Bedarf angepasst.'
  },
  {
    id: 'faq-4',
    question: 'Welche Qualifikation haben die Mitarbeitenden?',
    answer: 'Die Assistenzleistungen werden durch qualifizierte Fachkräfte wie Sozialarbeiter*innen, Sozialpädagog*innen, Erzieher*innen, Heilerziehungspfleger*innen und Krankenpfleger*innen erbracht. Neben der Fachlichkeit sind Kommunikationsfähigkeit, persönliche Eignung und Verlässlichkeit entscheidend.'
  },
  {
    id: 'faq-5',
    question: 'Gibt es Situationen, die nicht vom Angebot abgedeckt werden?',
    answer: 'Ja, als ambulantes Angebot bieten wir keine Rund-um-die-Uhr- oder geschlossene Unterbringung an. Ebenso stellen beispielsweise primäre schwere Suchterkrankungen oder akute Gefährdungslagen Ausschlusskriterien dar, um stets die gebotene Fachqualität gewährleisten zu können.'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'siegburg',
    name: 'Standort Siegburg (Rhein-Sieg-Kreis & Bonn)',
    address: 'Nogenter-Platz 4',
    city: '53721 Siegburg',
    phone: '+49 2241 261 08 30',
    email: 'info@lebensassistenz-su-bn.de',
    hours: 'Mo - Fr: 08:30 - 16:30 Uhr'
  }
];
