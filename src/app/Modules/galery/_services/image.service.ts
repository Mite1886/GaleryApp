import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../_models/image.model'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ImageService {
  dummyApiUrl = environment.dummyApiUrl;

  constructor(private http: HttpClient) {
  }

  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.dummyApiUrl);
  }

  getImageDetails(id: number): Observable<Image> {
    return this.http.get<Image>(this.dummyApiUrl + id);
  }

  deleteImage(id: number): Observable<Image> {
    return this.http.delete<Image>(this.dummyApiUrl + id);
  }

  addImage(image : Image): Observable<Image> {
    return this.http.post<Image>(this.dummyApiUrl, image);
  }

  editImageDetails(image : Image): Observable<Image> {
    return this.http.put<Image>(this.dummyApiUrl + image.id, image);
  }
  
}
