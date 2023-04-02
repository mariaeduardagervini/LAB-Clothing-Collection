import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Modelo } from 'src/app/models/modelo';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-excluir-modelo',
  templateUrl: './excluir-modelo.component.html',
  styleUrls: ['./excluir-modelo.component.css'],
})
export class ExcluirModeloComponent implements OnInit {
  modelo: Modelo = {
    id: 0,
    nome: '',
    responsavel: '',
    tipo: '',
    colecaoId: '',
    bordado: true,
    estampa: true,
    colecaoNome: '',
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ModelosService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((modelo) => {
      this.modelo = modelo;
    });
  }
  excluirModelo() {
    if (this.modelo.id) {
      this.service.excluir(this.modelo.id).subscribe(() => {
        this.router.navigate(['/lista-modelos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/lista-modelos']);
  }
}
