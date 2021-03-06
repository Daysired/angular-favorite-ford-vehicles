import { Component, OnInit} from '@angular/core';
import { Vehicle } from '../vehicle';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss']
})
export class VehicleDetailComponent implements OnInit {

vehicle: Vehicle | undefined;

  constructor(
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private location: Location
    ) { }

  ngOnInit(): void {
   this.getVehicle();
  }

  getVehicle(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.vehicleService.getVehicle(id)
      .subscribe(vehicle => this.vehicle = vehicle);
  }

    goBack(): void {
      this.location.back();
    }

     save(): void {
        if (this.vehicle) {
          this.vehicleService.updateVehicle(this.vehicle)
            .subscribe(() => this.goBack());
        }
     }

}
