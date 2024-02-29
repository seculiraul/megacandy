import { Component, Input } from '@angular/core';
import { Candy } from '../../model/candy';

@Component({
  selector: 'app-candy-card',
  standalone: true,
  imports: [],
  templateUrl: './candy-card.component.html',
  styleUrl: './candy-card.component.scss',
})
export class CandyCardComponent {
  @Input() candy!: Candy;

  constructor() {}
}
