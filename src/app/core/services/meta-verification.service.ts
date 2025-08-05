import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

export interface MetaTagInfo {
  name?: string;
  property?: string;
  content: string;
  type: 'meta' | 'title' | 'canonical' | 'structured-data';
}

export interface MetaVerificationResult {
  title: string;
  metaTags: MetaTagInfo[];
  openGraphTags: MetaTagInfo[];
  twitterTags: MetaTagInfo[];
  canonicalUrl?: string;
  structuredData?: any;
  issues: string[];
  recommendations: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MetaVerificationService {

  constructor(
    private metaService: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Verify all meta tags on the current page
   */
  verifyMetaTags(): MetaVerificationResult {
    const result: MetaVerificationResult = {
      title: this.titleService.getTitle(),
      metaTags: [],
      openGraphTags: [],
      twitterTags: [],
      issues: [],
      recommendations: []
    };

    // Only verify meta tags in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      result.issues.push('Meta tag verification not available during SSR');
      return result;
    }

    // Get all meta tags from the document
    const metaElements = document.querySelectorAll('meta');
    const linkElements = document.querySelectorAll('link');
    const scriptElements = document.querySelectorAll('script[type="application/ld+json"]');

    // Process meta tags
    metaElements.forEach(meta => {
      const name = meta.getAttribute('name');
      const property = meta.getAttribute('property');
      const content = meta.getAttribute('content');

      if (content) {
        const tagInfo: MetaTagInfo = {
          content,
          type: 'meta'
        };

        if (name) {
          tagInfo.name = name;
        }
        if (property) {
          tagInfo.property = property;
        }

        // Categorize tags
        if (property && property.startsWith('og:')) {
          result.openGraphTags.push(tagInfo);
        } else if (name && name.startsWith('twitter:')) {
          result.twitterTags.push(tagInfo);
        } else {
          result.metaTags.push(tagInfo);
        }
      }
    });

    // Get canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      result.canonicalUrl = canonicalLink.href;
    }

    // Get structured data
    scriptElements.forEach(script => {
      try {
        const structuredData = JSON.parse(script.textContent || '{}');
        if (Object.keys(structuredData).length > 0) {
          result.structuredData = structuredData;
        }
      } catch (error) {
        result.issues.push('Invalid structured data JSON');
      }
    });

    // Analyze and provide recommendations
    this.analyzeMetaTags(result);

    return result;
  }

  /**
   * Analyze meta tags and provide recommendations
   */
  private analyzeMetaTags(result: MetaVerificationResult): void {
    // Check title
    if (!result.title || result.title === 'AnkurWeb') {
      result.issues.push('Page title is missing or using default title');
      result.recommendations.push('Set a descriptive, unique title for each page');
    }

    // Check meta description
    const description = result.metaTags.find(tag => tag.name === 'description');
    if (!description || !description.content) {
      result.issues.push('Meta description is missing');
      result.recommendations.push('Add a compelling meta description (150-160 characters)');
    } else if (description.content.length > 160) {
      result.issues.push('Meta description is too long');
      result.recommendations.push('Keep meta description under 160 characters');
    }

    // Check Open Graph tags
    if (result.openGraphTags.length === 0) {
      result.issues.push('Open Graph tags are missing');
      result.recommendations.push('Add Open Graph tags for better social media sharing');
    } else {
      const ogTitle = result.openGraphTags.find(tag => tag.property === 'og:title');
      const ogDescription = result.openGraphTags.find(tag => tag.property === 'og:description');
      const ogImage = result.openGraphTags.find(tag => tag.property === 'og:image');

      if (!ogTitle) {
        result.issues.push('Open Graph title is missing');
        result.recommendations.push('Add og:title tag');
      }
      if (!ogDescription) {
        result.issues.push('Open Graph description is missing');
        result.recommendations.push('Add og:description tag');
      }
      if (!ogImage) {
        result.issues.push('Open Graph image is missing');
        result.recommendations.push('Add og:image tag for better social sharing');
      }
    }

    // Check Twitter tags
    if (result.twitterTags.length === 0) {
      result.recommendations.push('Consider adding Twitter Card tags for better Twitter sharing');
    }

    // Check canonical URL
    if (!result.canonicalUrl) {
      result.recommendations.push('Add canonical URL to prevent duplicate content issues');
    }

    // Check structured data
    if (!result.structuredData) {
      result.recommendations.push('Add structured data for better search engine understanding');
    }
  }

  /**
   * Get specific meta tag value
   */
  getMetaTag(name: string, property?: string): string | null {
    if (property) {
      return this.metaService.getTag(`property="${property}"`)?.content || null;
    }
    return this.metaService.getTag(`name="${name}"`)?.content || null;
  }

  /**
   * Check if a specific meta tag exists
   */
  hasMetaTag(name: string, property?: string): boolean {
    return this.getMetaTag(name, property) !== null;
  }

  /**
   * Log meta tags to console for debugging
   */
  debugMetaTags(): void {
    // Only debug in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      console.log('🔍 Meta Tags Verification: Skipped during SSR');
      return;
    }

    const result = this.verifyMetaTags();
    
    console.group('🔍 Meta Tags Verification');
    console.log('📄 Title:', result.title);
    console.log('🏷️ Meta Tags:', result.metaTags);
    console.log('📱 Open Graph Tags:', result.openGraphTags);
    console.log('🐦 Twitter Tags:', result.twitterTags);
    console.log('🔗 Canonical URL:', result.canonicalUrl);
    console.log('📊 Structured Data:', result.structuredData);
    
    if (result.issues.length > 0) {
      console.warn('⚠️ Issues:', result.issues);
    }
    
    if (result.recommendations.length > 0) {
      console.info('💡 Recommendations:', result.recommendations);
    }
    
    console.groupEnd();
  }

  /**
   * Validate meta tags for SEO best practices
   */
  validateSEO(): { score: number; issues: string[]; recommendations: string[] } {
    const result = this.verifyMetaTags();
    let score = 100;
    const issues: string[] = [];
    const recommendations: string[] = [];

    // Title validation
    if (!result.title || result.title === 'AnkurWeb') {
      score -= 20;
      issues.push('Missing or default title');
    }

    // Meta description validation
    const description = result.metaTags.find(tag => tag.name === 'description');
    if (!description) {
      score -= 15;
      issues.push('Missing meta description');
    } else if (description.content.length < 50) {
      score -= 5;
      issues.push('Meta description too short');
    } else if (description.content.length > 160) {
      score -= 5;
      issues.push('Meta description too long');
    }

    // Open Graph validation
    if (result.openGraphTags.length === 0) {
      score -= 15;
      issues.push('Missing Open Graph tags');
    } else {
      const requiredOGTags = ['og:title', 'og:description', 'og:image'];
      requiredOGTags.forEach(tag => {
        if (!result.openGraphTags.find(og => og.property === tag)) {
          score -= 5;
          issues.push(`Missing ${tag}`);
        }
      });
    }

    // Canonical URL validation
    if (!result.canonicalUrl) {
      score -= 10;
      issues.push('Missing canonical URL');
    }

    // Structured data validation
    if (!result.structuredData) {
      score -= 10;
      issues.push('Missing structured data');
    }

    // Generate recommendations based on score
    if (score < 80) {
      recommendations.push('Focus on adding missing essential meta tags');
    }
    if (score < 90) {
      recommendations.push('Optimize existing meta tags for better SEO');
    }
    if (score >= 90) {
      recommendations.push('Excellent! Consider adding advanced SEO features');
    }

    return { score, issues, recommendations };
  }
} 