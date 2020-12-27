import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GaleryRoutingModule } from './galery-routing.module';
import { GaleryComponent } from './galery.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ImageCardComponent } from './_components/image-card/image-card.component';
import { ImageDetailsComponent } from './_components/image-details/image-details.component';
import { ImageEditDialogComponent } from './_components/image-edit-dialog/image-edit-dialog.component';
import { ImageDeleteDialogComponent } from './_components/image-delete-dialog/image-delete-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [GaleryComponent, ImageCardComponent, ImageDetailsComponent, ImageEditDialogComponent, ImageDeleteDialogComponent],
  imports: [
    CommonModule,
    GaleryRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    InfiniteScrollModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  entryComponents: [ImageEditDialogComponent, ImageDeleteDialogComponent]
})
export class GaleryModule { }
