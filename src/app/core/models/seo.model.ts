export interface SEOMetadata {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export interface SEOSettings {
  id: string;
  siteName: string;
  siteDescription: string;
  siteKeywords: string[];
  siteAuthor: string;
  siteUrl: string;
  defaultOgImage: string;
  defaultTwitterImage: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  twitterUsername?: string;
  facebookPageId?: string;
  linkedinCompanyId?: string;
  schemaMarkup: {
    organization: any;
    medicalBusiness?: any;
    person?: any;
  };
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  template: 'home' | 'about' | 'contact' | 'services' | 'custom';
  status: 'published' | 'draft' | 'archived';
  createdAt: string;
  updatedAt: string;
  seo: SEOMetadata;
  components: PageComponent[];
}

export interface PageComponent {
  id: string;
  type: 'hero' | 'services' | 'testimonials' | 'contact' | 'gallery';
  data: any;
  order: number;
} 