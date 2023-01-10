import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url = GLOBAL.url;

  constructor(
    private _http: HttpClient,
  ) {

  }

  listar_clientes_filtro_admin(tipo:any,filtro:any): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'listar_clientes_filtro_admin/'+tipo+'/'+filtro, { headers: header })
  }
}
