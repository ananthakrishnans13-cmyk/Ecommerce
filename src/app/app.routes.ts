import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Singleview } from './singleview/singleview';
import { Contactus } from './contactus/contactus';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'product',component:Product},
    {path:'contactus',component:Contactus},
    {path:'home',component:Home},
    {path:'singleview/:titleid',component:Singleview}

];
