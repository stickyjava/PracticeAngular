import * as carAction from '../../stores/actions/cars.action';


// Injectable

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {CarService} from '../../services/car.service';
import {switchMap, map} from 'rxjs/operators';

@Injectable()
export class CarEffect {
  constructor(private actions$: Actions,
              private carService: CarService) {}
  @Effect()
  getCar$ = this.actions$
    .pipe(ofType(carAction.LOAD_CAR),
    switchMap(() => {
      console.log('i am at effects');
      return this.carService.getCar()
        .pipe(
          map(car => new carAction.LoadCarsSuccess(car))
      );
    })
    );

}
