import { Component, OnInit } from '@angular/core';


import { UsuariosService } from 'app/services/usuarios.services';
import { Usuarios } from 'app/shared/usuarios.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-detalhes',
  templateUrl: './usuarios-detalhes.component.html',
  styleUrls: ['./usuarios-detalhes.component.css'],
  providers: [ UsuariosService ]
})
export class UsuariosDetalhesComponent implements OnInit {


  private senhavisivel = false;
  private usuario: Usuarios[];

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((parametro: any) => {
      this.usuariosService.getUsuariosPorId(parametro.id)
      .then((usuario: Usuarios[]) => {
        this.usuario = usuario;
      })
      .catch((error: any) => {
        console.log(error.message);
      })
    });
  }

  visualizarSenha(){
    this.senhavisivel = true;
  }

}
