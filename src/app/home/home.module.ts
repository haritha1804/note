import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotecreateComponent } from './notecreate/notecreate.component';
import { HomeComponent } from './home/home.component';
import { NotelistComponent } from './notelist/notelist.component';
import { RouterModule, Routes } from '@angular/router';
import { NoteeditComponent } from '../noteedit/noteedit.component';
const admin: Routes = [
  {path:'',component:HomeComponent},
  { path: 'create', component: NotecreateComponent },
  { path: 'list', component: NotelistComponent },
  {path:"edit",component:NoteeditComponent},
  { path: '', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: 
   [ RouterModule.forRoot(admin)],
  exports:[RouterModule]
})
export class HomeModule { 
static routes= admin;
}
