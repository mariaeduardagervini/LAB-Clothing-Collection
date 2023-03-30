import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-colecoes',
  templateUrl: './lista-colecoes.component.html',
  styleUrls: ['./lista-colecoes.component.css'],
})
export class ListaColecoesComponent {
  constructor(private router: Router) {}

  criarColecao() {
    this.router.navigate(['/criar-colecao']);
  }
  criar = {
    titulo: 'Criar Coleção',
    styles: {
      width: '220px',
      position: 'absolute',
      top: '35px',
      left: '75%',
      margin: '-3% -4% -3% -3%',
    },
  };
}
