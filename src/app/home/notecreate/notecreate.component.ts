import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotelistComponent } from '../notelist/notelist.component';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notecreate',
  standalone: true,
  imports: [RouterOutlet,NotelistComponent,FormsModule,CommonModule],
  templateUrl: './notecreate.component.html',
  styleUrl: './notecreate.component.css'
})

export class NotecreateComponent {
  title: string="";
  content: string="";
  notes: { title: string, content: string }[] = [];

  onSubmit() {
    const newNote = { title: this.title, content: this.content };
    this.notes.push(newNote);
    console.log('Notes:', this.notes);
    // Clear the form fields after submission
    this.title = '';
    this.content = '';
  }
}
