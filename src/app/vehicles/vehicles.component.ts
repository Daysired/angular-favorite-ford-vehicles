import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VEHICLES } from '../mock-vehicles';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
vehicles = VEHICLES;
selectedVehicle?: Vehicle;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vehicle: Vehicle): void {
  this.selectedVehicle = vehicle;}

}
