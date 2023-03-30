import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ContentComponent } from './layouts/content/content.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { BotaoComponent } from './components/botao/botao.component';
import { FullComponent } from './layouts/full/full.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthUserGuard } from './services/guards/auth-user.guard';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { ListaColecoesComponent } from './pages/lista-colecoes/lista-colecoes.component';
import { CriarColecaoComponent } from './pages/criar-colecao/criar-colecao.component';
import { EditarColecaoComponent } from './pages/editar-colecao/editar-colecao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContentComponent,
    EsqueciSenhaComponent,
    CadastroComponent,
    BotaoComponent,
    FullComponent,
    DashboardComponent,
    MenuComponent,
    HeaderComponent,
    CardComponent,
    ListaColecoesComponent,
    CriarColecaoComponent,
    EditarColecaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthUserGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
