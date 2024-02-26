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
}
