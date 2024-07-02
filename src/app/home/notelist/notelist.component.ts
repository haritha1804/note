import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-notelist',
  standalone: true,
  imports: [],
  templateUrl: './notelist.component.html',
  styleUrl: './notelist.component.css'
})
export class NotelistComponent {

}
export const routes: Routes = [
  {path:"app-notelist",component:NotelistComponent}
];