import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  @Input()
  user : any;

  @Input()
  index : number;

  @Output()
  onDelete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
  }

  delete() {
    this.onDelete.emit(this.index);
    return false;
  }

}
