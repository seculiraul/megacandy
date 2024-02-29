import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Candy } from '../../model/candy';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CandyCardComponent } from '../candy-card/candy-card.component';

@Component({
  selector: 'app-candy-list',
  standalone: true,
  imports: [CommonModule, CandyCardComponent],
  templateUrl: './candy-list.component.html',
  styleUrl: './candy-list.component.scss',
})
export class CandyListComponent implements OnInit {
  candies$!: Observable<Candy[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.candies$ = this.apiService.getCandies();
  }

  add() {
    this.apiService.addCandy().subscribe((res) => console.log(res));
  }
}
