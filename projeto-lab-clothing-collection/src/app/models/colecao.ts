import { Modelo } from './modelo';

export interface IColecao {
  id?: number;
  nome: string;
  responsavel: string;
  estacao: string;
  marca?: string;
  modelos: Array<Modelo>;
  orcamento: number;
  anoLancamento?: number;
}
export class Colecao implements IColecao {
  id?: number;
  nome!: string;
  responsavel!: string;
  estacao!: string;
  marca!: string;
  modelos!: Array<Modelo>;
  orcamento!: number;
  anoLancamento?: number;
}
