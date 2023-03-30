import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewColecao } from 'src/app/models/newColecao';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.css'],
})
export class CriarColecaoComponent implements OnInit {
  newColecao: NewColecao = new NewColecao();
  cadastroColecaoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.criarColecao(new NewColecao());
  }
  criarColecao(newColecao: NewColecao) {
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
    });
  }
}
