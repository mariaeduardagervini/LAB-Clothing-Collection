import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  loginForm!: FormGroup;
  emailPattern: string =
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$';
  senhaPattern: string = '(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8}';
  listaUsuarios: Usuario[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UsuarioService
  ) {}
  ngOnInit(): void {
    this.newForm();
    this.criarLocalStorage(false);
    this.getListaUsuarios();
  }

  newForm() {
    this.loginForm = this.formBuilder.group({
      loginEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
      ],
      loginSenha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(this.senhaPattern),
        ]),
      ],
    });
  }
  get loginEmail() {
    return this.loginForm.get('loginEmail')?.value;
  }
  get loginSenha() {
    return this.loginForm.get('loginSenha')?.value;
  }
  criarLocalStorage(status: boolean) {
    localStorage.setItem('logged', `${status}`);
  }

  getListaUsuarios() {
    this.service.acessarUsuarios().subscribe((usuarios) => {
      this.listaUsuarios = usuarios;
    });
  }

  validarUsuario() {
    this.listaUsuarios.find((usuario) => {
      if (usuario.email === this.loginEmail.value) {
        this.usuario = usuario;
      }
    });

    if (this.usuario.email === undefined && this.loginEmail.value === null) {
      this.loginEmail.setErrors({ required: true });
      this.loginEmail.markAsTouched();
      return false;
    } else if (
      this.usuario.email === undefined &&
      this.loginEmail.value != null
    ) {
      this.loginEmail.setErrors({ invalid: true });
      this.loginEmail.markAsTouched();
      return false;
    } else {
      return true;
    }
  }

  verificarSenha() {
    if (this.loginSenha.value === null) {
      this.loginSenha.setErrors({ required: true });
      this.loginSenha.markAsTouched();
    } else {
      if (this.usuario.senha === this.loginSenha.value) {
        return true;
      } else {
        this.loginSenha.setErrors({ invalid: true });
        this.loginSenha.markAsTouched();
        return false;
      }
    }
    return false;
  }

  enviarForm() {
    if (this.validarUsuario()) {
      if (this.verificarSenha()) {
        this.criarLocalStorage(true);
        this.router.navigate(['/']);
      } else {
        this.criarLocalStorage(false);
      }
    } else {
      this.criarLocalStorage(false);
    }
  }
}
