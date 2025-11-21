import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-list',
  standalone: false,
  templateUrl: './plan-list.html',
  styleUrl: './plan-list.css',
})
export class PlanList {
misPlanes = [
  {
    titulo: "Ir a cenar fuera",
    descripcion: "Quedada en pareja a restaurante",
    lugar: "Sevilla",
  },
  {
    titulo: "Ir al cine",
    descripcion: "Ver una pelicula de miedo",
    lugar: "Dos hermanas"

  }
]
}
