
import * as fromCars from '../../stores/actions/cars.action';
import {Car} from '../../models/Car';

// create state
export interface CarState {
  data: Car[];
  loading: boolean;
  loaded: boolean;
}

// create initial state
export const initialState: CarState = {
  data: [],
  loading: false,
  loaded: false
}

// create reducer function
export function reducer(
  state = initialState,
  action: fromCars.CarAction
): CarState {
  switch (action.type) {
    case fromCars.LOAD_CAR: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCars.LOAD_CAR_SUCCESS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromCars.LOAD_CAR_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}

// export indivisual state element
export const getLoadCar = (state: CarState) => state.data;
export const getCarLoading = (state: CarState) => state.loading;
export const getCarLoaded = (state: CarState) => state.loaded;
