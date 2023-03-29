import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUsuario } from 'src/app/models/newUsuario';

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
  newUsuario: NewUsuario = new NewUsuario();
  cadastroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newCadastroForm(new NewUsuario());
  }
  validaCNPJ(cnpj: string): boolean {
    if (cnpj == null) {
      return false;
    }

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj === '' || cnpj.length !== 14) {
      return false;
    }

    // Elimina CNPJs invalidos conhecidos
    if (
      cnpj === '00000000000000' ||
      cnpj === '11111111111111' ||
      cnpj === '22222222222222' ||
      cnpj === '33333333333333' ||
      cnpj === '44444444444444' ||
      cnpj === '55555555555555' ||
      cnpj === '66666666666666' ||
      cnpj === '77777777777777' ||
      cnpj === '88888888888888' ||
      cnpj === '99999999999999'
    ) {
      return false;
    }

    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(0))) {
      return false;
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != parseInt(digitos.charAt(1))) {
      return false;
    }

    return true;
  }
  conferirCNPJ(input: FormControl) {
    return input.value ? null : { validar: true };
  }

  newCadastroForm(newUsuario: NewUsuario) {
    this.cadastroForm = this.fb.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      empresa: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      cnpj: ['', Validators.required, this.validaCNPJ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
      ],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.senhaPattern),
        ]),
      ],
    });
  }
  fazerCadastro() {
    if (this.mostraTela) {
      this.mostraTela = false;
    } else {
      this.mostraTela = true;
    }
  }
  criarConta = {
    titulo: 'Criar Conta',
  };
  irLogin = {
    titulo: 'Ir para login',
  };
}
