import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {            // 👈 Aquí empieza la clase del componente

  // 🔹 Ejemplo de variable (se puede usar en el HTML)
  isMenuOpen = false;  // Esta variable controlará un menú desplegable (opcional)

  // 🔹 Método para cambiar el estado del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;   // Si está abierto => se cierra / si está cerrado => se abre
  }
}
