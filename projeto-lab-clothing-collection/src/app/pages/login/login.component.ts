import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailPattern: string =
    '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+).(.[a-z]{2,3})$';
  senhaPattern: string = '(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8}';
  exibirMsg: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: UsuarioService
  ) {}
  ngOnInit(): void {
    this.newForm();
    this.criarLocalStorage(false);
  }
  newForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(this.emailPattern),
        ],
      ],
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

  criarLocalStorage(status: boolean) {
    localStorage.setItem('logged', `${status}`);
  }
  alert() {
    this.exibirMsg = !this.exibirMsg;
  }

  login() {
    this.service.acessarUsuarios().subscribe(
      (usuarios) => {
        const usuario = usuarios.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.senha === this.loginForm.value.senha
          );
        });
        if (usuario) {
          this.criarLocalStorage(true);
          this.router.navigate(['/dashboard']);
        } else {
          this.alert();
          this.criarLocalStorage(false);
        }
      },
      (err) => {
        this.alert();
        alert('Algo está errado!');
        this.criarLocalStorage(false);
      }
    );
  }
}
