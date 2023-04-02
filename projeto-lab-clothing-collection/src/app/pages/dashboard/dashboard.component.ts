import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listaColecoes: Colecao[] = [];
  cards = [
    { titulo: 'Coleções', valor: 0 },
    { titulo: 'Modelos', valor: 0 },
    {
      titulo: 'Orçamento Médio (R$)',
      valor: 0,
      styles: {
        backgroundImage: 'url(../../../assets/icone-orcamento.png)',
        position: 'absolute',
        backgroundPosition: '10px 45px',
        backgroundRepeat: 'no-repeat',
      },
    },
  ];
  constructor(private service: ColecoesService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar() {
    this.service.acessarColecoes().subscribe((listaColecoes) => {
      this.listaColecoes = listaColecoes;
    });
  }
}
