import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './features/pizza-application/components/pizza/pizza.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {reducers} from './features/pizza-application/stores';
import {EffectsModule} from '@ngrx/effects';
import {effects} from './features/pizza-application/stores/effects';
import { CarsComponent } from './features/pizza-application/components/cars/cars.component';
import { PizzaDetailsComponent } from './features/pizza-application/components/pizza/pizza-details/pizza-details.component';
import { CarDetailsComponent } from './features/pizza-application/components/cars/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    CarsComponent,
    PizzaDetailsComponent,
    CarDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { }),
    StoreModule.forFeature('pizza-application', reducers ),
    EffectsModule.forRoot(effects)
    // EffectsModule.forFeature(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
