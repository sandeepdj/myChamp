 
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
 import { ExtraOptions, RouterModule, Routes ,CanActivate} from '@angular/router';
import { NgModule } from '@angular/core';


import { AuthGuard } from './_guards/index';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/app-header'
import { LayoutComponent } from './components/app-layout/layout.component';
import { RegistrationComponent } from './views/registration/registration.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
     { path: 'myChamp', component: LayoutComponent,canActivate: [AuthGuard] ,
     children: [
        { path: '', redirectTo: 'Home', pathMatch: 'full' },
        { path: 'Home', component: HomeComponent } ,
        { path: 'Registration', component: RegistrationComponent } 
        ]
    },
    {path: '**', redirectTo: 'Login', pathMatch: 'full'}
  ];


// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}  

 