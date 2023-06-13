import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { BigCardIndexComponent } from './components/big-card-index/big-card-index.component';

import { ButtonLoginComponent } from './components/button-login/button-login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    LoginComponent,
    FooterComponent,
    BigCardIndexComponent,
    ButtonLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
