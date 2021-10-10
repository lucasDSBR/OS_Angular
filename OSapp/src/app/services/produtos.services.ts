import { Http, Response } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Produtos } from "../shared/produtos.model";
import { URL_API_PRODUTOS } from "../api/app.api";
@Injectable()

export class ProdutosServices {

    private url_api = URL_API_PRODUTOS;


    constructor(private http: Http){

    }
    //Buscar todos os produtos
    public getAllProdutos(): Promise<Produtos[]>{
        return this.http.get(this.url_api)
        .toPromise()
        .then((resposta: Response) => resposta.json())    
    }
    //Buscar produtos por ID
    public getIdProduto(id: number): Promise<Produtos[]>{
        return this.http.get(`${this.url_api}?id=${id}`)
        .toPromise()
        .then((resposta: Response) => resposta.json().shift());
    }

    public buscarProdutos(termo: string): Observable<Produtos[]>{
        return this.http.get(`${this.url_api}?nome_like=${termo}`)
        .retry(5)
            .map((resposta: Response) => resposta.json());

    }
    
}
