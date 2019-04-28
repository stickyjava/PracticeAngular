import * as fromPizza from './pizza.reducer';
import * as fromCar from './cars.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {from} from 'rxjs';

// Application state for adding states
export interface ApplicationState {
  pizza: fromPizza.PizzaState;
  car: fromCar.CarState;
}

// add reducers
export const reducers: ActionReducerMap<ApplicationState> = {
  pizza: fromPizza.reducer,
  car: fromCar.reducer
};

// create Feature Selector
export const getApplicationState = createFeatureSelector<ApplicationState>(
  'pizza-application'
);

// create selector for Pizza
export const getPizzaState = createSelector(
  getApplicationState,
  (state: ApplicationState) => state.pizza
);

// create selector for Car
export const getCarState = createSelector(
  getApplicationState,
  (state: ApplicationState) => state.car
)

// export all the elements of the pizza state
export const getAllPizza = createSelector(getPizzaState, fromPizza.getPizza);
export const getPizzaLoading = createSelector(getPizzaState, fromPizza.getPizzaLoading);
export  const getPizzaLoaded = createSelector(getPizzaState, fromPizza.getPizzaLoaded);

// export all the elements of the car state
export const  getAllCars = createSelector(getCarState, fromCar.getLoadCar);
export const getCarLoading = createSelector(getCarState, fromCar.getCarLoading);
export const getCarLoaded = createSelector(getCarState, fromCar.getCarLoaded);
