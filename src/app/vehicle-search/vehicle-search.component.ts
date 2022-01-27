import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.scss']
})
export class VehicleSearchComponent implements OnInit {
 vehicles$!: Observable<Vehicle[]>;
  private searchTerms = new Subject<string>();


  constructor(private vehicleService: VehicleService) { }

    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }

  ngOnInit(): void {
   this.vehicles$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.vehicleService.searchVehicles(term)),
      );
  }

}
