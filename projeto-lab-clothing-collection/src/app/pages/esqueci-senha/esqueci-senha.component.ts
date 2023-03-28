import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css'],
})
export class EsqueciSenhaComponent implements OnInit {
  emailForm!: FormGroup;
  emailPattern: string =
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$';
  mostraTela: boolean = true;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.recuperarSenha();
  }

  recuperarSenha() {
    this.emailForm = this.formBuilder.group({
      loginEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
      ],
    });
  }
  get loginEmail() {
    return this.emailForm.get('loginEmail')?.value;
  }
  enviarRecuperacao() {
    if (this.mostraTela) {
      this.mostraTela = false;
    } else {
      this.mostraTela = true;
    }
  }
  irLogin = {
    titulo: 'Ir para login',
  };
  enviar = {
    titulo: 'Enviar Recuperação',
  };
}
