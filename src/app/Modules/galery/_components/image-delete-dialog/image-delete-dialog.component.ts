import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageService } from '../../_services/image.service';

@Component({
  selector: 'app-image-delete-dialog',
  templateUrl: './image-delete-dialog.component.html',
  styleUrls: ['./image-delete-dialog.component.scss']
})
export class ImageDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ImageDeleteDialogComponent>,
    private imageService: ImageService) { }

  ngOnInit(): void {
  }

  deleteImage(): void {
    this.imageService.deleteImage(this.data.imageObject.id).subscribe(() => {
      this.dialogRef.close(true);
    });
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

}
