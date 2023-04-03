import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-lista-colecoes',
  templateUrl: './lista-colecoes.component.html',
  styleUrls: ['./lista-colecoes.component.css'],
})
export class ListaColecoesComponent implements OnInit {
  listColecoes: Colecao[] = [];
  listModelos: Modelo[] = []

  constructor(private service: ColecoesService, private router: Router, private serviceModelos: ModelosService) {}

  ngOnInit(): void {
    this.listarModelos()
    this.listar();
  }
  listar() {
    this.service.acessarColecoes().subscribe((listaColecoes) => {
      this.listColecoes = listaColecoes;
      this.listColecoes.forEach(e => {
      let count =  this.listModelos.filter(x => parseInt(x.colecaoId) === e.id).length
      e.qtdModelos = count

    });
   
   })
  }


  listarModelos() {
    this.serviceModelos.acessarModelos().subscribe((listaModelos) => {
      this.listModelos = listaModelos;

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
