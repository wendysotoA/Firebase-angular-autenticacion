import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:string;
  constructor(private serviceauth:FirebaseauthService) { }

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




