import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  public clientes: any={}
  
  constructor() { }

  ngOnInit(): void {
  }
  registro(registroForm:any){
    console.log(registroForm)
    console.log(this.clientes)
  }

}
