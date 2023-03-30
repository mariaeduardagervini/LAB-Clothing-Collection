export interface IModelo {
  id?: number;
  nome: string;
  responsavel: string;
  tipo: string;
  colecao: string;
  bordado: string;
  estampa: string;
}
export class Modelo implements IModelo {
  id?: number;
  nome!: string;
  responsavel!: string;
  tipo!: string;
  colecao!: string;
  bordado!: string;
  estampa!: string;
}
