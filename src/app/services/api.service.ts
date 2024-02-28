import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candy } from '../model/candy';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getCandies(): Observable<Candy[]> {
    return this.http.get<Candy[]>('http://localhost:3000/candies');
  }

  public addCandy(): Observable<any> {
    const candy: Candy = {
      id: '5',
      name: 'added candy',
      description: 'added candy desc',
      price: 22,
      isNew: false,
    };
    return this.http.post('http://localhost:3000/candies', candy);
  }
}
