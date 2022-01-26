import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

 private vehiclesUrl = 'api/vehicles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET vehicles from the server */
   getVehicles(): Observable<Vehicle[]> {
     return this.http.get<Vehicle[]>(this.vehiclesUrl)
       .pipe(
         tap(_ => this.log('fetched vehicles')),
         catchError(this.handleError<Vehicle[]>('getVehicles', []))
       );
   }

   /** GET vehicle by id. Return `undefined` when id not found */
   getVehicleNo404<Data>(id: number): Observable<Vehicle> {
     const url = `${this.vehiclesUrl}/?id=${id}`;
     return this.http.get<Vehicle[]>(url)
       .pipe(
         map(vehicles => vehicles[0]), // returns a {0|1} element array
         tap(v => {
           const outcome = v ? `fetched` : `did not find`;
           this.log(`${outcome} vehicle id=${id}`);
         }),
         catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
       );
   }

   /** GET vehicle by id. Will 404 if id not found */
   getVehicle(id: number): Observable<Vehicle> {
     const url = `${this.vehiclesUrl}/${id}`;
     return this.http.get<Vehicle>(url).pipe(
       tap(_ => this.log(`fetched vehicle id=${id}`)),
       catchError(this.handleError<Vehicle>(`getVehicle id=${id}`))
     );
   }

   /** POST: add a new vehicle to the server */
     addVehicle(vehicle: Vehicle): Observable<Vehicle> {
       return this.http.post<Vehicle>(this.vehiclesUrl, vehicle, this.httpOptions).pipe(
         tap((newVehicle: Vehicle) => this.log(`added vehicle w/ id=${newVehicle.id}`)),
         catchError(this.handleError<Vehicle>('addVehicle'))
       );
     }

     /** DELETE: delete the vehicle from the server */
     deleteVehicle(id: number): Observable<Vehicle> {
       const url = `${this.vehiclesUrl}/${id}`;

       return this.http.delete<Vehicle>(url, this.httpOptions).pipe(
         tap(_ => this.log(`deleted vehicle id=${id}`)),
         catchError(this.handleError<Vehicle>('deleteVehicle'))
       );
     }

     /** PUT: update the vehicle on the server */
     updateVehicle(vehicle: Vehicle): Observable<any> {
       return this.http.put(this.vehiclesUrl, vehicle, this.httpOptions).pipe(
         tap(_ => this.log(`updated vehicle id=${vehicle.id}`)),
         catchError(this.handleError<any>('updateVehicle'))
       );
     }

     /**
      * Handle Http operation that failed.
      * Let the app continue.
      * @param operation - name of the operation that failed
      * @param result - optional value to return as the observable result
      */
     private handleError<T>(operation = 'operation', result?: T) {
       return (error: any): Observable<T> => {

         // TODO: send the error to remote logging infrastructure
         console.error(error); // log to console instead

         // TODO: better job of transforming error for user consumption
         this.log(`${operation} failed: ${error.message}`);

         // Let the app keep running by returning an empty result.
         return of(result as T);
       };
     }

     /** Log a VehicleService message with the MessageService */
     private log(message: string) {
       this.messageService.add(`VehicleService: ${message}`);
     }

}
