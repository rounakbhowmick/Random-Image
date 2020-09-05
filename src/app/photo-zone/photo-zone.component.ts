import { PhotozoneService } from './../photozone.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-photo-zone',
  templateUrl: './photo-zone.component.html',
  styleUrls: ['./photo-zone.component.css'],
})
export class PhotoZoneComponent implements OnInit {
  photoUrl: string;

  constructor(private photosService: PhotozoneService) {
    this.fetchPhoto();
  }
  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }
  ngOnInit(): void {}
}
