import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PersonaComponent } from './persona/persona.component';
import { UsersComponent } from './users/users.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: 'me', component: PersonaComponent },
  { path: 'users', component: UsersComponent },
  { path: 'photos', component: PhotoListComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
