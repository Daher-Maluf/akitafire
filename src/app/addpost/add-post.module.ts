import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './addpost.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AddpostRoutingModule} from './addpost-routing.module';



@NgModule({
  declarations: [
    AddpostComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   AddpostRoutingModule
  ]
})
export class AddPostModule { }
