import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientesService } from '../../../services/clientes.services';
import { CadastroCliente } from '../../../shared/cadastro-cliente.model';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css'],
  providers: [ClientesService]
})
export class CadastroClientesComponent implements OnInit {
  //@ViewChild('formulario') public formulario: NgForm
  private formulario: FormGroup = new FormGroup({
    'Rua': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Nome': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    'Senha': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    'Cep': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
    'Email': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Cidade': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Situacao': new FormControl(null, [Validators.required]),
    'Complemento': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Genero': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Bairro': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Coordenadas': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Cpf': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'Geo': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)])
  });

  constructor(
    private cadastroCliente: ClientesService
  ){

  }
  ngOnInit() {
    
  }
  public confirmarCadastro(): void{
    if(this.formulario.status === "INVALID"){
      console.log("formulario invalido")
      this.formulario.get('Rua').markAsTouched()
      this.formulario.get('Nome').markAsTouched()
      this.formulario.get('Senha').markAsTouched()
      this.formulario.get('Cep').markAsTouched()
      this.formulario.get('Email').markAsTouched()
      this.formulario.get('Cidade').markAsTouched()
      this.formulario.get('Situacao').markAsTouched()
      this.formulario.get('Coordenadas').markAsTouched()
      this.formulario.get('Bairro').markAsTouched()
      this.formulario.get('Complemento').markAsTouched()
      this.formulario.get('Cpf').markAsTouched()
      this.formulario.get('Geo').markAsTouched()

    }else{
      let dataUser: CadastroCliente = new CadastroCliente(
        null,
        this.formulario.value.Nome,
        this.formulario.value.Email,
        this.formulario.value.Senha,
        this.formulario.value.Cep,
        this.formulario.value.Rua,
        this.formulario.value.Bairro,
        this.formulario.value.Cidade,
        this.formulario.value.Coordenadas,
        this.formulario.value.Complemento,
        this.formulario.value.Situacao,
        this.formulario.value.Genero
      )
      //console.log(dataUser)
      this.cadastroCliente.postCliente(dataUser)
      .subscribe((dataCadastro: any) => {
        console.log(dataCadastro)
      })
    }
  }

}