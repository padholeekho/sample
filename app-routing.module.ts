import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent, NavComponent, FnfComponent } from 'src/app/shared/index';
import { moduleRoutes } from 'src/app/shared/index';
import { AuthGuard } from 'src/app/core/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/home',
    pathMatch: 'full'
  },
  { 
    path: 'auth',   
    component: HeaderComponent,
    children: moduleRoutes
  },
  {
    path: 'user',
    component: NavComponent,
    canActivate: [AuthGuard],
    children: moduleRoutes
  },
  {
    path: 'pageNotFound',
    component: FnfComponent
  },
  {
    path: '**',
    redirectTo: 'pageNotFound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
