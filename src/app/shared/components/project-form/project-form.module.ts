import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectFormComponent } from './project-form.component';



@NgModule({
  declarations: [ProjectFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ProjectFormComponent]
})
export class ProjectFormModule { }
