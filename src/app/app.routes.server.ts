import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server
  },
  {
    path: 'departments/:specialty',
    renderMode: RenderMode.Server
  },
  {
    path: 'doctors/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'cases/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'articles/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'skills/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];