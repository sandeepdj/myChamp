import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';

import { DataService } from '../../shared/api.service';

export class CustomOption extends ToastOptions {
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  public message: string;
  private actionUrl: string;
  patients: any;
 
  constructor(
    private http: HttpClient,
    private _dataService: DataService,
    private toastr: ToastsManager, 
    private _vcr: ViewContainerRef
   ) {
     this.toastr.setRootViewContainerRef(_vcr);
      this.message = 'Hello from HomeComponent constructor';
   }
  ngOnInit() {
    this.getPatients();
  }
 

  getPatients(){
    this._dataService
    .getAll<any>()
    .subscribe(
      data => {
        this.patients = data.pdata;
        this.toastr.success("Success", 'Patient list retrived.');
      },
      err => {
        this.toastr.error('Error logs are here.', 'Error!', {data: {Error: 'Worst error ever'}});
        console.log("Error occured.");
      })
  }

  private showSuccess(){		
      this.toastr.success("Success", 'You are on right track.');
  }

}
