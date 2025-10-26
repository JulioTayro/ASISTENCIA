import { Empleado } from "../pages/empleado/empleado";

export interface AsistenciaModel{
    fecha: Date,
    horaEntrada: string,
    horaSalida: string,
    empleado : Empleado
}