import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
//import { FormsModule } from '@angular/forms';
//iMPOPRTANDO ROTAS
import { ROUTES } from './app.routes';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TopoComponent } from './pages/topo/topo.component';
import { HomeComponent } from './pages/home/home.component';
import { RodapeComponent } from './pages/rodape/rodape.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosDetalhesComponent } from './pages/produtos/produtos-detalhes/produtos-detalhes.component';
import { UsuariosDetalhesComponent } from './pages/usuarios/usuarios-detalhes/usuarios-detalhes.component';

import { DescricaoReduzida } from './util/descricao-reduzida.pipe';
import { CadastroUsuarioComponent } from './pages/usuarios/cadastro-usuario/cadastro-usuario.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { CadastroClientesComponent } from './pages/clientes/cadastro-clientes/cadastro-clientes.component';
import { ClientesDetalhesComponent } from './pages/clientes/clientes-detalhes/clientes-detalhes.component';
registerLocaleData(localePt);
PlotlyModule.plotlyjs = PlotlyJS;

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
    CadastroUsuarioComponent,
    ClientesComponent,
    CadastroClientesComponent,
    ClientesDetalhesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    //FormsModule
    ReactiveFormsModule,
    CommonModule,
    PlotlyModule
    
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
