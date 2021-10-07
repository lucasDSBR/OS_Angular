import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'app/services/usuarios.services';
import { Usuarios } from '../shared/usuarios.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UsuariosService]
})
export class UsuariosComponent implements OnInit {


  public usuarios: Usuarios[]
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.getUsuarios()
    .then((usuarios: Usuarios[]) => {
      this.usuarios = usuarios;
    })
    .catch((error: any) => {
      console.log(error.message)
    })
  }


  Situcao(){
    let situacao = (<HTMLInputElement>document.getElementById('categoria')).value;
    this.usuariosService.getUsuariosPorSituacao(situacao == '1'? true : false)
    .then((usuarios: Usuarios[]) => {
      this.usuarios = usuarios;
    })
    .catch((error: any) => {
      console.log(error.message)
    })
  }
  excluirUsuario(id: number): void{
    this.usuariosService.deleteUsuarioId(id);
    document.location.reload();
  }



}
