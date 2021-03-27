import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';


import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [MainComponent],
    imports:[
     MainRoutingModule,
     CommonModule,
     ReactiveFormsModule
    ],
    
})

export class MainModule {}