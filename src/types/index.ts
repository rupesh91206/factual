export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Integration {
  id: string;
  name: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FooterGroup {
  title: string;
  links: { label: string; href: string }[];
}
