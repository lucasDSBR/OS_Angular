import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.services';
import { CadastroUsuario } from '../../../shared/cadastro-usuario.model';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  providers: [ UsuariosService ]
})
export class CadastroUsuarioComponent implements OnInit {
  //@ViewChild('formulario') public formulario: NgForm
  private formulario: FormGroup = new FormGroup({
    'Rua': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'Usuario': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'Senha': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    'Cep': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    'Email': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Cidade': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Ativo': new FormControl(null, [Validators.required])
  });

  constructor(
    private cadastroUsuario: UsuariosService
  ){

  }
  ngOnInit() {
    
  }
  public confirmarCadastro(): void{
    if(this.formulario.status === "INVALID"){
      console.log("formulario invalido")
      this.formulario.get('Rua').markAsTouched()
      this.formulario.get('Nome').markAsTouched()
      this.formulario.get('Usuario').markAsTouched()
      this.formulario.get('Senha').markAsTouched()
      this.formulario.get('Cep').markAsTouched()
      this.formulario.get('Email').markAsTouched()
      this.formulario.get('Cidade').markAsTouched()
      this.formulario.get('Ativo').markAsTouched()

    }else{
      let dataUser: CadastroUsuario = new CadastroUsuario(
        null, 
        this.formulario.value.Rua, 
        this.formulario.value.Nome, 
        this.formulario.value.Usuario, 
        this.formulario.value.Senha, 
        this.formulario.value.Cep, 
        this.formulario.value.Email, 
        this.formulario.value.Cidade, 
        this.formulario.value.Ativo
      )
      //console.log(dataUser)
      this.cadastroUsuario.postUsuario(dataUser)
      .subscribe((dataCadastro: any) => {
        console.log(dataCadastro)
      })
    }
  }

}
