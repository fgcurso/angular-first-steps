import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos : Array<any>;

  constructor(private service : PhotoService) { }

  ngOnInit() {
    this.service.getAll().subscribe((photos) => {
      this.photos = photos.json();
    });
  }

}
