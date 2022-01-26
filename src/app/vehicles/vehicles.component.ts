import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

selectedVehicle?: Vehicle;

vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private messageService: MessageService) { }

  ngOnInit(): void {
  this.getVehicles();
  }


  onSelect(vehicle: Vehicle): void {
  this.selectedVehicle = vehicle;
    this.messageService.add(`VehiclesComponent: Selected vehicle id=${vehicle.id}`);
  }

getVehicles(): void {
  this.vehicleService.getVehicles()
  .subscribe(vehicles => this.vehicles = vehicles);
}

}
