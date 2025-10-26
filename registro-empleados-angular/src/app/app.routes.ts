import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { LstEmpleadoComponent } from './pages/empleado/lst-empleado/lst-empleado.component';
import { DetalleAsistenciaComponent } from './pages/asistencia/detalle-asistencia/detalle-asistencia.component';
import { LstAsistenciaComponent } from './pages/asistencia/lst-asistencia/lst-asistencia.component';
import { DetalleEmpleadoComponent } from './pages/empleado/detalle-empleado/detalle-empleado.component';
import { LsthoyComponent } from './pages/asistencia/lsthoy/lsthoy.component';

export const routes: Routes = [
    {path:"pages", component:PagesComponent,
        children:[
            {path:"empleados",component:LstEmpleadoComponent},
            {path:"empleados/:id",component:DetalleEmpleadoComponent},
            {path:"asistencias-hoy/:id",component:DetalleAsistenciaComponent},
            {path:"asistencias",component:LstAsistenciaComponent},
            {path:"asistencias-hoy",component:LsthoyComponent}
        ]
     },
     {path:"", redirectTo:"pages", pathMatch:"full"}
 
];
