import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/models/modelo';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css'],
})
export class EditarModeloComponent implements OnInit {
  modelo: Modelo = {
    id: 0,
    nome: '',
    responsavel: '',
    tipo: '',
    colecao: '',
    bordado: false,
    estampa: false,
  };

  editarModeloForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.editarModelo(new Modelo());
  }
  editarModelo(editarModelo: Modelo) {
    this.editarModeloForm = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      tipo: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      colecao: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      responsavel: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      bordado: ['', Validators.required],
      estampa: ['', Validators.required],
    });
  }
  salvarModelo = {
    titulo: 'Salvar',
    styles: {
      width: '180px',
      position: 'absolute',
      top: '',
      left: '',
      margin: '405px 5px 15px 75%',
    },
  };
  cancelarModelo = {
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
  excluirModelo = {
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
    this.router.navigate(['/lista-modelos']);
  }
  cancelar() {
    this.router.navigate(['/lista-modelos']);
  }
  excluir() {
    this.router.navigate(['/lista-modelos']);
  }
}
