import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterOutlet } from '@angular/router';
import { LstAsistenciaComponent } from './asistencia/lst-asistencia/lst-asistencia.component';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
 
}
