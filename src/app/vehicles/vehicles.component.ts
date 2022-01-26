import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  this.getVehicles();
  }

getVehicles(): void {
  this.vehicleService.getVehicles()
  .subscribe(vehicles => this.vehicles = vehicles);
}

add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.vehicleService.addVehicle({ name } as Vehicle)
      .subscribe(vehicle => {
        this.vehicles.push(vehicle);
      });
  }

  delete(vehicle: Vehicle): void {
    this.vehicles = this.vehicles.filter(v => v !== vehicle);
    this.vehicleService.deleteVehicle(vehicle.id).subscribe();
  }

}
