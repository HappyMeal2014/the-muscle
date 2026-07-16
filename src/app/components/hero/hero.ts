import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  /** SVG path `d` data for a 24x24 viewBox icon. Falls back to a letter monogram when omitted. */
  readonly iconPath?: string;
}

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
})
export class Hero {
  greeting = input("Hello I'm");
  name = input('Emile Lombaard');
  tagline = input('Full-Stack Developer & Problem Solver');
  email = input('emile.lombaard@outlook.com');
  photoUrl = input('/hulk.jpg');
  photoAlt = input('Profile photo');
  socialLinks = input<SocialLink[]>(DEFAULT_SOCIAL_LINKS);
}
