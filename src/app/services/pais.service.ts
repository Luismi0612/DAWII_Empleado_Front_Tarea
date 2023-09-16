import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/pais.model';
import { AppSettings } from '../app.settings';
import { Observable } from 'rxjs';
const baseUrlUtil = AppSettings.API_ENDPOINT+'/util';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  listapais(): Observable<Pais[]>{
    return this.http.get<Pais[]>(baseUrlUtil+"/pais");
}
}
