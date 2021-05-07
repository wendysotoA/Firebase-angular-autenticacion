import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

import { Router } from  "@angular/router";




@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {
  authState: any;

  constructor(private fAuth:AngularFireAuth, private router:Router) { }

  //METODO LOGIN
async login (email:string, password: string){

  try{
    const{user}=await this.fAuth.signInWithEmailAndPassword(email,password)
    return user;

  }catch(error){
    console.log(error);

  }

}


/*//LOGIN GOOGLE
async  loginWithGoogle(){
  await  this.fAuth.signInWithPopup(new auth.GoogleAuthProvider())
  this.router.navigate(['/dashboard']);
}*/

//METODO DE REGISTRO
async register (email:string, password: string){

  try{
    const{user}=await this.fAuth.createUserWithEmailAndPassword(email,password)
    return user;

  }catch(error){
    console.log(error);

  }

}

//METODO CERRAR SESION
async logout (){

  try{
  await this.fAuth.signOut();

  }catch(error){
    console.log(error);

  }

}

//TRAER USUARIO ACTUAL

getCurrentUser(){
  return this.fAuth.authState.pipe(first()).toPromise();
}

//RECUPERAR CONTRASEñA
async resetPassword(email: string): Promise<void> {
  try {
    return this.fAuth.sendPasswordResetEmail(email);
  } catch (error) {
    console.log(error);
  }
}




}

