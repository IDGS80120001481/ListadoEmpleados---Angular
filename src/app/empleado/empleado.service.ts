import { Injectable } from '@angular/core';
import { IEmpleado } from './interface/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Creamos la lista de clientes
  private _empleados: IEmpleado[] = [];

  // Creamos un metodo GET para acceder a la lista
  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  // Metodo que nos permite agregar un nuevo empleado a la lista
  agregarEmpleado(empleado: IEmpleado){
    this._empleados.push(empleado);

    // Guardaremos la lista de clientes en el LocalStorage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  delete(index: number){
    this._empleados.splice(index, 1);
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  constructor() { 
    // Recuperamos la lista del localStorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }
}
