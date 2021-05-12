import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';


import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { CheckloginGuard } from './shared/guards/checklogin.guard';
import { LogoutGuard } from './shared/guards/logout.guard';


const routes: Routes = [
  {path: '', redirectTo:'/login',pathMatch:'full'},

  {path: 'login',    component: LoginComponent,},

  {path: '#',    component: DashboardComponent},
  {path: 'register',    component: RegisterComponent},

{ path:'', component:PagesComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      { path: 'list', loadChildren: () => import('./pages/proyectos/list-project/list-project.module').then(m => m.ListProjectModule) },
  { path: 'new', loadChildren: () => import('./pages/proyectos/new-project/new-project.module').then(m => m.NewProjectModule) },
  { path: 'details', loadChildren: () => import('./pages/proyectos/details/details.module').then(m => m.DetailsModule) },
  { path: 'edit', loadChildren: () => import('./pages/proyectos/edit/edit.module').then(m => m.EditModule) },

    ]},


  {path: 'forgot',    component: ForgotPasswordComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
