import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Pedidos } from '../shared/pedidos.model';

import { URL_API_PEDIDOS } from '../api/app.api';

@Injectable()
export class PedidosService {
    private url_api = URL_API_PEDIDOS;

    constructor(
        private http: Http
    ){}

    public getPedidos(): Promise<Pedidos[]>{
        return this.http.get(this.url_api)
        .toPromise()
        .then((resposta: Response) => resposta.json())
    }
}