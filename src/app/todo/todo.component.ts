import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
// todo.component.ts

export class TodoComponent {
  newTodo = '';
  todos: any[] = [];
  editTodoId: number | null = null;
  showSuccess = false;

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({
        id: Date.now(),
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = '';
      this.showTemporaryMessage();
    }
  }

  editTodo(todo: any) {
    this.newTodo = todo.title;
    this.editTodoId = todo.id;
  }

  saveTodo() {
    const index = this.todos.findIndex(t => t.id === this.editTodoId);
    if (index !== -1) {
      this.todos[index].title = this.newTodo;
      this.newTodo = '';
      this.editTodoId = null;
      this.showTemporaryMessage();
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
  }

  showTemporaryMessage() {
    this.showSuccess = true;
    setTimeout(() => (this.showSuccess = false), 1500);
  }
}
