import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FormsModule } from '@angular/forms';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehicleDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
