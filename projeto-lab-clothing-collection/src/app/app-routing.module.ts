import { AuthUserGuard } from './services/guards/auth-user.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListaColecoesComponent } from './pages/colecoes/lista-colecoes/lista-colecoes.component';
import { CriarColecaoComponent } from './pages/colecoes/criar-colecao/criar-colecao.component';
import { EditarColecaoComponent } from './pages/colecoes/editar-colecao/editar-colecao.component';
import { ListaModelosComponent } from './pages/modelos/lista-modelos/lista-modelos.component';
import { CriarModeloComponent } from './pages/modelos/criar-modelo/criar-modelo.component';
import { EditarModeloComponent } from './pages/modelos/editar-modelo/editar-modelo.component';
import { ExcluirColecaoComponent } from './pages/colecoes/excluir-colecao/excluir-colecao.component';
import { ExcluirModeloComponent } from './pages/modelos/excluir-modelo/excluir-modelo.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'esqueci-senha', component: EsqueciSenhaComponent },
      { path: 'cadastro', component: CadastroComponent },
    ],
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthUserGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'lista-colecoes', component: ListaColecoesComponent },
      { path: 'criar-colecao', component: CriarColecaoComponent },
      { path: 'editar-colecao/:id', component: EditarColecaoComponent },
      { path: 'excluir-colecao/:id', component: ExcluirColecaoComponent },
      { path: 'lista-modelos', component: ListaModelosComponent },
      { path: 'criar-modelo', component: CriarModeloComponent },
      { path: 'editar-modelo/:id', component: EditarModeloComponent },
      { path: 'excluir-modelo/:id', component: ExcluirModeloComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
