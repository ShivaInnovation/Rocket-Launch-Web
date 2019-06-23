import { Injectable } from '@angular/core';
import { Rocket } from './rocket.model';
import { Satellite } from './satellite.model';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RocketService {
 formData: Rocket;
 satellites: Satellite[] = [];
 constructor( private http: HttpClient) { }
 getRocketList() {
  return this.http.get(environment.apiUrl + '/Rocket');
}

saveUpdateRocket() {
  const body = {
    ...this.formData, Satellites : this.satellites
  };
  console.log(body);
  return this.http.post(environment.apiUrl + '/Rocket', body);
}
}
