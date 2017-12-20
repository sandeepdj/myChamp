import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  countires:any;
  constructor(private router: Router,private http: HttpClient) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  
  }
 

  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees(){
    this.http.get<any>('http://localhost:8080/angular4/myChampApi/v1/country').subscribe(
      data => {
        
        this.countires = data.countryData
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
    
  }


}

