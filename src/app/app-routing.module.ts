import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';



const routes: Routes = [

{path:'login',component:LoginComponent},
{path:'',redirectTo:'/login',pathMatch:'full'},
{path:'registration',component:RegistrationComponent},

{path:'home',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
