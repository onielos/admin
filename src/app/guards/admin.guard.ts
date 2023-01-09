import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService} from 'src/app/services/admin.service'
import {  Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
 constructor(
  private _adminService:AdminService,
  private _router:Router
  ){

 }
 
  canActivate():any{
    //Si el metodo isAuthenticated me retorna un falso me redireccionara al login
   if(!this._adminService.isAuthenticated(['admin'])){
      this._router.navigate(['/login'])
      return false;
    }
    // si es verdadero me da acceso al inicio
    return true;
  }
  }
  
