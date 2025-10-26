import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsistenciaserviceService } from '../asistenciaservice.service';
import { Asistencia } from '../asistencia';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lsthoy',
  imports: [FormsModule],
  templateUrl: './lsthoy.component.html',
  styleUrl: './lsthoy.component.css'
})
export class LsthoyComponent {
  filtroNombre: string = ''
  asistencias: Asistencia[] = []
  disabledIndex: number | null = null;
  constructor(private router:ActivatedRoute,private asistenciaService: AsistenciaserviceService,
    private route:Router){
    }
    ngOnInit() {
      this.asistenciaService.getAsistenciaHoy().subscribe({
        next: (response) => {
          this.asistencias = response
        }
      })
    }
    onGenerarAsistencia(){
      this.route.navigate(['nuevo'],{relativeTo: this.router})
    }
    onGenerarSalida(id: number): void{
      this.asistenciaService.updateAsistencia(id).subscribe({
        next: (res) => {
          console.log("Hora actualizada", res);
          alert("Se marco la hora de salida")
          this.ngOnInit();
        },
        error: (err) => {
          console.error("Error al actualizar hora", err);
        }
      })
    }
    verificarContrasena() {
    const usuario = prompt('Ingrese el usuario:');
    const contrasena = prompt('Ingrese la contraseña:');
    if (usuario === 'rrhh' && contrasena === 'rrhh' ) {
      this.route.navigate(['/pages/asistencias']);
    } else {
      alert('Usuario o Contraseña incorrecta ');
    }
  }
  get Filtros(): Asistencia[] {
  if (!this.filtroNombre) return this.asistencias;
  return this.asistencias.filter(item =>
    (item.empleado.nombre + ' ' + item.empleado.apellido).toLowerCase().includes(this.filtroNombre.toLowerCase()))
}
}
