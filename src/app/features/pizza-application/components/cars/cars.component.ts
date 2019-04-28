import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../stores';
import {Car} from '../../models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor(private readonly store: Store<fromStore.ApplicationState>) { }
  car$;
  car: Car;
  ngOnInit() {
    console.log('i am at component');
    //

    this.car$ = this.store.select(fromStore.getAllCars);

  }

  onclickBtn() {
    this.store.dispatch(new fromStore.LoadCars());
  }
  onClickCar(car: Car) {
    this.car = car;
  }

}
