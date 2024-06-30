import { Component } from '@angular/core';
import { IEmpleado } from '../interface/Empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})

export class FormulariosComponent {
  // Agregamos un nuevo empleado
  empleado: IEmpleado = {
    num_empleado: 0,
    nombre: "",
    correo: "",
    telefono: "",
    fecha_nacimiento: "",
    sexo: ""
  }

  // definamos una nueva variable que es de salida
  constructor(private EmpleadoService: EmpleadoService) {}

  agregar(){
    if(this.empleado.nombre.trim().length == 0 ||
       this.empleado.correo.trim().length == 0 ||
       this.empleado.telefono.trim().length == 0 ||
       this.empleado.fecha_nacimiento.trim().length == 0 ||
       this.empleado.sexo.trim().length == 0)
      return;
    if(this.empleado.num_empleado === null)
      return;

    // Agregamos el nuevo empleado invocando el servicio
    this.EmpleadoService.agregarEmpleado(this.empleado);

    this.empleado = {
      num_empleado: 0,
      nombre: "",
      correo: "",
      telefono: "",
      fecha_nacimiento: "",
      sexo: ""
    }
  }
}
