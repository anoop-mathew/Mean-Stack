import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor( private router:Router) { }

  ngOnInit() {
  }

login()
{
  if(this.username=="user" && this.password=="pass")
  {
    this.router.navigate(['home'])
  }
  else
  {
   window.alert("Enter registered username and password")
  }

}

}

