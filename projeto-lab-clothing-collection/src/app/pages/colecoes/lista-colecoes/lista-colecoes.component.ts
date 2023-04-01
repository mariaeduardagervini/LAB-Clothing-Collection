import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-lista-colecoes',
  templateUrl: './lista-colecoes.component.html',
  styleUrls: ['./lista-colecoes.component.css'],
})
export class ListaColecoesComponent implements OnInit {
  listaColecoes: Colecao[] = [];
  constructor(private service: ColecoesService, private router: Router) {}
  ngOnInit(): void {
    this.listar();
  }
  listar() {
    this.service.acessarColecoes().subscribe((listaColecoes) => {
      this.listaColecoes = listaColecoes;
    });
  }
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
