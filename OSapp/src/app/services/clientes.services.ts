import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Clientes } from '../shared/clientes.model';

import { URL_API_CLIENTES } from '../api/app.api';
import { CadastroCliente } from '../shared/cadastro-cliente.model'
@Injectable()
export class ClientesService{
    private url_api = URL_API_CLIENTES;

    constructor(private http: Http){
        
    }
    //Buscar todos os usuarios:
    public getClientes(): Promise<Clientes[]>{
        return this.http.get(this.url_api)
        .toPromise()
        .then((resposta: any) => resposta.json())
    }

    public deleteClienteId(id: number): Promise<Clientes[]>{
        console.log("Chegou, id:"+id);
        return this.http.delete(`${this.url_api}/${id}`)
        .toPromise()
        .then((resposta: any) => resposta.json().shift());
        
    }

    public postCliente(cadastroCliente: CadastroCliente): Observable<any>{
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(
            this.url_api,
            JSON.stringify(cadastroCliente),
            new RequestOptions({headers: headers})
            ).map((response: Response) => response.json)
    }
}