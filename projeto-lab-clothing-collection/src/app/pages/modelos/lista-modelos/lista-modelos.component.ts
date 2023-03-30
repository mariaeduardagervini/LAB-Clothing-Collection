import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css'],
})
export class ListaModelosComponent {
  constructor(private router: Router) {}

  criarModelo() {
    this.router.navigate(['/criar-modelo']);
  }
  criar = {
    titulo: 'Criar Modelo',
    styles: {
      width: '220px',
      position: 'absolute',
      top: '35px',
      left: '75%',
      margin: '-3% -4% -3% -3%',
    },
  };
}
