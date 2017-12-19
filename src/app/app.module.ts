import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
 import { AppComponent } from './app.component';
import { MaterialModule } from './app.material';
import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './_guards/index';


 // Import components
import {
  HeaderComponent,
  SidebarComponent 
} from './components';

import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
 
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    AuthGuard,
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
