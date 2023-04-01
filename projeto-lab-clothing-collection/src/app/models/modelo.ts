export interface IModelo {
  id?: number;
  nome: string;
  responsavel: string;
  tipo?: string;
  colecaoId: string;
  bordado?: boolean;
  estampa?: boolean;
}
export class Modelo implements IModelo {
  id?: number;
  nome!: string;
  responsavel!: string;
  tipo!: string;
  colecaoId!: string;
  bordado!: boolean;
  estampa!: boolean;
}
