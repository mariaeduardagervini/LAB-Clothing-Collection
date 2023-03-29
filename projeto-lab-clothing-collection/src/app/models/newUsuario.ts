export interface INewUsuario {
  id?: number;
  nome: string;
  empresa: string;
  cnpj: string;
  email: string;
  senha: string;
}
export class NewUsuario implements INewUsuario {
  id?: number;
  nome!: string;
  empresa!: string;
  cnpj!: string;
  email!: string;
  senha!: string;
}
