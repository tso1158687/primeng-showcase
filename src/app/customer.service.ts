import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { Customer } from './table/table.component';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge() {
    return this.http
      .get<any>('assets/showcase/data/customers-large.json')
      .toPromise()
      .then((res) => <Customer[]>res.data)
      .then((data) => {
        return data;
      });
  }

  getVehicleList() {
    return this.http.get<any>('assets/showcase/data/vehicle.json');
    // .pipe(delay(3000))
  }
}
