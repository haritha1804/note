import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';

export const routes: Routes = [
    {path:"",children:[...HomeModule.routes]}
];
