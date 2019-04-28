import {Action} from '@ngrx/store';
import {Car} from '../../models/Car';

// Action constants
export const LOAD_CAR = '[CAR] Load Car';
export const LOAD_CAR_SUCCESS = '[CAR] Load Car Success';
export const LOAD_CAR_FAIL = '[CAR] Load Car Fail';

// Action creator
export class LoadCars implements Action {
  readonly type = LOAD_CAR;
}

export class LoadCarsSuccess implements  Action {
  readonly  type = LOAD_CAR_SUCCESS;
  constructor(public payload: Car[]) {}
}

export class LoadCarsFail implements Action {
  readonly  type = LOAD_CAR_FAIL;
  constructor(public payload: any) {
    console.log('i am at action car success');
  }
}

// Action export
export type CarAction = LoadCars | LoadCarsSuccess | LoadCarsFail;
