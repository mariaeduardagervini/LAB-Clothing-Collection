import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-excluir-colecao',
  templateUrl: './excluir-colecao.component.html',
  styleUrls: ['./excluir-colecao.component.css'],
})
export class ExcluirColecaoComponent implements OnInit {
  colecao: Colecao = {
    id: 0,
    nome: '',
    responsavel: '',
    estacao: '',
    marca: '',
    qtdModelos: 0,
    orcamento: 0,
    anoLancamento: 0,
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ColecoesService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((colecao) => {
      this.colecao = colecao;
    });
  }
  excluirColecao() {
    if (this.colecao.id) {
      this.service.excluir(this.colecao.id).subscribe(() => {
        this.router.navigate(['/lista-colecoes']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/lista-colecoes']);
  }
}
