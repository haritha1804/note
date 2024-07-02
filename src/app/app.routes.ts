import { Routes } from '@angular/router';
import { NotecreateComponent } from './home/notecreate/notecreate.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"create",component:NotecreateComponent}
];
