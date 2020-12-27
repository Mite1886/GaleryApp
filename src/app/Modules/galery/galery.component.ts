import { Component, OnInit } from '@angular/core';
import { ImageService } from './_services/image.service'
import { Image } from './_models/image.model'
import { ImageEditDialogComponent } from './_components/image-edit-dialog/image-edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {
  public response: Array<Image> = [];
  public imagesList: Array<Image> = [];
  currentPageSize: number = 50;
  constructor(private imageService: ImageService,
    public dialog: MatDialog) {
    this.imageService.getAllImages()
      .subscribe(response => {
        this.response = response;
        this.imagesList = response.filter(image => {
          return image.id < 50;
        });
      });
  }

  ngOnInit() {
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(ImageEditDialogComponent, {
      panelClass: 'custom-dialog-container',
    });

  }

  onScroll() {
    this.appendItems();
  }

  appendItems() {
    let dataToAdd = this.response;
    let dataToConcat = dataToAdd.slice(this.currentPageSize, this.currentPageSize + this.currentPageSize)
    dataToConcat.forEach(image => {
      this.imagesList.push(image)
    })
    this.currentPageSize += this.currentPageSize;
  }

}

