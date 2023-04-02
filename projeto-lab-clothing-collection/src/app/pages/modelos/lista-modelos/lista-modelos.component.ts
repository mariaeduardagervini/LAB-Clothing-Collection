import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css'],
})
export class ListaModelosComponent implements OnInit {
  listaColecoes: Colecao[] = [];
  listaModelos: Modelo[] = [];

  constructor(
    private service: ModelosService,
    private router: Router,
    private serviceColecoes: ColecoesService
  ) {}

  ngOnInit(): void {
    this.listar();
    this.listarColecoes();
  }
  listar() {
    this.service.acessarModelos().subscribe((listaModelos) => {
      this.listaModelos = listaModelos;
    });
  }

  listarColecoes() {
    this.serviceColecoes.acessarColecoes().subscribe((listarColecoes) => {
      this.listaColecoes = listarColecoes;
      const nomes = this.listaColecoes.map((i) => i.nome);
      console.log(nomes);
    });
  }

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
