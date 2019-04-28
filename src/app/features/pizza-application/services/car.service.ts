import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../models/Car';

@Injectable({
  providedIn: 'root'
})export  class CarService {
  constructor(private readonly http: HttpClient) {}
  private carUrl = './assets/mock-data/Car.json';
  getCar(): Observable<Car[]> {
    console.log('i am at service');
    return this.http.get<Car[]>(this.carUrl);
  }
}
