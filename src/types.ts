export type PageId = 'home' | 'about' | 'services' | 'reviews' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  typicalNeed: string;
  iconName: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceRequired: string;
  preferredContact: 'phone' | 'email';
  message: string;
}
