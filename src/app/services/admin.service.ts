import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url = GLOBAL.url;

  constructor(
    private _http: HttpClient,
  ) {

  }

  login_admin(data: any): Observable<any> {
    let header = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login_admin', data, { headers: header })
  }

  getToken() {
    return localStorage.getItem('token');
  }

  public isAuthenticated(allowRoles: string[]): boolean {
    //obtengo el token
    const token: any = localStorage.getItem('token');
    //Valido si exite un token
    if (!token) {
      return false
    }

    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      console.log(decodedToken)
      if (!decodedToken) {
        console.log('NO ACCESO')
        localStorage.removeItem('token')
        return false
      }
    } catch (error) {
      localStorage.removeItem('token')
      return false
    }




    return allowRoles.includes(decodedToken['role'])

  }

}
