import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Usuarios } from '../shared/usuarios.model';
import { CadastroUsuario } from '../shared/cadastro-usuario.model';

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

    public postUsuario(cadastroUsuario: CadastroUsuario): Observable<any>{
        
        let headers: Headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.post(
            this.url_api,
            JSON.stringify(cadastroUsuario),
            new RequestOptions({headers: headers})
            ).map((response: Response) => response.json())
    }
    public deleteUsuarioId(id: number): Promise<Usuarios[]>{
        console.log("Chegou, id:"+id);
        return this.http.delete(`${this.url_api}/${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json().shift());
        
    }
}