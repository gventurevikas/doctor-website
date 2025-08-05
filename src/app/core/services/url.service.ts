import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private readonly baseUrl = 'https://doctor-website.com'; // Replace with your actual domain

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  getCurrentUrl(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.href;
    }
    // Fallback for SSR
    return `${this.baseUrl}${this.router.url}`;
  }

  getOrigin(): string {
    if (isPlatformBrowser(this.platformId)) {
      return window.location.origin;
    }
    // Fallback for SSR
    return this.baseUrl;
  }

  getAbsoluteUrl(path: string): string {
    const origin = this.getOrigin();
    return path.startsWith('/') ? `${origin}${path}` : `${origin}/${path}`;
  }

  openUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = url;
    }
  }

  encodeUrl(url: string): string {
    return encodeURIComponent(url);
  }
} 