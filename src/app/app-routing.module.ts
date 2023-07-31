import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistrosComponent } from './components/registros/registros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'login', component:LoginComponent},
  {path:'ingresar', component:IngresarComponent},
  {path:'registro', component:RegistroComponent},
  {path:'registros', component:RegistrosComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
