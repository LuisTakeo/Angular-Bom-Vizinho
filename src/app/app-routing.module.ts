import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonLoginComponent } from './components/button-login/button-login.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: IndexComponent,
    title: 'Home',
    children: [
      {path: 'login', component: LoginComponent, pathMatch: 'prefix'},
      {path: '', component: ButtonLoginComponent}
    ]
  },
  {
    path: 'home',
    component: HomeComponent
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
