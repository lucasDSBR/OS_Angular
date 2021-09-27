import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Usuarios } from '../shared/usuarios.model';

import { URL_API_USUARIOS } from '../api/app.api';

@Injectable()
export class UsuariosService {
    private url_api = URL_API_USUARIOS;

    constructor(private http: Http){
        
    }
    //Buscar todos os usuarios:
    public getUsuarios(): Promise<Usuarios[]>{
        return this.http.get(this.url_api)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }
    //Buscar usuarios por situação:
    public getUsuariosPorSituacao(situacao: boolean): Promise<Usuarios[]>{
        return this.http.get(`${this.url_api}?ativo=${situacao}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }
    //Buscar usuarios por ID:
    public getUsuariosPorId(id: number): Promise<Usuarios[]>{
        return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json().shift());
    }
}