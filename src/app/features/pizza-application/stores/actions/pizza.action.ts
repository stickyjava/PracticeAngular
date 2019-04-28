import {Action} from '@ngrx/store';
import {Pizza} from '../../models/Pizza';


// Action constants
export const  GET_PIZZA = '[PIZZA] Get Pizza';
export const  GET_PIZZA_FAIL = '[PIZZA] Get Pizza Fail';
export const  GET_PIZZA_SUCCESS = '[PIZZA] Get Pizza Success';


// Action creators
export class GetPizza implements Action {
  readonly type = GET_PIZZA;
}

export class GetPizzaFail implements Action {
  readonly type = GET_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class GetPizzaSuccess implements Action {
  readonly type = GET_PIZZA_SUCCESS;
  constructor(public payload: Pizza[]) {
  }
}

// action types
export type PizzaAction = GetPizza | GetPizzaFail | GetPizzaSuccess;
