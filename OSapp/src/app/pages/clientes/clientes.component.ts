import { Component, OnInit } from '@angular/core';


import { Clientes } from '../../shared/clientes.model';
import { ClientesService } from '../../services/clientes.services';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClientesService]
})
export class ClientesComponent implements OnInit {

  private clientes: Clientes[];
  constructor(
    private clientesServices: ClientesService
  ) { }

  ngOnInit() {
    this.clientesServices.getClientes()
    .then((clientes: Clientes[]) =>{
      this.clientes = clientes;
    })
    .catch((error: any) => {
      console.log(error.message)
    })
  }

  excluirCliente(id: number): void {
    this.clientesServices.deleteClienteId(id)
    document.location.reload();
  }

}
