# SSR URL Fix Guide

## Problem
`window.location` is not available during server-side rendering (SSR), causing `ReferenceError: window is not defined`.

## Solution
Use the `UrlService` to safely handle URLs in both browser and server environments.

## Required Changes in Each Component

### 1. Import UrlService
```typescript
import { UrlService } from '../../../core/services/url.service';
```

### 2. Inject UrlService in Constructor
```typescript
constructor(
  // ... other services
  private urlService: UrlService
) { }
```

### 3. Replace window.location usages

#### Replace:
```typescript
window.location.href
```
#### With:
```typescript
this.urlService.getCurrentUrl()
```

#### Replace:
```typescript
window.location.origin
```
#### With:
```typescript
this.urlService.getOrigin()
```

#### Replace:
```typescript
`${window.location.origin}/path/to/image.jpg`
```
#### With:
```typescript
this.urlService.getAbsoluteUrl('/path/to/image.jpg')
```

#### Replace:
```typescript
window.location.href = url;
```
#### With:
```typescript
this.urlService.openUrl(url);
```

#### Replace:
```typescript
encodeURIComponent(window.location.href)
```
#### With:
```typescript
this.urlService.encodeUrl(this.urlService.getCurrentUrl())
```

## Components That Need Fixing
All components with SEO implementations that use `window.location`.

This will ensure proper SSR compatibility while maintaining browser functionality. 