import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./Modules/galery/galery.module').then(m => m.GaleryModule) },
  { path: 'galery', loadChildren: () => import('./Modules/galery/galery.module').then(m => m.GaleryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
