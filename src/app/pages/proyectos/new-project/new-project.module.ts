import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewProjectRoutingModule } from './new-project-routing.module';
import { NewProjectComponent } from './new-project.component';
import { ProjectFormModule } from 'src/app/shared/components/project-form/project-form.module';


@NgModule({
  declarations: [
    NewProjectComponent
  ],
  imports: [
    CommonModule,
    NewProjectRoutingModule,
    ProjectFormModule
  ]
})
export class NewProjectModule { }
