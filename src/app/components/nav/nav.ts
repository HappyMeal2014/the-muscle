import { ChangeDetectionStrategy, Component, signal, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavLink {
  readonly label: string;
  /** Angular route to link to via routerLink. Takes precedence over `href` when both are set. */
  readonly path?: string;
  /** Plain anchor href, used for links that don't have a route yet. */
  readonly href?: string;
}

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
})
export class Nav {
  wordmark = input('THE MUSCLE');
  navLinks = input<NavLink[]>(DEFAULT_NAV_LINKS);

  protected readonly mobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
