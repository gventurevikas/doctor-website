import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../app.config';

@Component({
  selector: 'app-public-header',
  standalone: false,
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss']
})
export class PublicHeaderComponent implements OnInit, OnDestroy {
  currentRoute: string = '';
  isMenuOpen: boolean = false;
  apiUrl = environment.apiUrl;
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Track current route for active states
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        this.isMenuOpen = false; // Close mobile menu on navigation
      });

    // Set initial route
    this.currentRoute = this.router.url;

    // Add sticky header functionality only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.initStickyHeader();
    }
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  toggleMobileMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMenuOpen = false;
  }

  navigateTo(route: string): void {
    console.log('Navigating to:', route);
    this.router.navigate([route]);
    this.closeMobileMenu();
  }

  isActiveRoute(route: string): boolean {
    const isActive = route === '/' ? this.currentRoute === '/' : this.currentRoute.startsWith(route);
    console.log(`Checking if ${route} is active for ${this.currentRoute}: ${isActive}`);
    return isActive;
  }

  private initStickyHeader(): void {
    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        const stickyHeader = document.querySelector('.sticky-header');
        if (stickyHeader) {
          if (window.scrollY > 150) {
            stickyHeader.classList.add('is-sticky');
          } else {
            stickyHeader.classList.remove('is-sticky');
          }
        }
      });
    }
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const searchQuery = formData.get('field-name') as string;
    
    if (searchQuery && searchQuery.trim()) {
      // Navigate to blog with search query
      this.router.navigate(['/blog'], { queryParams: { search: searchQuery.trim() } });
    }
  }
}
