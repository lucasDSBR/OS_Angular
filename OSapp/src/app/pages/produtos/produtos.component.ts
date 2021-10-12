import { Component, OnInit } from '@angular/core';
import { ProdutosServices } from '../../services/produtos.services';
import { Produtos } from '../../shared/produtos.model';

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
export class ProdutosComponent implements OnInit {

  public produtos: Produtos[]


  constructor(
    private produtosService: ProdutosServices
  ) { }

  ngOnInit() {
    this.produtosService.getAllProdutos()
    .then((produtos: Produtos[]) => {
      this.produtos = produtos;
    })
    .catch((error : Error) => {
      console.log(error.message)
    })
  }
  excluirProduto(id: number): void{
    this.produtosService.deletProdutoId(id)
    document.location.reload();
  }
}
