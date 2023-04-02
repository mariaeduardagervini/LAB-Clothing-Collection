import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { ColecoesService } from 'src/app/services/colecoes.service';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.css'],
})
export class EditarColecaoComponent implements OnInit {
  colecao: Colecao = {
    id: 0,
    nome: '',
    responsavel: '',
    estacao: '',
    marca: '',
    modelos: [],
    orcamento: 0,
    anoLancamento: 0,
  };

  editarColecaoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ColecoesService
  ) {}

  ngOnInit(): void {
    this.editarColecao();
  }
  editarColecao() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((colecao) => {
      this.editarColecaoForm = this.formBuilder.group({
        id: [colecao.id],
        nome: [
          colecao.nome,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        responsavel: [
          colecao.responsavel,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        estacao: [
          colecao.estacao,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        marca: [
          colecao.marca,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        modelos: [colecao.modelos],
        orcamento: [colecao.orcamento, Validators.required],
        anoLancamento: [colecao.anoLancamento, Validators.required],
      });
    });
  }
  salvarColecao = {
    titulo: 'Salvar',
    styles: {
      width: '180px',
      position: 'absolute',
      top: '',
      left: '',
      margin: '405px 5px 15px 75%',
    },
  };
  cancelarColecao = {
    titulo: 'Cancelar',
    styles: {
      color: '#A098AE',
      backgroundColor: '#EBEBEB',
      width: '180px',
      position: 'absolute',
      top: '',
      left: '',
      margin: '405px 5px 15px 60%',
      border: 'none',
    },
  };
  excluirColecao = {
    titulo: 'Excluir',
    styles: {
      color: '#FFFFFF',
      backgroundColor: '#FF4141',
      width: '180px',
      position: 'absolute',
      top: '',
      left: '',
      margin: '405px 5px 15px 30%',
      border: 'none',
    },
  };

  onSubmit() {
    this.service.editar(this.editarColecaoForm.value).subscribe(() => {
      this.router.navigate(['/lista-colecoes']);
    });
  }

  cancelar() {
    this.router.navigate(['/lista-colecoes']);
  }

  excluir(): void {
    const newId = this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate([`/excluir-colecao/${newId}`]);
  }
}
