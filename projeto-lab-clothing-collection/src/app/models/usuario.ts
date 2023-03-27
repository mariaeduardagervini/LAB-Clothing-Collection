export interface IUsuario {
  id?: number;
  email: string;
  senha: string;
}
export class Usuario implements IUsuario {
  id?: number | undefined;
  email!: string;
  senha!: string;
}
