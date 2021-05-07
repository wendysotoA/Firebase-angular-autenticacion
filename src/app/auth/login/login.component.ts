import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado:string;

  myFormUser=new FormGroup({
    usuarioF: new FormControl('',[Validators.required]),
      passwordF: new FormControl('',[Validators.required])

  })

  constructor(public servicesauth:FirebaseauthService, private router:Router, private fAuth:AngularFireAuth) { }

  ngOnInit(): void {
  }

  async loginUser(){

    let {usuarioF,passwordF} = this.myFormUser.value;
    const user = await this.servicesauth.login(usuarioF,passwordF)
    if(user){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.resultado="usuario incorrecto"
      console.log(this.resultado);
    }

  }

  /*loginWithGoogle(){
    this.fAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => this.router.navigate(['/dashboard']));


  }*/

}
