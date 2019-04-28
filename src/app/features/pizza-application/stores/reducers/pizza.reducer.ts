import {Pizza} from '../../models/Pizza';
import * as fromPizzas from '../../stores/actions/pizza.action';

export interface PizzaState {
  data: Pizza[];
  loading: boolean;
  loaded: boolean;
}


export const initialState: PizzaState = {
    data: [],
    loading: false,
    loaded: false
}

export function reducer(
  state = initialState, // assignment of initialstate to initialize
  action: fromPizzas.PizzaAction
): PizzaState {

  switch (action.type) {
    case fromPizzas.GET_PIZZA: { // should use action constant here.
      return {
        ...state,
        loading: true
      };
    }
    case fromPizzas.GET_PIZZA_SUCCESS: {
      const data = action.payload;
      console.log(data);
      return {
        ...state, // merging all the state
        loading: false,
        loaded: true,
        data
      };
    }
    case fromPizzas.GET_PIZZA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
// for selector
export const  getPizzaLoading = (state: PizzaState) => state.loading;
export const  getPizzaLoaded = (state: PizzaState) => state.loaded;
export const  getPizza = (state: PizzaState) => state.data;



