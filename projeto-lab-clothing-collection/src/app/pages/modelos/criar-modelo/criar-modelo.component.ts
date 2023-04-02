import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.css'],
})
export class CriarModeloComponent implements OnInit {
  newModelo: Modelo = new Modelo();
  cadastroModeloForm!: FormGroup;
  listaColecoes: Colecao[] = [];
  newColecao: Colecao = new Colecao();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: ModelosService,
    private serviceColecoes: ColecoesService
  ) {}

  ngOnInit(): void {
    this.criarModelo(new Modelo());
    this.listarColecoes();
  }
  criarModelo(newModelo: Modelo) {
    this.cadastroModeloForm = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      tipo: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      colecaoId: [
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
  listarColecoes() {
    this.serviceColecoes.acessarColecoes().subscribe((listarColecoes) => {
      this.listaColecoes = listarColecoes;
    });
  }

  onSubmit() {
    this.listarColecoes.forEach((): Colecao => {
      return this.newColecao;
    });
    var colecaoIdentify;
    for (let colecao2 in this.listarColecoes) {
      if (colecao2.nome === this.cadastroModeloForm.value.colecaoId) {
        colecaoIdentify = colecao2.id;
      }
    }
    this.serviceColecoes
      .searchId(this.cadastroModeloForm.value.colecaoId)
      .subscribe((colecao) => {
        this.newColecao = colecao;
      });
    this.newColecao.modelos.push(this.cadastroModeloForm.value);
    this.serviceColecoes.editar(this.newColecao);

    // this.service.criar(this.cadastroModeloForm.value).subscribe(() => {
    //  this.router.navigate(['/lista-modelos']);
    //  });
  }
  cancelar() {
    this.router.navigate(['/lista-modelos']);
  }
}
