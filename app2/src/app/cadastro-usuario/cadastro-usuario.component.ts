import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../services/usuarios.services';
import { CadastroUsuario } from '../shared/cadastro-usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  providers: [ UsuariosService ]
})
export class CadastroUsuarioComponent implements OnInit {
  @ViewChild('formulario') public formulario: NgForm

  constructor(
    private cadastroUsuario: UsuariosService
  ){

  }
  ngOnInit() {
    
  }
  public confirmarCadastro(): void{
    let data: CadastroUsuario = new CadastroUsuario(
      null,
      this.formulario.form.value.rua,
      this.formulario.form.value.nome,
      this.formulario.form.value.usuario,
      this.formulario.form.value.cep,
      this.formulario.form.value.cidade,
      this.formulario.form.value.email,
      this.formulario.form.value.senha,
      this.formulario.form.value.ativo
      )
    this.cadastroUsuario.postUsuario(data).subscribe((response: any) => console.log(response));
  }

}
