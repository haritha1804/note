import { Component, EventEmitter, Output, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotelistComponent } from '../notelist/notelist.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MyService } from '../../data.service';
@Component({
  selector: 'app-notecreate',
  standalone: true,
  imports: [RouterOutlet,NotelistComponent,FormsModule,CommonModule],
  templateUrl: './notecreate.component.html',
  styleUrl: './notecreate.component.css'
})
// export class NotecreateComponent {

//   @Output() newItemEvent = new EventEmitter<string>();

//   addNewItem(value: string) {
//     this.newItemEvent.emit(value);
//   }
// }
export class NotecreateComponent {
  data: string[];
  title: string[]=[];
  newItem: string ="";
  // newtitle: string="";
  router: any;
  constructor(private myService: MyService) {
    this.data = myService.getData();
    // this.title = myService.getTitle();
  }
  addItem() {
    this.myService.addData(this.newItem);
    this.myService.addTitle(this.newItem);
    this.newItem = '';
  }
    // this.router.navigate(['']);
  // items = ['item1', 'item2', 'item3', 'item4'];

  // addItem(newItem: string) {
  //   this.items.push(newItem);
  // }
  
}



// export class NotecreateComponent {
  // title: string="";
  // content: string="";
  // notes: { title: string, content: string }[] = [];

  // onSubmit() {
  //   const newNote = { title: this.title, content: this.content };
  //   this.notes.push(newNote);
  //   console.log('Notes:', this.notes);
  //   // Clear the form fields after submission
  //   this.title = '';
  //   this.content = '';
  // }
// }
