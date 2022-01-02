import { Component, OnInit } from '@angular/core';


import { ProdutosServices } from '../../services/produtos.services';
import { UsuariosService } from '../../services/usuarios.services';
import { PedidosService } from '../../services/pedidos.services';
import { ClientesService } from '../../services/clientes.services';
import { Produtos } from '../../shared/produtos.model';
import { Usuarios } from '../../shared/usuarios.model';
import { Pedidos } from '../../shared/pedidos.model';
import { Clientes } from '../../shared/clientes.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProdutosServices, UsuariosService, PedidosService, ClientesService] //uso dos serviços no Angular
})
export class HomeComponent implements OnInit {

  public usuarios;
  public clientes;
  public produtos;
  public pedidos = 0;
  public pedidosPendentes: number;
  public vendas = 0;
  constructor(
    private clientesServices: ClientesService,
    private produtosServices: ProdutosServices,
    private usuariosService: UsuariosService,
    private pedidosService: PedidosService
  ) { }
  //@ViewChild('meuCanvas')
  ngOnInit() {
    //new Chart(elemento, configs);
    this.clientesServices.getClientes()
    .then((clientes: Clientes[]) => {
      this.clientes = clientes.length;
    })

    this.produtosServices.getAllProdutos() 
    .then((produtos: Produtos[]) => {
      this.produtos = produtos.length;
    })    
    .catch((err: any) => {
      //retorno do erro
    });
    this.usuariosService.getUsuarios()
    .then((usuarios: Usuarios[]) => {
      this.usuarios = usuarios.length;
    })
    .catch((err: any) => {
      //retorno erro
    })
    this.pedidosService.getPedidos()
    .then((pedidosAPI: Pedidos[]) => {
      pedidosAPI.forEach(x => {
        if(x.statusPedido == false){
          this.pedidos++
        }else{
          this.vendas++
        }
      })
    })
    .catch((err: any) => {
      //retorno erro
    })
  }
  public graph = {
        data: [
            { 
              values: [2, 4],
              labels: ['Vendas concretizadas', 'Pedidos pendentes'],
              type: 'pie' },
        ],
        layout: {width: 500, height: 400, title: 'Gráfico de vendas'}
        
      };

      public graph2 = {
        data: [{
          x:['janeiro', 'Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro','Outubro', 'Novembro', 'Dezembro'], 
          y: [2, 130, 32, 1, 1, 2, 100, 3, 4, 4, 5, 300],
          type: 'bar'}
        ],
        layout: {width: 600, height: 400, title: 'Meses que obtiveram mais vendas'}
        
      };

}
