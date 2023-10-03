import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './compenents/register/register.component';
import { HomeComponent } from './compenents/home/home.component';
import { LoginComponent } from './compenents/login/login.component';
import { BookIndexComponent } from './compenents/book-index/book-index.component';
import { BookAddComponent } from './compenents/book-add/book-add.component';
import { adminGuard } from './shared/admin.guard';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: 'book', component: BookIndexComponent },
  { path: 'book/add', component: BookAddComponent, canActivate: [adminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
