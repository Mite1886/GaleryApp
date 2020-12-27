import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Image } from '../../_models/image.model'
import { ImageDeleteDialogComponent } from '../image-delete-dialog/image-delete-dialog.component';
import { ImageEditDialogComponent } from '../image-edit-dialog/image-edit-dialog.component';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image!: Image;
  constructor(private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showImageDetails(imageId: number): void {
    this.router.navigate(['image', imageId]);
  }

  openEditDialog() {
    const dialogRefEdit = this.dialog.open(ImageEditDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        imageObject: this.image
      }
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  deleteImage() {
    const dialogRef = this.dialog.open(ImageDeleteDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        imageObject: this.image
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
