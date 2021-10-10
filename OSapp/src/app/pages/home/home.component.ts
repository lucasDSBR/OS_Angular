import { Component, OnInit } from '@angular/core';

import { Oferta } from '../../shared/oferta.model';
import { ProdutosServices } from '../../services/produtos.services';
import { UsuariosService } from '../../services/usuarios.services';
import { Produtos } from '../../shared/produtos.model';
import { Usuarios } from '../../shared/usuarios.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProdutosServices, UsuariosService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  public usuarios: Usuarios[];
  public produtos: Produtos[];
  constructor(
    private produtosServices: ProdutosServices,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    
    this.produtosServices.getAllProdutos() 
    .then((produtos: Produtos[]) => {
      this.produtos = produtos;
    })    
    .catch((err: any) => {
      //retorno do erro
    });
    this.usuariosService.getUsuarios()
    .then((usuarios: Usuarios[]) => {
      this.usuarios = usuarios;
    })
    .catch((err: any) => {
      //retirno erro
    })
  }

}
