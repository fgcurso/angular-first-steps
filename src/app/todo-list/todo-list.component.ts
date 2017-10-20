import { Component, OnInit } from '@angular/core';

import { TodoItemsService } from '../todo-items.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  items : string[] = [];

  constructor(private todoItemsService : TodoItemsService) { }

  ngOnInit() {
    this.todoItemsService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  addItem(newItem: string) {
    if (!newItem) {
      return;
    }

    this.items.push(newItem);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
