import {Routes, RouterModule } from "@angular/router"
import { ModuleWithProviders } from "@angular/core";
import { InicioComponent } from "./components/inicio/inicio.component";
import { LoginComponent } from "./components/login/login.component";

import { AdminGuard } from "./guards/admin.guard";
import { IndexClienteComponent } from "./components/clientes/index-cliente/index-cliente.component";
import { CreateClienteComponent } from "./components/clientes/create-cliente/create-cliente.component";
import { EditClienteComponent } from "./components/clientes/edit-cliente/edit-cliente.component";
import { IndexProductoComponent } from "./components/productos/index-producto/index-producto.component";
import { CreateProductoComponent } from "./components/productos/create-producto/create-producto.component";
import { EditProductoComponent } from "./components/productos/edit-producto/edit-producto.component";
import { VariedadesProductoComponent } from "./components/productos/variedades-producto/variedades-producto.component";
import { GaleriaProductoComponent } from "./components/productos/galeria-producto/galeria-producto.component";
import { InventarioProductoComponent } from "./components/productos/inventario-producto/inventario-producto.component";
const appRoute : Routes =[
    //Aqui colocamos el guard de la ruta
    {path: '', redirectTo: 'login', pathMatch : 'full'},
    //{path: 'dashboard', component: DashboardComponent, canActivate:[AdminGuard]},
    {path: 'login', component: LoginComponent},


    {path: 'clientes', component: IndexClienteComponent, canActivate:[AdminGuard]},


    {path:'login',component:LoginComponent},

    {path: 'productos', component: IndexProductoComponent, canActivate:[AdminGuard]},
    {path: 'productos/create', component: CreateProductoComponent, canActivate:[AdminGuard]},
    {path: 'productos/edit/:id', component: EditProductoComponent, canActivate:[AdminGuard]},
    {path: 'productos/variedades/:id', component: VariedadesProductoComponent, canActivate:[AdminGuard]},
    {path: 'productos/inventario/:id', component: InventarioProductoComponent, canActivate:[AdminGuard]},
    {path: 'productos/galeria/:id', component: GaleriaProductoComponent , canActivate:[AdminGuard]},


]

export const AppRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);
