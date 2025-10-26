import { Departamento } from "../departamento/Departamento";

export interface Empleado{
    id: number,
    nombre: string,
    apellido: string,
    telefono: string,
    correo: string,
    fechaIngreso: Date;
    dni: string,
    departamento: Departamento
  
}
