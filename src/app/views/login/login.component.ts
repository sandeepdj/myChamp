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

  scode = [
    {value: 'SP', viewValue: 'SP'},
    {value: 'SG', viewValue: 'SG'}
    
  ];

  selectedCode = 'SP';
  selectedYear = "1718";
  years = [
    {value: '1718', viewValue: '2017-2018'},
    {value: '1617', viewValue: '2016-2017'},
    {value: '1516', viewValue: '2015-2016'}
  ];


  doLogin(){
    var username = this.user.username;
    var password = this.user.password;
    if(username=='admin' && password=='admin'){
         var user ={
           "name":"sandeep Jadhav",
           "mobile":7899551677,
           "City":"bangalore"
         };
         
         localStorage.setItem('currentUser', JSON.stringify(user));
         this.router.navigate(['/myChamp']);

    }else{
        alert("invalid");
    }
  }





}
