import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-public-layout',
  standalone: false,
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log('PublicLayoutComponent initialized');
    
    // Subscribe to router events to see navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      console.log('Navigation ended:', event.url);
    });

    // Only run in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Hide any remaining preloaders
      this.hidePreloader();
    }
  }

  private hidePreloader(): void {
    // Only access document in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Remove any preloader elements
      const preloaders = document.querySelectorAll('.preloader');
      preloaders.forEach(preloader => {
        preloader.classList.add('loaded');
        setTimeout(() => {
          preloader.remove();
        }, 500);
      });
    }
  }
}
