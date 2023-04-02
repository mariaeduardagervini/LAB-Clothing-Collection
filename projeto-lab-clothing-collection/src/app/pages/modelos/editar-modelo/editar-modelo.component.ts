import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css'],
})
export class EditarModeloComponent implements OnInit {
  listaColecoes: Colecao[] = [];

  modelo: Modelo = {
    id: 0,
    nome: '',
    responsavel: '',
    tipo: '',
    colecaoId: '',
    colecaoNome: '',
    bordado: true,
    estampa: true,
  };

  editarModeloForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ModelosService,
    private serviceColecoes: ColecoesService
  ) {}

  ngOnInit(): void {
    this.editarModelo();
    this.listarColecoes();
  }
  editarModelo() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.searchId(parseInt(id!)).subscribe((modelo) => {
      this.editarModeloForm = this.formBuilder.group({
        id: [modelo.id],
        nome: [
          modelo.nome,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        tipo: [
          modelo.tipo,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        colecaoId: [
          modelo.colecaoId,
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        responsavel: [
          modelo.responsavel,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        bordado: [modelo.bordado, Validators.required],
        estampa: [modelo.estampa, Validators.required],
        colecaoNome: [modelo.colecaoNome, Validators.required]
      });
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
      margin: '405px 5px 15px 30%',
      border: 'none',
    },
  };
  listarColecoes() {
    this.serviceColecoes.acessarColecoes().subscribe((listarColecoes) => {
      this.listaColecoes = listarColecoes;
    });
  }

  onSubmit() {
    let colecao = this.listaColecoes.find(e => e.id === this.editarModeloForm.value.colecaoId);
    this.editarModeloForm.value.colecaoNome = colecao?.nome;
    this.service.editar(this.editarModeloForm.value).subscribe(() => {
      this.router.navigate(['/lista-modelos']);
    });
  }
  cancelar() {
    this.router.navigate(['/lista-modelos']);
  }
  excluir(): void {
    const newId = this.activatedRoute.snapshot.paramMap.get('id');
    this.router.navigate([`/excluir-modelo/${newId}`]);
  }
}
