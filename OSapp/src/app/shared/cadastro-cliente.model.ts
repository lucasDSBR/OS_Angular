export class CadastroCliente {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public pass: string,
        public cep: number,
        public rua: string,
        public bairro: string,
        public cidade: string,
        public coordenadas: string,
        public complemento: string,
        public situacao: boolean,
        public genero: string
    ){}

}