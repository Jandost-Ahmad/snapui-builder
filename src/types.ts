export interface Principle {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDetails?: string;
  icon: string;
  keyBenefits?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: string;
}

export interface SupportGoal {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ExclusionCriterion {
  id: string;
  title: string;
  detail: string;
}
