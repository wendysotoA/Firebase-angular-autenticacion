import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProyectoserviceService } from 'src/app/services/proyectoservice.service';
import { Projects } from '../../models/proyectos.interface';


@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  project:Projects;
proyectForm:FormGroup;

  constructor(private router:Router, private fb:FormBuilder, private proyService:ProyectoserviceService) {
    const navigation=this.router.getCurrentNavigation();
    this.project=navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {

    if(typeof this.project ==='undefined'){
      this.router.navigate(['new'])

    }else{
      this.proyectForm.patchValue(this.project);
    }
  }
//GUARDAR
  onSave(){
//console.log('saved', this.proyectForm.value)
if(this.proyectForm.valid){
  const proyecto=this.proyectForm.value;
  const proyectoId=this.project?.id|| null;
  this.proyService.GuardarProject(proyecto,proyectoId);
  this.proyectForm.reset();

}

  }

  private initForm(){
    this.proyectForm=this.fb.group({
      nombre:['',[Validators.required]],
      descrip:['',[Validators.required]],
      lugar:['',[Validators.required]],
      requisitos:['',[Validators.required]],

    })

  }
  //RETORNAR
  backList(){
    this.router.navigate(['list'])

  }

  //VALIDACIONES
  validacion(input:string):string{
    const campovalido=this.proyectForm.get(input);
    return (!campovalido.valid && campovalido.touched)?
    'is-invalid' :campovalido.touched? 'is-valid': '';
  }


}
