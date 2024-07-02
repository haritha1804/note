import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home/home.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'notetask';
}

