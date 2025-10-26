import { Component } from '@angular/core';
import { Departamento } from '../../departamento/Departamento';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoserviceService } from '../empleadoservice.service';
import { Empleado } from '../empleado';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { EmpleadoModel } from '../../../Model/EmpleadoModel';
enum Form{
  crear = 0,
  editar = 1
}
@Component({
  selector: 'app-detalle-empleado',
  imports: [FormsModule,NgFor],
  templateUrl: './detalle-empleado.component.html',
  styleUrl: './detalle-empleado.component.css'
})

export class DetalleEmpleadoComponent {
  departamentos: Departamento[] = []
  id: string | null = ""
  nombre: string = ""  
  apellido: string = ""
  correo: string = ""
  telefono: string = ""
  fechaIngreso: Date = new Date()
  dni: string = ""
  departamento: Departamento = { id: 0, nombre: "" };
  titulo: string = ""
  form!: Form
  constructor(private router:ActivatedRoute, private empleadoService: EmpleadoserviceService,
    private route:Router){

  }
  getEmpleadoById(id: number){
    this.empleadoService.getEmpleadoById(id).subscribe({
      next: (response) =>{
        this.nombre = response.nombre
        this.apellido = response.apellido
        this.correo = response.correo
        this.telefono = response.telefono
        this.fechaIngreso = response.fechaIngreso
        this.dni = response.dni
        this.departamento = response.departamento
      }
    })
  }
  ngOnInit(){
    this.id = this.router.snapshot.paramMap.get("id")
    this.empleadoService.getDepartamentos().subscribe({
      next: (res) => {
        this.departamentos = res;
        }
      });
    if(this.id !== 'nuevo'){
      this.titulo = "Modificar Datos del Empleado"
      this.form = Form.editar
    this.getEmpleadoById(Number(this.id))
    }else{
      this.titulo = "Registrar Nuevo Empleado"
      this.form = Form.crear
      this.id = ""
    }
  }
  registrarEmpleado(){
    if(this.form === Form.crear){
      const newEmpleado: EmpleadoModel ={
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        telefono: this.telefono,
        fechaIngreso: this.fechaIngreso,
        dni: this.dni,
        departamento: this.departamento
      }
      this.empleadoService.saveEmpleado(newEmpleado).subscribe({
        next: (response) => {
          console.log(response)
          this.route.navigate(['/pages/empleados']);
        },error:(err) => {
          console.error(err);
          
        },
      })
    }else{
      const newEmpleado: Empleado = {
        id: Number(this.id),
        nombre: String(this.nombre),
        apellido: String(this.apellido),
        telefono: String(this.telefono),
        correo: String(this.correo),
        fechaIngreso: new Date(this.fechaIngreso),
        dni: String(this.dni),
        departamento: this.departamento
      }
      this.empleadoService.updateEmpleado(newEmpleado).subscribe({
        next: (response) => {
          console.log(response)
          this.route.navigate(['/pages/empleados']);
        },error:(err) =>{
          console.error(err)
          alert("No se pudo registrar")
        }
      })
    }
  }
}
