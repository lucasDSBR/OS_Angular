import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosServices } from 'app/services/produtos.services';
import { Produtos } from '../shared/produtos.model';


@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.css'],
  providers: [ProdutosServices]
})
export class ProdutosDetalhesComponent implements OnInit {

  private produto: Produtos[]

  constructor(
    private route: ActivatedRoute,
    private produtosServices: ProdutosServices
  ) { }

  ngOnInit() {
    //console.log("Id do console: "+this.route.snapshot.params['id'])

    this.route.params.subscribe((parametro: any) => {
      this.produtosServices.getIdProduto(parametro.id)
      .then((produto: Produtos[]) => {
        this.produto = produto;
        console.log(this.produto);
      })
      .catch((error: any) => {
        console.log(error.message);
      })
    })
  }

}
