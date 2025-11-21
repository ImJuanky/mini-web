import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  standalone: false,
  templateUrl: './plan-card.html',
  styleUrl: './plan-card.css',
})
export class PlanCard {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() lugar: string = '';

  apuntarse() {
    alert(`Te has apuntado a: ${this.titulo}`);
  }
}
