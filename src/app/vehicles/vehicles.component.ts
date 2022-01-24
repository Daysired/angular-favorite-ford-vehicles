import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
vehicle: Vehicle = {
id: 1,
name: 'Ford EcoSport',
year: 2021,
price: 'Starting at $20,395'
};

  constructor() { }

  ngOnInit(): void {
  }

}
