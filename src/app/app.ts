import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

const ORIGIN = 'https://www.mujowave.com';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mujowave');

  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  constructor() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => this.updateSeoTags(e.urlAfterRedirects));
  }

  // Per-route canonical, description and Open Graph tags. Runs during
  // prerendering too, so each static page is emitted with its own values.
  private updateSeoTags(url: string): void {
    const path = url.split(/[?#]/)[0];
    const canonical = ORIGIN + (path === '/' ? '/' : path);

    let link = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
    this.meta.updateTag({ property: 'og:url', content: canonical });

    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    const description = route.data['description'] as string | undefined;
    if (description) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    if (route.title) {
      this.meta.updateTag({ property: 'og:title', content: route.title });
    }
  }
}
