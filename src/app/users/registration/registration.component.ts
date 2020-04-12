import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userDetails;
  constructor(private router:Router,private services:UserService) { }

  ngOnInit() {
    this.services.getUser().subscribe(res=>{
      this.userDetails = res;
      console.log(this.userDetails); 
    },
    err=>{
      console.log(err);
    })
  }
  onLogout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']); 
  }
}
