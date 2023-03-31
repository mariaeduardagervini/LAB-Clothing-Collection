import { UsuarioService } from './../../services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  emailPattern: string =
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$';
  senhaPattern: string = '(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8}';
  mostraTela: boolean = true;
  cadastroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.newCadastroForm();
  }

  newCadastroForm() {
    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      empresa: [, [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.maxLength(14)]],
      email: ['', [Validators.required]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.senhaPattern),
        ],
      ],
    });
  }
  alert() {
    this.mostraTela = !this.mostraTela;
  }

  fazerCadastro() {
    if (this.cadastroForm.valid) {
      this.service.cadastrarUsuarios(this.cadastroForm.value).subscribe(() => {
        this.alert();
      });
    } else {
      this.mostraTela;
    }
  }
  criarConta = {
    titulo: 'Criar Conta',
  };
  irLogin = {
    titulo: 'Ir para login',
  };
}
