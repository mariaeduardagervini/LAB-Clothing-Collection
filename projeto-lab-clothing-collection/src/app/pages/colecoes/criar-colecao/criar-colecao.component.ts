import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Colecao } from 'src/app/models/colecao';
import { Router } from '@angular/router';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Modelo } from 'src/app/models/modelo';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.css'],
})
export class CriarColecaoComponent implements OnInit {
  newColecao: Colecao = new Colecao();
  cadastroColecaoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ColecoesService
  ) {}

  ngOnInit(): void {
    this.criarColecao(new Colecao());
  }
  criarColecao(Colecao: Colecao) {
    this.cadastroColecaoForm = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      responsavel: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      estacao: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      marca: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      orcamento: ['', Validators.required],
      anoLancamento: ['', Validators.required],
      modelos: [new Array<Modelo>()],
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

  onSubmit() {
    this.service.criar(this.cadastroColecaoForm.value).subscribe(() => {
      this.router.navigate(['/lista-colecoes']);
    });
  }
  cancelar() {
    this.router.navigate(['/lista-colecoes']);
  }
}
