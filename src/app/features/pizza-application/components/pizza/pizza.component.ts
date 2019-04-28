import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../stores';
import {Toppings} from '../../models/Pizza';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  toppings: Toppings[];
  constructor(private store: Store<fromStore.ApplicationState>) { }
  getPizza$;
  ngOnInit() {
    this.getPizza$ = this.store.select(fromStore.getAllPizza);
    this.store.dispatch(new fromStore.GetPizza());
  }

  onClickPizza(topping: Toppings[]) {
    this.toppings = topping;
  }

}
