import {Component, Input, OnInit} from '@angular/core';
import {Toppings} from '../../../models/Pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent implements OnInit {
  @Input()
  private toppings: Toppings[];

  constructor() { }

  ngOnInit() {
  }


}
