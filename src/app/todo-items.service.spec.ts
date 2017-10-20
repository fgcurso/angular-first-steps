import { TestBed, inject } from '@angular/core/testing';

import { TodoItemsService } from './todo-items.service';

describe('TodoItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoItemsService]
    });
  });

  it('should be created', inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service).toBeTruthy();
  }));
});
