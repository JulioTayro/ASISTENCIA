import { Component } from '@angular/core';
import { Empleado } from '../../empleado/empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaserviceService } from '../asistenciaservice.service';
import { FormsModule } from '@angular/forms';
import { EmpleadoserviceService } from '../../empleado/empleadoservice.service';
import { NgFor } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { AsistenciaModel } from '../../../Model/AsistenciaModel';

@Component({
  selector: 'app-detalle-asistencia',
  imports: [FormsModule,NgFor,NgSelectModule],
  templateUrl: './detalle-asistencia.component.html',
  styleUrl: './detalle-asistencia.component.css'
})
export class DetalleAsistenciaComponent {
  empleados: Empleado[] = []
  asisId: string | null = ""
  asisFecha: string = ""
  asisEntrada: string = ""
  asisSalida: string = ""
  horasTrabajadas: number = 0
  asisEmpleado: Empleado = {id:0, nombre:"",apellido:"",correo:"",telefono:"",fechaIngreso: new Date(),dni: "", departamento:{ id:0}} 
  constructor(private router:ActivatedRoute,private asistenciaService: AsistenciaserviceService,
    private route:Router,private empleadoService: EmpleadoserviceService){
    }
    ngOnInit(){
      this.empleadoService.getAllEmpleado().subscribe({
        next: (res) => {
          this.empleados = res;
          }
        });
        this.asisId=""
        //obtener la hora actual para el asisEntrada y asisSalida obtenga la hora 00:00:00
        const now = new Date();
        const horas = now.getHours().toString().padStart(2, '0');
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');
        this.asisEntrada = `${horas}:${minutos}:${segundos}`;
        this.asisSalida ="00:00:00"
        //modificar el formato de fehca al dia de hoy 
        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, '0'); //js cuenta los meses desde 0-11
        const dd = String(hoy.getDate()).padStart(2, '0');
        const fechaFormateada = `${yyyy}-${mm}-${dd}`;
        this.asisFecha = fechaFormateada
      }
    registrarIngreso(){
      const newAsistecia: AsistenciaModel = {
        fecha: new Date(this.asisFecha),
        horaEntrada: String(this.asisEntrada),
        horaSalida: String(this.asisSalida),
        empleado: this.asisEmpleado
      }
      this.asistenciaService.saveAsistencia(newAsistecia).subscribe({
        next: (response) =>{
          console.log(response)
          alert("Asistencia registrada")
          this.route.navigate(['/pages/asistencias-hoy'])
        },error:(err) =>{
          console.error(err)
          alert(err)
        }
      })
    }
}
