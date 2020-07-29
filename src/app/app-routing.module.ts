import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
