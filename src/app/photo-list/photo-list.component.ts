import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  @ViewChild('previewElement')
  private previewEl : ElementRef;

  photos : Array<any>;

  selectedPhoto? : any;

  constructor(private service : PhotoService) { }

  ngOnInit() : void {
    this.service.getAll().subscribe((photos) => {
      this.photos = photos.json();
    });
  }

  onMouseEnter(e : MouseEvent, photo) : void {
    if (!this.previewEl) {
      return;
    }

    this.selectedPhoto = photo;
    this.previewEl.nativeElement.style.top =
      `${e.clientY}px`;
    this.previewEl.nativeElement.style.left =
      `${e.clientX + 15}px`;
  }

  onMouseLeave() : void {
    this.selectedPhoto = null;
  }

}
