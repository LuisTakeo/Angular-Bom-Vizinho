import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeIdosoComponent } from './pages/idoso/home-idoso/home-idoso.component';
import { LoginVoluntarioComponent } from './pages/voluntario/login-voluntario/login-voluntario.component';
import { HomeVoluntarioComponent } from './pages/voluntario/home-voluntario/home-voluntario.component';
import { CadastrarIdosoComponent } from './pages/idoso/login/cadastrar-idoso/cadastrar-idoso.component';
import { CadastrarVoluntarioComponent } from './pages/voluntario/login/cadastrar-voluntario/cadastrar-voluntario.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: IndexComponent,
  },
  {
    path: 'login/idoso',
    component: LoginComponent,
  },
  {
    path: 'login/voluntario',
    component: LoginVoluntarioComponent,
  },
  {
    path: 'cadastrar/idoso',
    component: CadastrarIdosoComponent,
  },
  {
    path: 'cadastrar/voluntario',
    component: CadastrarVoluntarioComponent,
  },
  {
    path: 'idoso/home',
    component: HomeIdosoComponent,
  },
  {
    path: 'voluntario/home',
    component: HomeVoluntarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
