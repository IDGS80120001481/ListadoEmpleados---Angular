import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from './empleado.service';
import { FormulariosComponent } from './formularios/formularios.component';
import { TitulosComponent } from './titulos/titulos.component';




@NgModule({
  declarations: [
    ListadoComponent, FormulariosComponent, TitulosComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    TitulosComponent,
    FormulariosComponent,
    ListadoComponent
  ],providers: [
    EmpleadoService
  ]
})
export class EmpleadoModule { }
