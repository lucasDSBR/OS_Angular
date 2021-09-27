import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosServices } from 'app/services/produtos.services';
import { Produtos } from '../shared/produtos.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/Rx';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutosServices]
})
export class ProdutosComponent implements OnInit, OnDestroy {

  public produtoBusca: Observable<Produtos[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()
  public produtosSeach: Produtos[]
  public produtos: Produtos[]


  constructor(
    private produtosService: ProdutosServices
  ) { }

  ngOnInit() {
    this.produtosService.getAllProdutos()
    .then((produtos : Produtos[]) => {
      this.produtos = produtos;
    })
    .catch((error : Error) => {
      console.log(error.message)
    })

    //Lógica para realizar a busca de produtos na barra de pesquisa
    this.produtoBusca = this.subjectPesquisa
      .debounceTime(1000) // executa a ação do switchmap depos de 1s
      .distinctUntilChanged() // Para fazer pesquisas distintas
      .switchMap((termo) => {
        if(termo.trim() === ""){
          return Observable.of<Produtos[]>([])
        }
        return this.produtosService.buscarProdutos(termo)
      })
      .catch((err: any) =>{
        console.log(err);
        return err;
      })

    this.produtoBusca.subscribe((produtos: Produtos[]) => {
      
      this.produtosSeach = produtos;
      console.log(produtos)
    })
  }


  public pesquisaProduto(termoDaBusca: string): void{
    console.log(termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }

  ngOnDestroy(){

  }
}
