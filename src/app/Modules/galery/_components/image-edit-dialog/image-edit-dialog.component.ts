import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../_models/image.model'
import { ImageService } from '../../_services/image.service';

@Component({
  selector: 'app-image-edit-dialog',
  templateUrl: './image-edit-dialog.component.html',
  styleUrls: ['./image-edit-dialog.component.scss']
})
export class ImageEditDialogComponent implements OnInit {
  imageDataToSave: Image = new Image();
  editImageModeOn: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ImageEditDialogComponent>,
    private imageService: ImageService) { }


  imageForm = new FormGroup({
    id: new FormControl(null, Validators.required),
    title: new FormControl(null, Validators.required),
    url: new FormControl(null, Validators.required),
    thumbnailUrl: new FormControl(null, Validators.required),
    albumId: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    if (this.data !== null) {
      this.editImageModeOn = true;
      this.setFormValues();
    }
  }

  setFormValues(): void {
    this.imageForm.setValue({
      id: this.data.imageObject.id,
      title: this.data.imageObject.title,
      url: this.data.imageObject.url,
      thumbnailUrl: this.data.imageObject.thumbnailUrl,
      albumId: this.data.imageObject.albumId
    });
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onSendClick(): void {
    this.imageDataToSave.id = this.imageForm.controls.id.value;
    this.imageDataToSave.title = this.imageForm.controls.title.value;
    this.imageDataToSave.url = this.imageForm.controls.url.value;
    this.imageDataToSave.thumbnailUrl = this.imageForm.controls.thumbnailUrl.value;
    this.imageDataToSave.albumId = this.imageForm.controls.albumId.value;

    this.editImageModeOn ? this.editImageApiCall() : this.addImageApiCall();
  }

  editImageApiCall(): void {
    this.imageService.editImageDetails(this.imageDataToSave).subscribe(response => {
      this.dialogRef.close(true)
    })

  }
  addImageApiCall(): void {
    this.imageService.addImage(this.imageDataToSave).subscribe(response => {
      this.dialogRef.close()
    })
  }
}
