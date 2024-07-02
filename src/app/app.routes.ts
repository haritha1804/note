import { Routes } from '@angular/router';
import { NotecreateComponent } from './home/notecreate/notecreate.component';
import { HomeComponent } from './home/home/home.component';
import { HomeRoutingModule } from './home/home.router';

export const routes: Routes = [
    {path:"",children:[...HomeRoutingModule.routes]},
];
