import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  criarConta = {
    titulo: 'Criar Conta',
  };
  mostraTela: boolean = true;

  fazerCadastro() {
    if (this.mostraTela) {
      this.mostraTela = false;
    } else {
      this.mostraTela = true;
    }
  }

  irLogin = {
    titulo: 'Ir para login',
  };
}
