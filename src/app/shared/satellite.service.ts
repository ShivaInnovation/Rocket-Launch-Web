import { Injectable } from '@angular/core';
import { Satellite } from './satellite.model';

@Injectable({
  providedIn: 'root'
})
export class SatelliteService {
  formData: Satellite;
  constructor() { }
}
