export class CadastroUsuario {
    constructor(
        public id: number,
        public rua: string,
        public nome: string,
        public usuario: string,
        public senha: string,
        public cep: string,
        public email: string,
        public cidade: string,
        public ativo: boolean,
    ){}

}