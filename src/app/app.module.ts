import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {AngularFireAuthModule} from '@angular/fire/auth';
import{AngularFireModule} from '@angular/fire';
import {environment} from 'src/environments/environment';
import {AngularFirestore} from '@angular/fire/firestore';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';

import { ProjectFormModule } from './shared/components/project-form/project-form.module';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HeaderModule,
    SidebarModule,
    ProjectFormModule,




  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
