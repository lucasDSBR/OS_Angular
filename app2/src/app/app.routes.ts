import { Routes } from "@angular/router";

//Componentes para rotas
import { HomeComponent } from "./home/home.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { ProdutosComponent } from "./produtos/produtos.component";
import { ProdutosDetalhesComponent } from "./produtos-detalhes/produtos-detalhes.component";
import { UsuariosDetalhesComponent } from "./usuarios-detalhes/usuarios-detalhes.component";

export const ROUTES: Routes = [
    {path: "", component: HomeComponent},
    {path: "usuarios", component: UsuariosComponent},
    {path: "usuarios-detalhes", component: UsuariosComponent},
    {path: "usuarios-detalhes/:id", component: UsuariosDetalhesComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "produtos-detalhes", component: ProdutosComponent},
    {path: "produtos-detalhes/:id", component: ProdutosDetalhesComponent}
]