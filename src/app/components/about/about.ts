import { ChangeDetectionStrategy, Component, input } from '@angular/core';

const DEFAULT_ABOUT_TEXT =
  "Hey, I'm Emile! I'm obsessed with golf, and when I grow up, I'm aiming to be a pro " +
  "golfer. I'm always out practicing, trying new shots, and chasing that perfect swing. " +
  'Watch out — future PGA star loading.';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
})
export class About {
  aboutText = input(DEFAULT_ABOUT_TEXT);
}
