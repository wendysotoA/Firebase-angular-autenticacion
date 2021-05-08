import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Projects } from 'src/app/shared/models/proyectos.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }

  }

proyectos:Projects=null;

  constructor(private router:Router) {
    const navigation=this.router.getCurrentNavigation();
    this.proyectos=navigation?.extras?.state?.value;

  }

  ngOnInit(): void {
    if(typeof this.proyectos ==='undefined'){
      this.router.navigate(['list'])
    }
  }

  onDetails(item:any):void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['details'],this.navigationExtras);
  }

  onEdit():void{

    this.navigationExtras.state.value=this.proyectos;
    this.router.navigate(['edit'],this.navigationExtras);
  }
  backList(){
    this.router.navigate(['list'])
  }

  onDelete(){
    window.alert('Desea Eliminar?');
  }



}
