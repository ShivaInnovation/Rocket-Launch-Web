import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient ) { }
  getCategoryList() {
    return this._http.get(environment.apiUrl + '/Category');
  }
}
