import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { VEHICLES } from './mock-vehicles';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private messageService: MessageService) { }

  getVehicles(): Observable<Vehicle[]> {
   const vehicles = of(VEHICLES);
   this.messageService.add('VehicleService: fetched vehicles');
    return vehicles;
  }

  getVehicle(id: number): Observable<Vehicle> {
      const vehicle = VEHICLES.find(v => v.id === id)!;
      this.messageService.add(`VehicleService: fetched vehicle id=${id}`);
      return of(vehicle);
    }
}
