import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from '../services/firebaseauth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  usuario:string;

  constructor( private serviceauth:FirebaseauthService) { }

  ngOnInit(): void {
    try{
      this.serviceauth.getCurrentUser().then(r=>{
        this.usuario=r?.email;

       console.log(r?.email);

     })
    }catch(error){
      console.log(error);
    }
  }

  //CERRAR SESION
  Onlogout(){
    this.serviceauth.logout();
  }


}
