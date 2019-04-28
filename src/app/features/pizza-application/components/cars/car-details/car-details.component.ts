import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../../models/Car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {
  @Input()
  private car: Car;

  constructor() { }

  ngOnInit() {
  }

}
