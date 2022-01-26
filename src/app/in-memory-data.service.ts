import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const vehicles = [
     { id: 1, name: 'Ford EcoSport', year: 2021, price: 'Starting at $20,395'},
     { id: 2, name: 'Ford Bronco', year: 2021, price: 'Starting at $28,500'},
     { id: 1, name: 'Ford Escape', year: 2021, price: 'Starting at $25,500'},
     { id: 1, name: 'Ford Mustang-SUV', year: 2021, price: 'Starting at $27,205'},
     { id: 1, name: 'Ford Edge', year: 2022, price: 'Starting at $35,395'},
     { id: 1, name: 'Ford Explorer', year: 2022, price: 'Starting at $47,245'},
     { id: 1, name: 'Ford F-150-Lightning', year: 2022, price: 'Starting at $65,500'},
     { id: 1, name: 'Ford Maverick', year: 2022, price: 'Starting at $19,995'}
    ];
    return {vehicles};
  }

  genId(vehicles: Vehicle[]): number {
    return vehicles.length > 0 ? Math.max(...vehicles.map(vehicle => vehicle.id)) + 1 : 11;
  }
}
