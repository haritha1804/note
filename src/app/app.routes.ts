import { Routes } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';

export const routes: Routes = [
    {path:"",children:[...HomeModule.routes]}
=======
import { NotecreateComponent } from './home/notecreate/notecreate.component';
import { HomeComponent } from './home/home/home.component';
import { HomeRoutingModule } from './home/home.router';

export const routes: Routes = [
    {path:"",children:[...HomeRoutingModule.routes]},
>>>>>>> 85d9a8ad8f38487b9102b36167493b873174fe51
];
