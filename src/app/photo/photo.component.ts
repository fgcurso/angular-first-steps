import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  photo? : Photo;

  constructor(private route : ActivatedRoute, private service : PhotoService) { }

  private getPhoto(id: number) {
    this.service.get(id).subscribe(photo => {
      this.photo = photo;
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getPhoto(id);
    })
  }

}
