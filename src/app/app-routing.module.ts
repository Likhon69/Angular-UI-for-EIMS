import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { MainComponent } from './module/main/main.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
{
  path:'home',component:MainComponent,
  children:[{
    path:'',component:HomeComponent,canActivate:[AuthGuard]
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
