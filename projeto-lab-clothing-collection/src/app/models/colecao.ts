export interface IColecao {
  id?: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca?: string;
  qtdModelos: number;
  orcamento: number;
}
export class Colecao implements IColecao {
  id?: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  qtdModelos!: number;
  orcamento!: number;
}
