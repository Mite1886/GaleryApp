import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleryComponent } from './galery.component';
import { ImageDetailsComponent } from './_components/image-details/image-details.component';

const routes: Routes = [
  { path: '', component: GaleryComponent },
  { path: 'image/:id', component: ImageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleryRoutingModule { }
