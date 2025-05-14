import { Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // Default route to 'todo'
  { path: 'todo', component: TodoComponent }, // The TodoComponent for the '/todo' route
  // You can add more routes if needed
];
