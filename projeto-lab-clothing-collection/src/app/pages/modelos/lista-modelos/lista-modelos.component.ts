import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/models/modelo';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-lista-modelos',
  templateUrl: './lista-modelos.component.html',
  styleUrls: ['./lista-modelos.component.css'],
})
export class ListaModelosComponent implements OnInit {
  listaModelos: Modelo[] = [];

  constructor(private service: ModelosService, private router: Router) {}

  ngOnInit(): void {
    this.listar();
  }
  listar() {
    this.service.acessarModelos().subscribe((listaModelos) => {
      this.listaModelos = listaModelos;
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
