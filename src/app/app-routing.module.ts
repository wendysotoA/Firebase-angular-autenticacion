import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckloginGuard } from './shared/guards/checklogin.guard';
import { LogoutGuard } from './shared/guards/logout.guard';


const routes: Routes = [
  {path: '',    component: LoginComponent},

  {path: 'login',    component: LoginComponent,},

  {path: '#',    component: LoginComponent},
  {path: 'register',    component: RegisterComponent},
  {path: 'dashboard',    component: DashboardComponent, canActivate: [CheckloginGuard]},

  {path: 'forgot',    component: ForgotPasswordComponent,canActivate: [LogoutGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
