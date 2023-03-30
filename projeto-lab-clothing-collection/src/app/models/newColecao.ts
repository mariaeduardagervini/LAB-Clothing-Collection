export interface INewColecao {
  id?: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orçamento: string;
}
export class NewColecao implements INewColecao {
  id?: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  orçamento!: string;
}
