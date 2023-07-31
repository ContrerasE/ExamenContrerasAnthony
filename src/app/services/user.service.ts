import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registros: Registro[]=[
    {
      code: "0",
      fecha: "01/01/2023",
      cliente: "Anthony",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "1",
      fecha: "01/01/2023",
      cliente: "Camilo",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "2",
      fecha: "01/01/2023",
      cliente: "Angel",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "3",
      fecha: "01/01/2023",
      cliente: "Alex",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "4",
      fecha: "01/01/2023",
      cliente: "Reinaldo",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "5",
      fecha: "01/01/2023",
      cliente: "Jordy",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "6",
      fecha: "01/01/2023",
      cliente: "Judas",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "7",
      fecha: "01/01/2023",
      cliente: "Peter",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "8",
      fecha: "01/01/2023",
      cliente: "Romero",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "9",
      fecha: "01/01/2023",
      cliente: "Roger",
      tipointer: "celular",
      descripcion:"usuario"
    },
    {
      code: "10",
      fecha: "01/01/2023",
      cliente: "Bryan",
      tipointer: "celular",
      descripcion:"usuario"
    }
  ];

  getRegistros(){
    return this.registros;
  }

  getRegistro(idx:number):Registro{
    return this.registros[idx];
  }

  constructor() {
    console.log("servicio listo para usar...");
  }

  registrOriBuscada(rorigen: string):number{
    let rb = -1;
    for (let i = 0; i < this.registros.length; i++){
      if (this.registros[i].cliente.toLowerCase() == rorigen.toLowerCase()) {
        rb = i;
      }
    }
    return rb;
  }

}
export interface Registro{
  code: string;
  fecha: string;
  cliente: string;
  tipointer: string;
  descripcion: string;
}
