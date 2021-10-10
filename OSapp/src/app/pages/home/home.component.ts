import { Component, OnInit } from '@angular/core';

import { Oferta } from '../../shared/oferta.model';
import { ProdutosServices } from '../../services/produtos.services';
import { Produtos } from '../../shared/produtos.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProdutosServices] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];
  public produtos: Produtos[];
  constructor(
    private produtosServices: ProdutosServices
    
  ) { }

  ngOnInit() {
    
    this.produtosServices.getAllProdutos() 
    .then((produtos: Produtos[]) => {
      this.produtos = produtos;
      console.log(this.produtos)
    })    
    .catch((err: any) => {
      console.log(err);
    });

  }

}
