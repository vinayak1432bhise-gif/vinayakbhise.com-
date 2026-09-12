export interface ServiceItem {
  id: string;
  number: number;
  titleMr: string;
  titleEn: string;
  category: 'individual' | 'youth' | 'relationship' | 'clinical';
  shortDescMr: string;
  shortDescEn: string;
  detailedDescMr: string;
  detailedDescEn: string;
  symptomsMr: string[];
  symptomsEn: string[];
  solutionsMr: string[];
  solutionsEn: string[];
  durationMinutes: number;
  iconName: string;
  accentColor: 'teal' | 'gold';
}

export interface PipelineStep {
  step: number;
  id: string;
  titleMr: string;
  titleEn: string;
  actionWordMr: string;
  actionWordEn: string;
  descMr: string;
  descEn: string;
  keyOutcomesMr: string[];
  keyOutcomesEn: string[];
  icon: string;
}

export interface WorkshopProgram {
  id: string;
  titleMr: string;
  titleEn: string;
  taglineMr: string;
  taglineEn: string;
  descMr: string;
  descEn: string;
  duration: string;
  format: string;
  modulesMr: string[];
  modulesEn: string[];
  suitableForMr: string;
  suitableForEn: string;
  badge: string;
}

export interface VideoGuide {
  id: string;
  titleMr: string;
  titleEn: string;
  duration: string;
  views: string;
  category: string;
  summaryMr: string;
  summaryEn: string;
  youtubeId?: string;
  keyPointsMr: string[];
}

export interface PosterTemplateData {
  id: string;
  templateNumber: number;
  titleMr: string;
  titleEn: string;
  subtitleMr: string;
  subtitleEn: string;
  imageSrc: string;
  aspectRatio: string;
  theme: 'hero' | 'relief' | 'relationship' | 'global';
  bulletPointsMr: string[];
  bulletPointsEn: string[];
  contactCallout: string;
  taglineMr: string;
  taglineEn: string;
  aiPrompt: string;
  recommendedUse: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  age: string;
  service: string;
  preferredMode: 'in-person' | 'online-video' | 'phone-call';
  preferredDate: string;
  preferredTime: string;
  concernNote: string;
  city: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  authorMr?: string;
  city: string;
  state: string;
  rating: number;
  date: string;
  serviceTagMr: string;
  serviceTagEn: string;
  category: 'anxiety' | 'marriage' | 'student' | 'depression' | 'general';
  quoteMr: string;
  quoteEn: string;
  verified: boolean;
  recoveryTimeline?: string;
}

export interface MentalHealthBlog {
  id: string;
  titleMr: string;
  titleEn: string;
  slug: string;
  excerptMr: string;
  excerptEn: string;
  contentMr: string[];
  contentEn: string[];
  readTime: string;
  categoryMr: string;
  categoryEn: string;
  publishedDate: string;
  keyTakeawaysMr: string[];
  keyTakeawaysEn: string[];
  author: string;
}

