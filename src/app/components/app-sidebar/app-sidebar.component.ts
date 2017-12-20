import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { FormsModule } from '@angular/forms';

 


@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList:any;
  data:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.menuListApi();
  }
  menuListApi(){
    this.http.get<any>('http://localhost:8080/angular4/myChampApi/v1/modules').subscribe(
      data => {
        this.menuList = data;
        this.data = this.menuList.data;
        console.log(this.data);
        //console.log(this.data.length);
      },
      err => {
        console.log("Error occured.")
      }
    );
  }
  

}
