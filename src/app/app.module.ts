import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './_guards/index';
import { DataService } from './shared/api.service';

 // Import components
import {
  HeaderComponent,
  SidebarComponent 
} from './components';

import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { LayoutComponent } from './components/app-layout/layout.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { Configuration } from './shared/app.constants';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {ToastOptions} from 'ng2-toastr';

import { ToasterOption } from './shared/toast-option';


const APP_COMPONENTS = [
  HeaderComponent,
  SidebarComponent 
]



@NgModule({
  declarations: [
    AppComponent,
    APP_COMPONENTS,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    RegistrationComponent
    
   ],
  imports: [
    BrowserModule,
     MaterialModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
     BrowserAnimationsModule,
     ToastModule.forRoot()
  ],
  providers: [ 
    {provide: ToastOptions, useClass: ToasterOption},
    AuthGuard,
    DataService,
    Configuration,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
