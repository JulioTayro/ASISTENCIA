import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoserviceService } from '../empleadoservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lst-empleado',
  imports: [FormsModule],
  templateUrl: './lst-empleado.component.html',
  styleUrl: './lst-empleado.component.css'
})
export class LstEmpleadoComponent {
    filtroNombre: string = ''
    empleados: Empleado[] = []
    constructor(private empleadoService: EmpleadoserviceService,
      private route:ActivatedRoute,
      private router:Router){

    }
    ngOnInit(){
      this.empleadoService.getAllEmpleado().subscribe({
        next:(response) => {
          this.empleados = response
        },error:(e) => {
          console.error(e)
        }
      })
    }
    onNavigateCrearEmpleado(){
      this.router.navigate(['nuevo'],{relativeTo: this.route})
    }
    onNavigateEditEmpleado(id: number){
      this.router.navigate([id],{relativeTo: this.route})
    }
    get Filtros(): Empleado[] {
      if (!this.filtroNombre) return this.empleados;
      return this.empleados.filter(item =>
        (item.nombre + ' ' + item.apellido).toLowerCase().includes(this.filtroNombre.toLowerCase()))
    }
     redirecTo(direccion: string){
      this.router.navigate([`/pages/${direccion}`])
    }
}
