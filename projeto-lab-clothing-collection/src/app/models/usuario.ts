export interface IUsuario {
  id?: number;
  nome?: string;
  empresa?: string;
  cnpj?: number;
  email: string;
  senha: string;
}
export class Usuario implements IUsuario {
  id?: number;
  nome!: string;
  empresa!: string;
  cnpj!: number;
  email!: string;
  senha!: string;
}
