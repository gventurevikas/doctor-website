import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly baseUrl = 'https://doctor-website.com'; // Replace with your actual domain

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  updateSEO(seoData: SEOData): void {
    // Update title
    this.titleService.setTitle(seoData.metaTitle);

    // Clear existing meta tags
    this.metaService.removeTag('name="description"');
    this.metaService.removeTag('name="keywords"');
    this.metaService.removeTag('name="author"');
    this.metaService.removeTag('property="og:title"');
    this.metaService.removeTag('property="og:description"');
    this.metaService.removeTag('property="og:image"');
    this.metaService.removeTag('property="og:type"');
    this.metaService.removeTag('property="og:url"');
    this.metaService.removeTag('name="twitter:title"');
    this.metaService.removeTag('name="twitter:description"');
    this.metaService.removeTag('name="twitter:image"');
    this.metaService.removeTag('name="twitter:card"');

    // Set basic meta tags
    this.metaService.addTag({ name: 'description', content: seoData.metaDescription });
    
    if (seoData.keywords && seoData.keywords.length > 0) {
      this.metaService.addTag({ name: 'keywords', content: seoData.keywords.join(', ') });
    }
    
    if (seoData.author) {
      this.metaService.addTag({ name: 'author', content: seoData.author });
    }

    // Set Open Graph tags
    if (seoData.ogTitle) {
      this.metaService.addTag({ property: 'og:title', content: seoData.ogTitle });
    }
    if (seoData.ogDescription) {
      this.metaService.addTag({ property: 'og:description', content: seoData.ogDescription });
    }
    if (seoData.ogImage) {
      this.metaService.addTag({ property: 'og:image', content: seoData.ogImage });
    }
    if (seoData.ogType) {
      this.metaService.addTag({ property: 'og:type', content: seoData.ogType });
    }
    if (seoData.ogUrl) {
      this.metaService.addTag({ property: 'og:url', content: seoData.ogUrl });
    }

    // Set Twitter Card tags
    this.metaService.addTag({ name: 'twitter:card', content: 'summary_large_image' });
    if (seoData.twitterTitle) {
      this.metaService.addTag({ name: 'twitter:title', content: seoData.twitterTitle });
    }
    if (seoData.twitterDescription) {
      this.metaService.addTag({ name: 'twitter:description', content: seoData.twitterDescription });
    }
    if (seoData.twitterImage) {
      this.metaService.addTag({ name: 'twitter:image', content: seoData.twitterImage });
    }

    // Set canonical URL
    if (seoData.canonicalUrl) {
      this.setCanonicalUrl(seoData.canonicalUrl);
    }

    // Set structured data
    if (seoData.structuredData) {
      this.setStructuredData(seoData.structuredData);
    }
  }

  private setCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing canonical link
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }

      // Add new canonical link
      const canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
  }

  private setStructuredData(structuredData: any): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  // SSR-safe helper methods
  getCurrentUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.href;
    }
    return this.baseUrl; // Fallback for SSR
  }

  getOrigin(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.origin;
    }
    return this.baseUrl; // Fallback for SSR
  }

  getAbsoluteUrl(path: string): string {
    const origin = this.getOrigin();
    return path.startsWith('/') ? `${origin}${path}` : `${origin}/${path}`;
  }
} 