import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(private router: Router) { }
  ngOnInit() {
  }

  doLogin(){
    var username = this.user.username;
    var password = this.user.password;
    if(username=='admin' && password=='admin'){
         var user = 'sandeepjadhav';
         localStorage.setItem('currentUser', JSON.stringify(user));
         this.router.navigate(['/home']);

    }else{
        alert("invalid");
    }
  }





}
