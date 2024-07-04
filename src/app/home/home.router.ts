import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotecreateComponent } from './notecreate/notecreate.component';
import { NotelistComponent } from './notelist/notelist.component';
import { NoteeditComponent } from '../noteedit/noteedit.component';
import { HomeComponent } from './home/home.component';

const admin: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: NotecreateComponent },
  { path: 'list', component: NotelistComponent },
  {path:"edit",component:NoteeditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(admin)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
  static routes = admin;
}
