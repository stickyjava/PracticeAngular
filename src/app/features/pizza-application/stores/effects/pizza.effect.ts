import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as pizzaAction from '../actions/pizza.action';
import { map, switchMap} from 'rxjs/operators';
import {PizzaService} from '../../services/pizza.service';

// injectable
@Injectable()
export class PizzaEffect {
  constructor(private actions$: Actions,
              private pizzaService: PizzaService) {}

  @Effect()
  getPizza$ = this.actions$
    .pipe(ofType(pizzaAction.GET_PIZZA), switchMap(() => {
      return this.pizzaService.getPizza().pipe(
        map(pizzas => new pizzaAction.GetPizzaSuccess(pizzas)),
      );
    }));
}
