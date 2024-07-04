import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { NoteeditComponent } from '../../noteedit/noteedit.component';
import { MyService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotecreateComponent } from "../notecreate/notecreate.component";

@Component({
    selector: 'app-notelist',
    standalone: true,
    templateUrl: './notelist.component.html',
    styleUrl: './notelist.component.css',
    imports: [RouterOutlet, NotelistComponent, CommonModule, FormsModule, NotecreateComponent]
})
export class NotelistComponent implements OnInit {
  data: any;
  addItem(newItem: String) {
    this.data.push(newItem);
}
  ngOnInit(): void {
    
  }
//   // items = ['item1', 'item2', 'item3', 'item4'];

//   // addItem(newItem: string) {
//   //   this.items.push(newItem);
//   // }
//   data: string[] = [];
// // items: any;

//   constructor(private myService: MyService) { }

//   ngOnInit(): void {
//     this.data = this.myService.getData();
//   }
}
export const routes: Routes = [
  {path:"app-notelist",component:NotelistComponent}
];
