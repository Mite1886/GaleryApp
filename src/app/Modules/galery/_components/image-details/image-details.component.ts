import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../../_services/image.service';

import { Image } from '../../_models/image.model'
import { MatDialog } from '@angular/material/dialog';
import { ImageEditDialogComponent } from '../image-edit-dialog/image-edit-dialog.component';
import { ImageDeleteDialogComponent } from '../image-delete-dialog/image-delete-dialog.component';
@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  imageId!: number;
  imageDto!: Image;

  constructor(private route: ActivatedRoute,
    private imageService: ImageService,
    public dialog: MatDialog,
    private router: Router) {
    this.route.params.subscribe(params => this.imageId = params['id']);
    this.imageService.getImageDetails(this.imageId).subscribe(response => {
      this.imageDto = response;
    });
  }

  ngOnInit(): void {
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(ImageEditDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        imageObject: this.imageDto
      }
    });

    dialogRef.afterClosed().subscribe((navigateToMainPage: boolean) => {
      if (navigateToMainPage) {
        this.router.navigate(['']);
      }
    });
  }

  deleteImage() {
    const dialogRef = this.dialog.open(ImageDeleteDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {
        imageObject: this.imageDto
      }
    });

    dialogRef.afterClosed().subscribe((navigateToMainPage: boolean) => {
      if (navigateToMainPage) {
        this.router.navigate(['']);
      }
    });
  }

  backToHome() : void  {
    this.router.navigate(['']);
  }

}
