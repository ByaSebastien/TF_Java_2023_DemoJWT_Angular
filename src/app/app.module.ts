import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './compenents/register/register.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './compenents/home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './compenents/login/login.component';
import { BookIndexComponent } from './compenents/book-index/book-index.component';
import { BookAddComponent } from './compenents/book-add/book-add.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    BookIndexComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
