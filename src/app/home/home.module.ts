import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotecreateComponent } from './notecreate/notecreate.component';
import { HomeComponent } from './home/home.component';
import { NotelistComponent } from './notelist/notelist.component';
import { Routes } from '@angular/router';
import { NoteeditComponent } from '../noteedit/noteedit.component';



@NgModule({
  declarations: [
   ],
  imports: [
    CommonModule,NotelistComponent
  ]
})
export class HomeModule {

}



