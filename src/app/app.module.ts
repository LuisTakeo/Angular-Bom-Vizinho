import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginVoluntarioComponent } from './pages/voluntario/login-voluntario/login-voluntario.component';
import { HomeVoluntarioComponent } from './pages/voluntario/home-voluntario/home-voluntario.component';
import { CadastrarVoluntarioComponent } from './pages/voluntario/login/cadastrar-voluntario/cadastrar-voluntario.component';
import { CadastrarIdosoComponent } from './pages/idoso/login/cadastrar-idoso/cadastrar-idoso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LoginVoluntarioComponent,
    HomeVoluntarioComponent,
    CadastrarVoluntarioComponent,
    CadastrarIdosoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
