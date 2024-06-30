import { Component } from '@angular/core';
import { IEmpleado } from '../interface/Empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  // Inyectamos el servicio de los empleados del componente
  constructor(private EmpleadoService: EmpleadoService) {}

  // Definimos un metodo para la lista desde el servicio
  get empleados(): IEmpleado[]{
    return this.EmpleadoService.empleados;
  }

  delete(index: number){
    this.EmpleadoService.delete(index);
  }
}
