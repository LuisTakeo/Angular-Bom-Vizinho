import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: IndexComponent,
    title: 'Bom Vizinho',
    children: [
      {path: 'login', component: LoginComponent, pathMatch: 'prefix', title: "Bom Vizinho - Login"},
      {path: 'cadastrar',component: CadastroComponent, pathMatch: 'prefix', title: "Bom Vizinho - Cadastrar"},
      {path: '', component: ButtonLoginComponent}
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Bom Vizinho - Pagina Inicial'
  },

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
