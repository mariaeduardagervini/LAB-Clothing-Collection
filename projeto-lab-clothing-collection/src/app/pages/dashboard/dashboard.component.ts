import { Component, OnInit } from '@angular/core';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  listaColecoes: Colecao[] = [];
  listaInteiros: number[] = []
  listModelos: Modelo[] = []
  qtdModelos: number = 0
  qtdColecoes: number = 0
  orcamentoMedio: number = 0

  cards = [
    { titulo: 'Coleções', valor: this.qtdColecoes },
    { titulo: 'Modelos', valor: this.qtdModelos },
    {
      titulo: 'Orçamento Médio (R$)',
      valor: this.orcamentoMedio,
      styles: {
        backgroundImage: 'url(../../../assets/icone-orcamento.png)',
        position: 'absolute',
        backgroundPosition: '10px 45px',
        backgroundRepeat: 'no-repeat',
      },
    },
  ];
  constructor(private service: ColecoesService, private serviceModelos: ModelosService) {}



  ngOnInit(): void {
    
    this.listarModelos();
    this.listar();
    this.countOrcamento() 
    this.countModelos()
    this.countOrcamento()
  }  
 
  listar() {
    this.service.acessarColecoes().subscribe((listaColecoes) => {
      this.listaColecoes = listaColecoes;
      
      this.listaColecoes.sort((a,b) => {
       return b.orcamento - a.orcamento;
      })
      let count = this.listaColecoes.length; 

      do {
        count--
        this.listaColecoes.pop()
      } while(count > 5)   

    this.listaColecoes.forEach(e => {
      let count =  this.listModelos.filter(x => parseInt(x.colecaoId) === e.id).length
      e.qtdModelos = count
    })
    
    })
   
  }

  listarModelos() {
    this.serviceModelos.acessarModelos().subscribe((listaModelos) => {
      this.listModelos = listaModelos;
    });
    
  }
  countModelos() {
    this.qtdModelos = this.listModelos.length
    

  }
  countColecoes() {
    
    this.qtdColecoes = this.listaColecoes.length

  }
  countOrcamento() {
    let soma = 0
   this.listaColecoes.forEach(e => {
    this.listaInteiros.push(e.orcamento)
   })
   this.listaInteiros.forEach(x => {
    soma = soma + x
   })
   this.orcamentoMedio = soma / this.listaColecoes.length
  }
}
