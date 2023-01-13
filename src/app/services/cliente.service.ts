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

  listar_clientes_tienda(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_clientes_tienda',{headers:headers});
  }

}
