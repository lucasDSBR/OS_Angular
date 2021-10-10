import { Routes } from "@angular/router";

//Componentes para rotas
import { HomeComponent } from "./pages/home/home.component";
import { UsuariosComponent } from "./pages/usuarios/usuarios.component";
import { ProdutosComponent } from "./pages/produtos/produtos.component";
import { ProdutosDetalhesComponent } from "./pages/produtos/produtos-detalhes/produtos-detalhes.component";
import { UsuariosDetalhesComponent } from "./pages/usuarios/usuarios-detalhes/usuarios-detalhes.component";
import { CadastroUsuarioComponent } from "./pages/usuarios/cadastro-usuario/cadastro-usuario.component";

export const ROUTES: Routes = [
    {path: "", component: HomeComponent},
    {path: "usuarios", component: UsuariosComponent},
    {path: "usuarios-detalhes", component: UsuariosComponent},
    {path: "cadastro-usuario", component: CadastroUsuarioComponent},
    {path: "usuarios-detalhes/:id", component: UsuariosDetalhesComponent},
    {path: "produtos", component: ProdutosComponent},
    {path: "produtos-detalhes", component: ProdutosComponent},
    {path: "produtos-detalhes/:id", component: ProdutosDetalhesComponent}

]