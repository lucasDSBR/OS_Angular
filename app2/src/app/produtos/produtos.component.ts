import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosServices } from 'app/services/produtos.services';
import { Produtos } from '../shared/produtos.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [ProdutosServices]
})
export class ProdutosComponent implements OnInit, OnDestroy {

  public produtoBusca: Observable<Produtos[]>

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
  }


  public pesquisaProduto(termoDaBusca: string): void{
    this.produtoBusca = this.produtosService.buscarProdutos(termoDaBusca);
    this.produtoBusca.subscribe((produto: Produtos[]) => this.produtos = produto,
    (error: any) => console.log("Erro status: "+error.status),
    () => console.log("Flúxo de eventos completo")
    )
  }

  ngOnDestroy(){

  }
}
