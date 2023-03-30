export interface IColecao {
  id?: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca: string;
  orçamento: string;
}
export class Colecao implements IColecao {
  id?: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  orçamento!: string;
}
