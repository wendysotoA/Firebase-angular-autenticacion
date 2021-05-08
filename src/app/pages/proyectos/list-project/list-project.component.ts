import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {


  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }

  };

  fakeData=[
    {
      nombre:'App1',
      descrip:'sdsdsd',
      lugar:'dsdw',
      requisitos:'sewew'
    },
    {
      nombre:'App2',
      descrip:'sdsdsd',
      lugar:'dsdw',
      requisitos:'sewew'
    },
    {
      nombre:'App3',
      descrip:'sdsdsd',
      lugar:'dsdw',
      requisitos:'sewew'
    }
  ];


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //Detalles
  onDetails(item:any):void{
    this.navigationExtras.state.value=item;
    this.router.navigate(['details'],this.navigationExtras);
  }
  //Editar
  onEdit(item:any):void{

    this.navigationExtras.state.value=item;
    this.router.navigate(['edit'],this.navigationExtras);
  }
  //Eliminar
  onDelete(item:any):void{
    alert('Desea Eliminar?');
  }

}
