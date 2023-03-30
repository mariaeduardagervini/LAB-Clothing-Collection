import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/newColecao';

@Component({
  selector: 'app-editar-colecao',
  templateUrl: './editar-colecao.component.html',
  styleUrls: ['./editar-colecao.component.css'],
})
export class EditarColecaoComponent implements OnInit {
  changeColecao: Colecao = new Colecao();
  editarColecaoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.editarColecao(new Colecao());
  }
  editarColecao(editarColecao: Colecao) {
    this.editarColecaoForm = this.formBuilder.group({
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
    });
  }
  salvarColecao = {
    titulo: 'Salvar',
    styles: {
      width: '180px',
      position: 'absolute',
      top: '',
      left: '',
      margin: '405px 5px 15px 950px',
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
      margin: '405px 5px 15px 720px',
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
      margin: '405px 5px 15px 370px',
      border: 'none',
    },
  };

  onSubmit() {
    this.router.navigate(['/lista-colecoes']);
  }
  cancelar() {
    this.router.navigate(['/lista-colecoes']);
  }
  excluir() {
    this.router.navigate(['/lista-colecoes']);
  }
}
