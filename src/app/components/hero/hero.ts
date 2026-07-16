import { ChangeDetectionStrategy, Component, input } from '@angular/core';

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
}
