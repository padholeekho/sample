import { Routes } from '@angular/router';

export const moduleRoutes : Routes = [
    { path: 'home', loadChildren: 'src/app/modules/home/home.module#HomeModule'},
    { path: 'about', loadChildren: 'src/app/modules/about/about.module#AboutModule'},
    { path: 'contact', loadChildren: 'src/app/modules/contact/contact.module#ContactModule'}
]