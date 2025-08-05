import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { Page } from '../models/seo.model';

@Injectable({
  providedIn: 'root'
})
export class PageService extends BaseApiService {
  private endpoint = '/pages';

  constructor(http: HttpClient) {
    super(http);
  }

  getAllPages(page: number = 1, limit: number = 10, filters?: any): Observable<Page[]> {
    const params = this.createPaginationParams(page, limit, filters);
    return this.get<Page[]>(this.endpoint, params).pipe(
      map(response => response.data)
    );
  }

  getPageBySlug(slug: string): Observable<Page> {
    return this.getBySlug<Page>(this.endpoint, slug).pipe(
      map(response => response.data)
    );
  }

  getPageById(id: string): Observable<Page> {
    return this.getById<Page>(this.endpoint, id).pipe(
      map(response => response.data)
    );
  }

  getPublishedPages(page: number = 1, limit: number = 10): Observable<Page[]> {
    const params = this.createPaginationParams(page, limit, { status: 'published' });
    return this.get<Page[]>(this.endpoint, params).pipe(
      map(response => response.data)
    );
  }

  createPage(page: Page): Observable<Page> {
    return this.post<Page>(this.endpoint, page).pipe(
      map(response => response.data)
    );
  }

  updatePage(id: string, page: Partial<Page>): Observable<Page> {
    return this.put<Page>(this.endpoint, id, page).pipe(
      map(response => response.data)
    );
  }

  deletePage(id: string): Observable<any> {
    return this.delete<any>(this.endpoint, id).pipe(
      map(response => response.data)
    );
  }
} 