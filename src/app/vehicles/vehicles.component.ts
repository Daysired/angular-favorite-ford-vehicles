import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VEHICLES } from '../mock-vehicles';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

selectedVehicle?: Vehicle;

vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  this.getVehicles();
  }


  onSelect(vehicle: Vehicle): void {
  this.selectedVehicle = vehicle;
  }

getVehicles(): void {
  this.vehicleService.getVehicles()
  .subscribe(vehicles => this.vehicles = vehicles);
}

}
