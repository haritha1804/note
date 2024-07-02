import { Component } from '@angular/core';
import path from 'path';
import { Router, Routes } from '@angular/router';
import { NotelistComponent } from "../notelist/notelist.component";
import { NotecreateComponent } from '../notecreate/notecreate.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NotecreateComponent, NotelistComponent]
})
export class HomeComponent {
  constructor(private router: Router) {}
  btnClick=  () => {
    this.router.navigateByUrl('/app-notecreate');
};
}
export const routes: Routes = [
  {path:"app-home",component:HomeComponent},
  {path:"app-notelist",component:NotelistComponent},
  {path:"app-notecreate",component:NotecreateComponent}
];
