import { Component } from '@angular/core';
import { Asistencia } from '../asistencia';
import { AsistenciaserviceService } from '../asistenciaservice.service';
import { Empleado } from '../../empleado/empleado';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lst-asistencia',
  imports: [FormsModule],
  templateUrl: './lst-asistencia.component.html',
  styleUrl: './lst-asistencia.component.css'
})
export class LstAsistenciaComponent {

  filtroNombre: string = ''
  asistencias: Asistencia[] = []
  empleados :Empleado[] = []

  constructor(private asistenciaService:AsistenciaserviceService,private router:Router){
    }
    redirecTo(direccion: string){
      this.router.navigate([`/pages/${direccion}`])
    }
    ngOnInit(){
      this.asistenciaService.getAllAsistencia().subscribe({
        next: (response) => {
          this.asistencias = response
        },error:(e) => {
          console.error(e)
        },
      })
    }
  get asistenciasFiltradas(): Asistencia[] {
    if (!this.filtroNombre) return this.asistencias;
    return this.asistencias.filter(item =>
      (item.empleado.nombre + ' ' + item.empleado.apellido).toLowerCase().includes(this.filtroNombre.toLowerCase()))
  }
}
