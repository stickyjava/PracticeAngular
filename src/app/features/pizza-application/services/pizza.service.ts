import { Injectable } from '@angular/core';
import {Pizza} from '../models/Pizza';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private readonly http: HttpClient) { }
  private pizzaUrl = './assets/mock-data/Pizza.json';

  getPizza(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.pizzaUrl);
  }
}
