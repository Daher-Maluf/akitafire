import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './addpost.component';
import {AddpostRoutingModule} from './addpost.routing.module';



@NgModule({
  declarations: [
    AddpostComponent,
   
  ],
  imports: [
    CommonModule,
    AddpostRoutingModule
  ]
})
export class AddPostModule { }
