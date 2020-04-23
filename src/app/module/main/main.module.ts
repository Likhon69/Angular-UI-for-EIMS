import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from 'src/app/component/home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/Shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
   HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]

})
export class MainModule { }
