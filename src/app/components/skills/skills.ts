import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface TechnicalSkill {
  readonly name: string;
  readonly percentage: number;
}

const DEFAULT_TECHNICAL_SKILLS: TechnicalSkill[] = [
  { name: 'Swing', percentage: 94 },
  { name: 'Putting', percentage: 58 },
  { name: 'Focus', percentage: 72 },
  { name: 'Estimating Distance', percentage: 94 },
  { name: 'Driving', percentage: 68 },
];

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full' },
})
export class Skills {
  technicalSkills = input<TechnicalSkill[]>(DEFAULT_TECHNICAL_SKILLS);
}
