import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public url = GLOBAL.url
  constructor(
   private _http:HttpClient,

  ) { }

  get_categorias():Observable<any>{
    return this._http.get('./assets/categorias.json');
  }

  listar_etiquetas_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_etiquetas_admin',{headers:headers});
  }

  eliminar_etiqueta_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url + 'eliminar_etiqueta_admin/'+id,{headers:headers});
  }

  agregar_etiqueta_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_etiqueta_admin',data,{headers:headers});
  }

  registro_producto_admin(data:any,file:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Authorization':token});
    const fd = new FormData();
    fd.append('titulo',data.titulo);
    fd.append('etiquetas',JSON.stringify(data.etiquetas));
    fd.append('precio',data.precio);
    fd.append('precio_dolar',data.precio_dolar);
    fd.append('peso',data.peso);
    fd.append('sku',data.sku);
    fd.append('descripcion',data.descripcion);
    fd.append('contenido',data.contenido);
    fd.append('categoria',data.categoria);
    fd.append('visibilidad',data.visibilidad);
    fd.append('tallas_str','');
    fd.append('portada',file);
    return this._http.post(this.url+'registro_producto_admin',fd,{headers:headers});
  }

  listar_productos_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_productos_admin',{headers:headers});
  }

  cambiar_vs_producto_admin(id:any,estado:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'cambiar_vs_producto_admin/'+id+'/'+estado,{headers:headers});
  }
}
