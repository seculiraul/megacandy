import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Candy } from '../../model/candy';

@Component({
  selector: 'app-candy-list',
  standalone: true,
  imports: [],
  templateUrl: './candy-list.component.html',
  styleUrl: './candy-list.component.scss',
})
export class CandyListComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  public candies!: Candy[];

  ngOnInit(): void {
    this.apiService.getCandies().subscribe((data) => (this.candies = data));
  }
}
