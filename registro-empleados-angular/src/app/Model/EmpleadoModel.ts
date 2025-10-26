import { Departamento } from "../pages/departamento/Departamento";

export interface EmpleadoModel{
        nombre: string,
        apellido: string,
        telefono: string,
        correo: string,
        fechaIngreso: Date;
        dni: string,
        departamento: Departamento | null
}