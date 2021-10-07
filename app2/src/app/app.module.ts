import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//iMPOPRTANDO ROTAS
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { UsuariosDetalhesComponent } from './usuarios-detalhes/usuarios-detalhes.component';

import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    UsuariosComponent,
    ProdutosComponent,
    ProdutosDetalhesComponent,
    UsuariosDetalhesComponent,
    DescricaoReduzida,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-Br'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
